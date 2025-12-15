#!/bin/bash
handle_error() {
    echo ""
    echo -e "Error in line: $1. STOPPED"
    exit 1
}

trap 'handle_error $LINENO' ERR
set -e 

if [[ -f .env ]]; then
    export $(grep -v '^#' .env | xargs)
else
    exit 1
fi

echo "Etap 1 - Sprawdzanie czy istnieje certyfikat SSL"
# Sprawdzenie czy istnieją certyfikaty.

if [[ ! -f "./ssl/dyplomowa.crt" ]]; then
    echo "Nie istnieją wystawione certyfikaty."
    echo "Trwa generowanie nowego certyfikatu."
    npm run ssl:generate
fi


echo "Etap 2 - Uruchomienie infrastruktury backendowej"


# 1. Build database container and run
docker compose up -d srv-strapi-db

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi-db 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done

# #echo -e "${BLUE}♻️  FAZA 2: Przywracanie danych (Restore)...${NC}"

echo "Rekonstrukcja bazy danych"
npm run db:backup-restore


echo "✅ Baza przywrócona (symulacja)."



# Definicje ścieżek do aplikacji
NEXTJS_DIR="./apps/nextjs"
STRAPI_DIR="./apps/strapi/wwwstrapi" # Upewnij się, że tu jest package.json strapi

# Funkcja pomocnicza do instalacji
ensure_modules() {
    local DIR=$1
    local NAME=$2
    
    if [[ ! -d "$DIR/node_modules" ]]; then
        echo -e "${YELLOW}📦 Brak node_modules dla $NAME. Instalacja...${NC}"
        # Wchodzimy w podpowłokę (nawiasy), żeby cd nie zmieniło katalogu głównego skryptu
        (cd "$DIR" && npm install --silent)
        echo -e "${GREEN}✅ Zainstalowano zależności dla $NAME.${NC}"
    else
        echo -e "${GREEN}✅ Zależności dla $NAME już istnieją.${NC}"
    fi
}

# Sprawdzamy Strapi
ensure_modules "$STRAPI_DIR" "Strapi"

# Sprawdzamy Next.js
ensure_modules "$NEXTJS_DIR" "Next.js"



docker compose up -d srv-strapi

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done


bash ./scripts/config-locales-preload.sh

# 6. Uruchom cały projekt (resztę) na bazie konfiguracji
docker compose up -d --build srv-nextjs srv-nginx








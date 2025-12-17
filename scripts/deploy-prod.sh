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

# if [[ ! -d "./uploads" ]]; then
#     mkdir -p "./uploads"
# fi

echo "Etap 1 - Sprawdzanie czy istnieje certyfikat SSL"

if [[ ! -f "./ssl/dyplomowa.crt" ]]; then
    echo "Nie istnieją wystawione certyfikaty."
    echo "Trwa generowanie nowego certyfikatu."
    npm run ssl:generate
fi


echo "Etap 2 - Uruchamienie infrastruktury backendowej"


docker compose -f docker-compose.prod.yaml up -d srv-strapi-db

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi-db 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done

echo "Baza danych:rekonstrukcja - proszę czekać..."
npm run db:backup-restore
echo "Baza danych:rekonstrukcja - gotowe"


NEXTJS_DIR="./apps/nextjs"
STRAPI_DIR="./apps/strapi"


docker compose -f docker-compose.prod.yaml up -d srv-strapi

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done


bash ./scripts/config-locales-preload.sh


echo "Uruchamianie pozostałych komponentów programu"
docker compose -f docker-compose.prod.yaml up -d --build srv-nextjs srv-nginx








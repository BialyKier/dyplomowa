




# KOPIA - starra


#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🏗️  FAZA 1: Uruchamianie Bazy Danych...${NC}"

# 1. Startujemy TYLKO bazę
docker compose up -d srv-strapi-db

# 2. Czekamy aż baza będzie "healthy" (gotowa na połączenia)
echo "⏳ Czekam na gotowość Postgresa..."
while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi-db 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done
echo -e "\n✅ Baza danych jest gotowa."

# ---------------------------------------------------------
# FAZA RESTORE (Tu wykonujesz swoje operacje na bazie)
# Strapi jest WYŁĄCZONE, więc nikt nie blokuje bazy.
# ---------------------------------------------------------
echo -e "${BLUE}♻️  FAZA 2: Przywracanie danych (Restore)...${NC}"

# Przykład (dostosuj do swoich nazw plików/haseł):
# Uwaga: Łączymy się do bazy 'postgres', żeby usunąć bazę docelową
# docker exec srv-strapi-db psql -U admin -d postgres -c "DROP DATABASE IF EXISTS dyplomowa_db_strapi;"
# docker exec srv-strapi-db psql -U admin -d postgres -c "CREATE DATABASE dyplomowa_db_strapi;"
# docker exec -i srv-strapi-db psql -U admin -d dyplomowa_db_strapi < ./backup/moj_backup.sql

echo "✅ Baza przywrócona (symulacja)."

# ---------------------------------------------------------

echo -e "${BLUE}🚀 FAZA 3: Uruchamianie Strapi (Backend)...${NC}"

# 3. Dopiero teraz startujemy Strapi
docker compose up -d srv-strapi

# 4. Czekamy aż Strapi wstanie (żeby API działało dla preloadu)
echo "⏳ Czekam na API Strapi..."
while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done
echo -e "\n✅ Strapi jest gotowe."

echo -e "${BLUE}kv FAZA 4: Pobieranie konfiguracji (Preload)...${NC}"

# 5. Pobieramy języki (skrypt TS łączy się z localhost:1337)
cd nextjs
npm run preload
cd ..

echo -e "${BLUE}🐳 FAZA 5: Finalny Start Systemu...${NC}"

# 6. Stopujemy wszystko (opcjonalne, ale czyste)
# docker compose stop 
# ^ Możesz to pominąć, 'up' po prostu dołączy resztę

# 7. Budujemy Next.js (z nowym plikiem) i startujemy resztę
docker compose up -d --build srv-nextjs srv-nginx

echo -e "${GREEN}✅✅✅ WSZYSTKO GOTOWE! Aplikacja dostępna.${NC}"

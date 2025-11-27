#!/bin/bash


# 1. Build database container and run
docker compose up -d srv-strapi-db

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi-db 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done

#echo -e "${BLUE}♻️  FAZA 2: Przywracanie danych (Restore)...${NC}"

# Przykład (dostosuj do swoich nazw plików/haseł):
# Uwaga: Łączymy się do bazy 'postgres', żeby usunąć bazę docelową
# docker exec srv-strapi-db psql -U admin -d postgres -c "DROP DATABASE IF EXISTS dyplomowa_db_strapi;"
# docker exec srv-strapi-db psql -U admin -d postgres -c "CREATE DATABASE dyplomowa_db_strapi;"
# docker exec -i srv-strapi-db psql -U admin -d dyplomowa_db_strapi < ./backup/moj_backup.sql

docker exec -it srv-strapi-db psql -U admin -d postgres -c "DROP DATABASE dyplomowa_db_strapi;"
docker exec -it srv-strapi-db psql -U admin -d postgres -c "CREATE DATABASE dyplomowa_db_strapi;"

# ---------------------------------------------------------
# FAZA RESTORE (Tu wykonujesz swoje operacje na bazie)
# Strapi jest WYŁĄCZONE, więc nikt nie blokuje bazy.
# ---------------------------------------------------------
# 2. Delete auto-created database
# 3. Create new database and update from backup
echo "✅ Baza przywrócona (symulacja)."
# 4. Build and run Strapi container
docker compose up -d srv-strapi

while [ "$(docker inspect -f '{{.State.Health.Status}}' srv-strapi 2>/dev/null)" != "healthy" ]; do
    sleep 1
    echo -n "."
done

# 5. Preload the language config (locales-update.ts)
# npx update-locales.ts

# 6. Wyłącz wszystko
docker compose down

# 5. Uruchom cały projekt na bazie konfiguracji
docker compose up --build








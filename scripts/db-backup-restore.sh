#!/bin/bash


docker exec -it srv-strapi-db psql -U admin -d dyplomowa_db_strapi < ./apps/database/dbstrapi/backup/backup.sql
#!/bin/bash


docker exec -it srv-strapi-db pg_dump -U admin -d dyplomowa_db_strapi > ./apps/database/dbstrapi/backup/backup.sql
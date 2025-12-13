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

CERT_DIR_NAME="/certs"
CERT_DIR_NAME_HOST="./apps/ssl"


if ! command -v docker; then
    echo "Docker nie jest zainstalowany"
    exit 2
fi

echo "Trwa weryfikacja struktury katalogów miejsca docelowego..."

mkdir -p "$CERT_DIR_NAME_HOST"

echo "Trwa generowanie certyfikatu..."

docker run --rm -v "$CERT_DIR_NAME_HOST:$CERT_DIR_NAME" -e CERT_DIR="$CERT_DIR_NAME" alpine sh -c '
apk add --no-cache openssl && \
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout "$CERT_DIR/dyplomowa.key" \
    -out "$CERT_DIR/dyplomowa.crt" \
    -subj "/C=PL/ST=Mazowieckie/L=Warszawa/O=MojaFirma/OU=IT/CN=example.com" && \

chmod 644 "$CERT_DIR/dyplomowa.key" "$CERT_DIR/dyplomowa.crt"
'

echo "Zostały wygenerowane następujące pliki: "
ls -l "$CERT_DIR_NAME_HOST"
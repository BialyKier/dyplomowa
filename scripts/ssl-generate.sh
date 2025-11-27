#!/bin/bash


openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout dyplomowa.key \
    -out dyplomowa.crt \
    -subj "/C=PL/ST=Mazowieckie/L=Warszawa/O=MojaFirma/OU=IT/CN=example.com"


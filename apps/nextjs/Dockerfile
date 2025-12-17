# FROM node:22

# # 1. Instalacja zależności systemowych (Debian używa apt-get)
# RUN apt-get update && apt-get install -y \
#     libvips-dev \
#     bash \
#     openssl \
#     git \
#     curl \
#     nano \
#     && rm -rf /var/lib/apt/lists/*

# # 2. Konfiguracja aliasu (dla wygody)
# RUN echo "alias l='ls -CF'" >> /root/.bashrc

# WORKDIR /app

# # W trybie DEV kod jest mapowany z hosta (bind mount),
# # więc node_modules z hosta (Ubuntu) zadziałają tutaj (Debian).

# EXPOSE 3000

# # Domyślna komenda startowa dla deweloperki
# CMD ["npm", "run", "dev"]

FROM node:22

RUN apt-get update && \
    apt-get install -y libvips && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

 CMD ["npm", "run", "dev"]
 #CMD ["npm", "start"]

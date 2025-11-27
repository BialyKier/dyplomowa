FROM node:22

RUN apt-get update && \
    apt-get install -y libvips && \
    rm -rf /var/lib/apt/lists/*
    
RUN apt-get update && \
    apt-get install -y micro && \
    apt-get install -y openssl && \
    echo "alias l='ls -CF'" >> /etc/bash.bashrc && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

 CMD ["npm", "run", "dev"]
 #CMD ["npm", "start"]
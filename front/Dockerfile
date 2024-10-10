# Dockerfile pour le frontend React
# Utilisation de l'image node officielle
FROM node:16-alpine

# Répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package.json

# Installation des dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construction de l'application
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Démarrage de l'application
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000", "--disableHostCheck", "true"]
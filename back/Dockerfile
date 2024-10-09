# Dockerfile pour le backend FastAPI
# Utilisation de l'image python officielle
FROM python:3.10-alpine

# Répertoire de travail de l'application
WORKDIR /app

# Installer les dépendances système nécessaires pour scikit-learn
RUN apk add --no-cache build-base python3-dev musl-dev gfortran

# Copier les fichiers requirements.txt pour l'installation des dépendances
COPY requirements.txt requirements.txt

# Installation des dépendances
RUN pip install -r requirements.txt

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port de FastAPI
EXPOSE 8000

# Commande de démarrage du serveur Uvicorn
CMD ["uvicorn", "API:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

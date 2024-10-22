# Étape 1 : Utiliser une image de base officielle de Node.js pour construire l'application
FROM node:18-alpine AS builder

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Créer une image plus légère pour exécuter l'application
FROM node:18-alpine AS runner

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers nécessaires de l'étape précédente
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Installer uniquement les dépendances de production
RUN npm install --production

# Définir la variable d'environnement pour la production
ENV NODE_ENV=production

# Exposer le port sur lequel l'application sera servie
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["npm", "run", "start"]

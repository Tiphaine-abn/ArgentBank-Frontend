# Argent Bank

Argent Bank est une banque en ligne offrant aux clients la possibilité de gérer facilement leurs comptes bancaires depuis une interface utilisateur. Ce projet représente le développement du front-end de l'application, en utilisant **React** pour la création de l'interface et **Redux** pour la gestion de l'état global de l'application.

## Fonctionnalités principales
- Authentification des utilisateurs (connexion/déconnexion)
- Consultation des comptes (solde et détails)
- Modification des informations personnelles
- Gestion des transactions (historique et détails des transactions)

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- MongoDB Community Server

## Installation

1. Clonez ces dépôts sur votre machine locale :
   ```
   git clone https://github.com/Tiphaine-abn/ArgentBank-Frontend.git
   git clone https://github.com/Tiphaine-abn/ArgentBank-Backend.git
   ```

2. Accédez au répertoire du projet et installez les dépendances :
    ```
    cd ArgentBank-Frontend
    npm install # Installer les dépendances  
    npm start # Démarrer le serveur de développement local
    ```

3. Initialisez la base de données :
    ```
    cd ArgentBank-Backend
    npm run populate-db # Initialiser la base de données avec des utilisateurs fictifs
    npm run dev:server # Démarrer le serveur backend
    ```

## Exemples de comptes pour se connecter

Une fois la base de données initialisée, vous pouvez utiliser les informations suivantes pour vous connecter à l'application :

Tony Stark

- Prénom : Tony
- Nom : Stark
- Email : tony@stark.com
- Mot de passe : password123

Steve Rogers

- Prénom : Steve
- Nom : Rogers
- Email : steve@rogers.com
- Mot de passe : password456

## Lancement du projet

### `npm start`

- Démarre l'application en mode développement.
- Ouvre [http://localhost:3000](http://localhost:3000) dans votre navigateur.
- Rechargement automatique à chaque modification du code.

### `npm run dev:server`

- Démarre le serveur de développement.
- Permet le rechargement automatique et le débogage des changements en temps réel.

## Technologies utilisées

- **React** (Bibliothèque JavaScript pour la création d'interface utilisateur)
- **Redux** (Gestion d'état global)
- **React Router** (Gestion de la navigation dans l'application)

## API Documentation

Les endpoints de l'API utilisés dans cette application sont documentés à l'aide de **Swagger**. Vous pouvez consulter les spécifications dans le fichier `swagger.yaml` situé à la racine du projet.

Une fois le serveur de développement lancé, vous pouvez accéder à la documentation Swagger à l'adresse suivante : http://localhost:3001/api-docs.



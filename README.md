# 📚 Guide d'Installation et d'Utilisation de l'Application Node.js avec Docker

## 🛠️ Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- 🐳 Docker
- 🦫 DBeaver
- 🖥️ Un terminal ou une invite de commande

## 🚀 Installation

### Cloner le dépôt

```bash
git clone https://github.com/sergeimlk/NpmNodeExpress.git
cd NpmNodeExpress
```

### Créer un fichier `.env` pour les variables d'environnement

```bash
cp .env
```

### Configurer les variables d'environnement dans le fichier `.env`

```env
DB_HOST=db
DB_USER=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
DB_NAME=votre_base_de_donnees
```

### Construire et démarrer les conteneurs Docker

## Résultats de la commande `docker-compose up --build`

Voici les résultats que vous devriez obtenir après avoir exécuté la commande :

![Image 1](DOCKER%20INIT%20SCREENS/1.png)
![Image 2](DOCKER%20INIT%20SCREENS/2.png)
![Image 3](DOCKER%20INIT%20SCREENS/3.png)

```bash
docker-compose up --build
```

## 📝 Utilisation

### Accéder au serveur

Le serveur sera accessible à l'adresse [http://localhost:3001](http://localhost:3001).

### Accéder à la base de données

Utilisez DBeaver ou un autre client SQL pour vous connecter à la base de données. Les informations de connexion seront celles définies dans le fichier `.env`.

## 🔄 Commandes Utiles

### Arrêter les conteneurs

```bash
docker-compose down
```

### Recréer les conteneurs

```bash
docker-compose up --build
```

### Afficher les logs

```bash
docker-compose logs
```

## 📂 Structure du Projet

```
.
├── src/
│   ├── controllers/
│   │   ├── beers.ts
│   │   └── breweries.ts
│   ├── models/
│   │   ├── beers.ts
│   │   └── breweries.ts
│   ├── routes/
│   │   ├── beers.ts
│   │   └── breweries.ts
│   ├── app.ts
│   └── server.ts
├── db-scripts/
│   ├── 1-CREATE-tables.sql
│   ├── 2-CREATE-functions.sql
│   ├── 3-CREATE-triggers.sql
│   └── 4-INSERT-fixtures.sql
├── docker-compose.yml
├── .env
├── .env.example
├── nodemon.json
├── package.json
├── README.md
└── tsconfig.json
```

## ❓ FAQ

### Comment puis-je changer le port du serveur ?

Modifiez le fichier `docker-compose.yml` et changez le port mappé pour le service du serveur.

### Comment puis-je ajouter un nouveau service ?

Ajoutez une nouvelle section dans le fichier `docker-compose.yml` pour le service souhaité.

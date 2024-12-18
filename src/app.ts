// Import nécessaires
import express, { Request, Response } from 'express';
import beersRoutes from './routes/beers';
import breweriesRoutes from './routes/breweries';

// Création de l'application Express
const app = express();

// Configuration des middlewares de base
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Register routes
const path = '/api'; // Define the path prefix
app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes); // Register breweries routes

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

export default app;

// Définition de la route racine
app.get('/', (req: Request, res: Response) => {
    res.send(`
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" style="width: 10%;" />

        <h1>Bienvenue sur Mon Serveur</h1>
        <h2>Découvrez nos bières et brasseries</h2>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Outils et dépendances TypeScript avec Express</title>
        </head>
        <body>
            <h1>Outils et dépendances TypeScript avec Express</h1>

            <h2>Outils et dépendances principales</h2>
            <ul>
                <li><strong>Express</strong> : Framework web pour Node.js.</li>
            </ul>

            <h2>Dépendances de développement</h2>
            <ul>
                <li><strong>TypeScript</strong> : Langage de programmation typé qui se compile en JavaScript.</li>
                <li><strong>ts-node</strong> : Exécute les fichiers TypeScript directement sans les compiler au préalable.</li>
                <li><strong>ts-node-dev</strong> : Version améliorée de ts-node avec rechargement à chaud pour le développement.</li>
                <li><strong>@types/node</strong> : Définitions de types pour Node.js.</li>
                <li><strong>@types/express</strong> : Définitions de types pour Express.</li>
                <li><strong>nodemon</strong> : Outil qui aide à développer des applications Node.js en redémarrant automatiquement l'application lorsque des fichiers sont modifiés.</li>
            </ul>

            <h2>Fichiers de configuration</h2>
            <ul>
                <li><strong>tsconfig.json</strong> : Fichier de configuration TypeScript.</li>
                <li><strong>nodemon.json</strong> : Fichier de configuration pour Nodemon.</li>
            </ul>


    <h2>Scripts dans package.json</h2>
    <p>Ajoutez les scripts suivants dans votre <code>package.json</code> pour faciliter le développement et le déploiement :</p>
    <ul>
        <li><strong>start</strong> : Lance Nodemon avec ts-node pour un développement rapide.</li>
        <li><strong>dev</strong> : Utilise ts-node-dev pour le développement avec rechargement à chaud.</li>
        <li><strong>build</strong> : Compile le TypeScript en JavaScript.</li>
        <li><strong>serve</strong> : Démarre l'application avec les fichiers compilés (utile en production).</li>
    </ul>

    <h2>Structure du projet</h2>
    <p>Assurez-vous que votre projet a la structure suivante :</p>
    <!-- Ajoutez un exemple visuel ici si nécessaire -->

    <p>En suivant cette liste, vous aurez tous les outils et dépendances nécessaires pour développer et exécuter votre projet TypeScript avec Express.</p>
</body>
    `);
});


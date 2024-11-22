Voici l'arborescence et les codes pour une API REST simple avec Express en TypeScript, gérant des bières et des brasseries. J'ai corrigé quelques erreurs potentielles de la vidéo et optimisé le code.

# Arborescence :

api-rest/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── beers.ts
│   │   └── breweries.ts
│   ├── models/
│   │   └── beer.ts  (Optionnel, pour la suite)
│   ├── routes/
│   │   ├── beers.ts
│   │   └── breweries.ts
│   ├── app.ts
│   └── server.ts
├── .gitignore
├── info.txt (facultatif)
├── package-lock.json
├── package.json
└── tsconfig.json
Use code with caution.
Codes:

1. package.json:

{
  "name": "api-rest",
  "version": "1.0.0",
  "description": "API REST avec Express et TypeScript",
  "main": "dist/server.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts"
  },
  "keywords": [
    "express",
    "typescript",
    "rest",
    "api"
  ],
  "author": "Votre Nom",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^2.0.22",
    "typescript": "^5.1.6"
  }
}
Use code with caution.
Json
2. tsconfig.json:

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
Use code with caution.
Json
3. src/app.ts:

import express, { Application } from "express";
import { router as beersRoutes } from "./routes/beers";
import { router as breweriesRoutes } from "./routes/breweries";

const app: Application = express();
const version = "v1";
const path = `/api/${version}`;


app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes);

export default app;
Use code with caution.
TypeScript
4. src/server.ts:

import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
Use code with caution.
TypeScript
5. src/routes/beers.ts:

import { Router, Request, Response } from "express";
import { beersController } from "../controllers/beers";


export const router = Router();


router.get("/", beersController.get);

router.post("/", beersController.post);

router.put("/:id", (req: Request, res: Response) => {
  res.send("Modifier une bière avec l'ID : " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Supprimer une bière avec l'ID : " + req.params.id);
});
Use code with caution.
TypeScript
6. src/controllers/beers.ts:

import { Request, Response } from "express";

export const beersController = {
  get: (req: Request, res: Response) => {
    res.status(200).json({ data: "Liste des bières!" });
  },
  post: (req: Request, res: Response) => {
    res.status(201).json({ message: "Bière créée !" }); // Message plus explicite
  }
};
Use code with caution.
TypeScript
7. src/routes/breweries.ts: (Similaire à beers.ts, adaptez selon vos besoins)

import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({ data: "Liste des brasseries!" });
});

// Ajoutez d'autres routes pour les brasseries (POST, PUT, DELETE)
Use code with caution.
TypeScript
8. src/controllers/breweries.ts: (Si vous avez une logique complexe pour les brasseries)

Installation et exécution:

npm install

npm run dev (pour le développement avec nodemon) ou npm run build puis npm start (pour la production).

Points importants et améliorations:

TypeScript: Utilisation de TypeScript pour un code plus robuste et maintenable.

Controllers: Séparation des routes et de la logique métier dans des controllers.

Gestion des erreurs: Ajoutez une gestion des erreurs plus complète dans vos routes et controllers (try...catch, middleware d'erreur).

Modèle de données (facultatif): Créez un fichier beer.ts dans src/models pour définir une interface TypeScript pour vos bières.

Paramètres de route: Utilisez req.params.id pour récupérer les paramètres de route dynamiques.

Messages de réponse: Renvoyez des messages plus informatifs en cas de succès ou d'erreur.
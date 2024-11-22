import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.ts'], // Chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Route racine
app.get('/', (req, res) => {
  res.send('Bienvenue à l\'API. Visitez /api-docs pour la documentation.');
});

// Exemple de route
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export const swaggerDocs = {}; // Add the actual swaggerDocs content here

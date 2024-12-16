const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation de l\'API',
      contact: {
        name: 'Votre Nom',
        email: 'votre.email@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de développement'
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Chemin vers vos fichiers de routes
};

module.exports = swaggerDocs;
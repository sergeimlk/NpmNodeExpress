import { SwaggerOptions } from 'swagger-ui-express';

const swaggerDocs: SwaggerOptions = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for the Beers and Breweries API'
    },
    servers: [
        {
            url: 'http://localhost:3000/api/v1',
            description: 'Development server'
        }
    ],
    paths: {
        '/beers': {
            get: {
                summary: 'Get all beers',
                responses: {
                    '200': {
                        description: 'List of beers',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'number' },
                                            name: { type: 'string' },
                                            type: { type: 'string' },
                                            brewery_id: { type: 'number' }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/breweries': {
            get: {
                summary: 'Get all breweries',
                responses: {
                    '200': {
                        description: 'List of breweries',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'number' },
                                            name: { type: 'string' },
                                            city: { type: 'string' }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default swaggerDocs;

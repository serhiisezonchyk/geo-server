import swaggerJSDoc from 'swagger-jsdoc';
const options = {
  definition: {
    openapi: '3.0.0',
    //info
    info: {
      title: 'Chernihiv Geo',
      description: 'Backend of geoinformational system of Chernihiv',
      version: '1.0.0',
    },
    components: {
      //bearer tocken connection
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
    // for all operations
    // security:[
    //   {
    //     bearerAuth: []
    //   }
    // ]
  },
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

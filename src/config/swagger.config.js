const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

function swaggerConfiguration(app){
 const swaggerOption = swaggerJsDoc({
    definition:{
        info:{
            title: "Bazar_cheh Backend",
            version: "1.0.0",
            contact: {
                name: "Amir H Olyanasab Narab",
                email: "amirholyanasabnarab@gmail.com"
            },
            description: "This is an application for buying and selling anything, It was created by express Js."
        }
    },
    apis: []
 }); 
 
 const swagger = swaggerUi.setup(swaggerOption, {});
 app.use("/", swaggerUi.serve, swagger);
}

module.exports = swaggerConfiguration;
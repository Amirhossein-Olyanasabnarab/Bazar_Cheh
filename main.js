const express = require('express');
const swaggerConfiguration = require('./src/config/swagger.config');
require('dotenv').config();

function main(){
    const app = express();
    const PORT = process.env.PORT;

    swaggerConfiguration(app);
    require('./src/config/mongoose.config');

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}

main();
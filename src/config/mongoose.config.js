const mongoose = require('mongoose');
require('dotenv').config();

const DB_HOST = process.env.MONGO_DB;

mongoose.connect(DB_HOST)
    .then(() => {
        console.log(`The MongoDB was connected successfully.`)
    })
    .catch((err) => {
        console.log(`Connecting to MongoDB was failed == ${err?.message}`)
    });
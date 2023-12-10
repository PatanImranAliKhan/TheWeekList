const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, () => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true,
        useUnifiedTopology: true})
    console.log("Connect to PORT 3000");
})
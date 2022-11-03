const express = require('express');
const cors = require('cors');
const {personalRouter, userRouter} = require("../modules/controler/routes")
const {response} = require("express");
require('dotenv').config();

//todas estas son importaciones

const app = express();
app.set("port", process.env.PORT);  //indicamos en que puerto va a correr

app.use(
    cors({origins: '*'})
);

app.use(
    express.json({limit: '50mb'})
);

app.get("/", (request, response)=>{
    response.send("Welcome to the personal AppRest");
});
app.use(`/api/personal`, personalRouter);
app.use(`/api/user`, userRouter);


app.use('/api/personal', personalRouter);
module.exports = {
    app
};



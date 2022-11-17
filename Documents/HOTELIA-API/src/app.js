const { application } = require('express');
const express =require('express');
const conexionDB = require('./db');

require('dotenv').config();

//Conexion a la DB
conexionDB();

//Configuraciones

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');
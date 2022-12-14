const express = require('express');
const conexionDB =require('./db');
const rutasHab = require('./routes/habitacion.routes');
const rutasUser = require('./routes/user.routes');
const rutasRese = require('./routes/reserva.routes');
const app = express();
const moongose = require("mongoose");

require('dotenv').config();

//Conexion a la DB
conexionDB();

//Configuraciones
app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//Midleware
app.use(express.json());

//Llamado de rutas
app.use(express.static('public'));
app.use('/public', express.static('public/upload'));

app.use('/habitaciones', rutasHab);
app.use('/user', rutasUser);
app.use('/reserva', rutasRese);


module.exports = app;
const express = require('express');

const route = express.Router();

const {todasCarpetas,cargarCarpeta}=require('../controllers/controllers');
// const dbConnection = require('../config/db');


route.get('/',todasCarpetas);
route.post('/cargarCarpeta',cargarCarpeta);

module.exports=route;
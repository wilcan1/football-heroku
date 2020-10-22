// CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
// const https = require('https');
const fs = require('fs');
const express = require('express');
const server = express();
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser'); 
const mysqlApostrophe = require('mysql-apostrophe');

var database = require('./database');
const lecture = require("./routes/read.js");
const ajouter = require('./routes/create');
const modif = require('./routes/update');
const suppr = require('./routes/delete')

// faire communiquer les domaines entre eux
server.use(cors());

// permet de traduire en JSON
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(mysqlApostrophe);
server.use("/read", lecture);
server.use("/create", ajouter);
server.use("/update", modif);
server.use("/delete", suppr)





//------------------------------------------//
//  Lignes qui servent pour le déploiement  //
//------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require('path'); 
// 2°) Préciser que Express va chercher des infos dans le dossiers build
server.use(express.static(path.join(__dirname, '/build')));
// server.use(express.static("public"));
// 3°) Préciser que Express va chercher des server en utilisant le préfixe "/""
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//------------------------------------------//
//    Fin des lignes pour le déploiement    //
//------------------------------------------//




const port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("ok ça marche");
    console.log("Le serveur utilise le port: " + port);
})
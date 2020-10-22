const mysql = require('mysql');
const express = require("express");

let db = require('../database');

const server = express.Router();

server.get('/allstadium', function (req, res) {
    let selectionPriorite = 'SELECT * FROM STADE'

    db.query(selectionPriorite, (err, rows, fields) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(rows);
        }
        
    })
});

server.get('/allgamer', function (req, res) {
    let selectionPriorite = `SELECT joueur.nom_joueur, joueur.prenom_joueur, DATE_FORMAT(joueur.date_naissance_joueur, '%d/%m/%Y') AS date_naissance, equipe.nom_equipe, poste.nom_poste 
    FROM JOUEUR 
    INNER JOIN equipe ON equipe.id_equipe = joueur.id_equipe
    INNER JOIN poste ON poste.id_poste = joueur.id_poste`

    db.query(selectionPriorite, (err, rows, fields) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(rows);
        }
        
    })
});

module.exports =server
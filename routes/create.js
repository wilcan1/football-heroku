const mysql = require('mysql');
const express = require("express");
let db = require('../database');
const server = express.Router();

server.post('/newstade', function (req, res) {
    let verifRequete =`SELECT * FROM STADE WHERE nom_stade="${req.body.nom_stade}"`
    db.query(verifRequete, (err, rows, fields) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);            
        }
        else if (rows.lenght > 0) {
            res.send("La valeur saisie existe déjà")
        } else {
            let ajoutStade = `INSERT INTO STADE (nom_stade, adresse_stade, cp_stade, ville_stade, pays_stade) VALUES ('${req.body.nom_stade}','${req.body.adresse_stade}','${req.body.cp_stade}','${req.body.ville_stade}','${req.body.pays_stade}')`
            db.query(ajoutStade, (errTwo, rowsTwo, fieldsTwo) => {
                if (errTwo) {
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {
                    console.log('Le stade "${req.body.nom_stade}" a bien été créée');
                    res.send(`Le stade "${req.body.nom_stade}" a bien été créée`)
                }
            })
        }
    })
})

server.post('/newplayer', function (req, res) {
    let verifRequete =`SELECT * FROM JOUEUR WHERE id_joueur="${req.body.id_joueur}"`
    db.query(verifRequete, (err, rows, fields) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);            
        }
        else if (rows.lenght > 0) {
            res.send("La valeur saisie existe déjà")
        } else {
            let ajoutJoueur = `INSERT INTO JOUEUR (id_joueur,nom_joueur, prenom_joueur, numero, date_naissance_joueur, id_poste, id_equipe) VALUES ('${req.body.id_joueur}','${req.body.nom_joueur}','${req.body.prenom_joueur}','${req.body.numero}','${req.body.date_naissance_joueur}','${req.body.id_poste}','${req.body.id_equipe}')`
            db.query(ajoutJoueur, (errTwo, rowsTwo, fieldsTwo) => {
                if (errTwo) {
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {
                    console.log(`Le joueur "${req.body.nom_joueur}" a bien été créée`);
                    res.send(`Le joueur "${req.body.nom_joueur}" a bien été créée`)
                }
            })
        }
    })
})
module.exports = server


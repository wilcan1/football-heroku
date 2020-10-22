const mysql = require('mysql');
const express = require("express");
let db = require('../database');
const server = express.Router();


server.put('/player/:id_joueur', function (req, res) {
    let requete = `UPDATE joueur SET nom_joueur = "${req.body.nom_joueur}" WHERE id_joueur = ${req.params.id_joueur} `

    db.query(requete, (err, rows, fields) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send('La valeur saisie a bien été enregistrée')
        }
    })
})

server.put('/updatestade/:id_stade', function (req, res) {    
            let modifstade = `UPDATE stade SET nom_stade ='${req.body.nom_stade}', cp_stade= '${req.body.cp_stade}' WHERE id_stade ='${req.params.id_stade}' `
            db.query(modifstade, (errTwo, rowsTwo, fieldsTwo) => {
                if (errTwo) {
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {
                    console.log(`Le stade '${req.body.nom_stade}' a bien été modifié`);
                    res.send(`Le stade '${req.body.nom_stade}' a bien été modifié`)
                }
            })
        })

module.exports = server
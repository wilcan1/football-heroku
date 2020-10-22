const mysql = require('mysql');
const express = require("express");
let db = require('../database');
const server = express.Router();


server.delete('/deleteplayer/:idChamps', function (req, res) {
    let paramUrl = req.params.idChamps;
    let verifId = `SELECT * FROM JOUEUR WHERE id_joueur=${paramUrl}  `;

    db.query(verifId, (err , rows) => {
        if(err) {
            console.log(err.message)
            res.send(err.message);            
        } else if (rows.length == 0){
            res.send("L'id saisie n'existe pas");
            console.log(`NB lignes supp ${rows.length}`);
        } else {
            let supprJoueur = `DELETE FROM JOUEUR WHERE id_joueur=${paramUrl}`;
            db.query(supprJoueur, (errTwo, rowsTwo) => {
                if (errTwo) {
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {
                    console.log(`Le joueur ${paramUrl} a bien été supprimé de la BDD`);
                    console.log(`NB Lignes supp ${rows.length}`);
                    res.send(`Le joueur ${paramUrl} a bien été supprimé de la BDD`);
                }
            })
        }
    })
})



module.exports = server
var mysql = require('mysql');

const dbConnexion = mysql.createConnection({
    host: "localhost",
    database: "tournoi-foot-national",
    user: "root",
    password: "",
    port: 3306,
})
// VERIFICATION DE LA CONNEXION
dbConnexion.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connexion à la base réussie");
    }
});
module.exports = dbConnexion
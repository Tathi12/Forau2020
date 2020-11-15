const { register, getUserForLogin,registerInteres,registerUbicacion} = require("./users.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {decodeToken} = require('../../../auth/TokenValidation')

module.exports = {

    register: (req, res) => {
        const body = req.body;
        //console.log(body.password);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        register(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },

    login: (req, res) => {         
         
        if (!req.headers.authorization ||
           req.headers.authorization.indexOf("Basic ") === -1
        ) {
           return res.status(403).json({ message: "Missing Authorization Header" });
        }

       const base64Credentials = req.headers.authorization.split(" ")[1];
       const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
       const [name_user, password] = credentials.split(":");
      

       getUserForLogin(name_user, (err, results) => {
           if (err) {
               console.log(err);
               return res.status(500).json({
                   success: 0,
                   data: "Database connection error"
               });
           }
           if (!results) {
               return res.status(401).json({
                   success: 0,
                   data: "Contraseña o nombre de usuario incorrecto."
               });
           }
           
           const result = compareSync(password, results.password);
           console.log(result);
           
           
           if (result) {
               results.password = undefined;
               const jsontoken = sign({ result: results }, process.env.JSONTOKEN_KEY, {
                   expiresIn: "24h"
               });
               return res.status(200).json({
                   success: 1,
                   message: "login realizado con éxito",
                   token: jsontoken
               });
           } else {
               return res.status(401).json({
                   success: 0,
                   data: "Contraseña o nombre de usuario incorrecto."
               });
           }
       });
   },
   registerUbicacion: (req, res) => {
    const body = req.body;
    const id_user = decodeToken(req).result.idUsuarios 
    body.idUsuarios = id_user
    registerUbicacion(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            data: results,
        });
    });
},
    registerInteres: (req, res) => {
    const body = req.body;
    const id_user = decodeToken(req).result.idUsuarios 
    body.idUsuarios = id_user
    registerInteres(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            data: results,
        });
    });
},
}


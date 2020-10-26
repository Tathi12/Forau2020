const pool = require("../../../config/database");

module.exports = {
    subscribe: (data, callback) => {
        pool.query(`INSERT INTO suscripciones (idUsuario, idGrupos) VALUES (?,?)`, 
        [
           data.idUsuarios,
           data.idGrupos
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );

    },

    getSubscriptionsOfUser: (idUsuarios, callback) => {
       
        pool.query(`SELECT u.*,g.* FROM suscripciones s 
                    LEFT OUTER JOIN  users u ON s.idUsuarios =  u.idUsuarios  
                    LEFT OUTER JOIN  grupos g ON s.idGrupos =  g.idGrupos
                    WHERE u.idUsuarios = ? 
                     `, 
        [idUsuarios],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    }

}
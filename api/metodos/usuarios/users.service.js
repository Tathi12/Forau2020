const pool = require("../../../config/database");

module.exports = {
    register: (data, callback) => {
        pool.query(`INSERT INTO users (nombre,apellido,name_user,mail, password,pq_interes, pais, provincia,ciudad,motivo_uso,descripcion,foto_perfil ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`, 
        [
          data.nombre,
          data.apellido,
          data.name_user,
          data.mail,
          data.password,
          data.pq_interes,
          data.pais,
          data.provincia,
          data.ciudad,
          data.motivo_uso,
          data.descripcion,
          data.foto_perfil,
          
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
              
                return callback(null, results);

            }

        );

    },

    getUserForLogin: (name_user, callback) => {
       
        pool.query(`SELECT * FROM users WHERE name_user = ?`, 
        [name_user],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
               
          
                return callback(null, results[0]);
               
            }
        );
    }

}
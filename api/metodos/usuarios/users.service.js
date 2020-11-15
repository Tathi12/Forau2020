const pool = require("../../../config/database");

module.exports = {
    register: (data, callback) => {
        pool.query(`INSERT INTO users (nombre,apellido,name_user,mail, password ) VALUES (?,?,?,?,?)`, 
        [
          data.nombre,
          data.apellido,
          data.name_user,
          data.mail,
          data.password,
         
          
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
    },

    registerInteres: (data, callback) => {
        pool.query(`INSERT INTO interes (idUsuarios,pq_interes) VALUES (?,?)`, 
        [
          data.idUsuarios,
          data.pq_interes,
        
         
          
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
              
                return callback(null, results);

            }

        );

    },

    registerUbicacion: (data, callback) => {
        pool.query(`INSERT INTO ubicacion (idUsuarios,pais,provincia,ciudad) VALUES (?,?,?,?)`, 
        [
          data.idUsuarios,
          data.pais,
          data.provincia,
          data.ciudad
        
         
          
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
              
                return callback(null, results);

            }

        );

    },

  
   
}
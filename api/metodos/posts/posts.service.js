const pool = require("../../../config/database");

module.exports = {
    subirPost: (data, callback) => {
        pool.query(`INSERT INTO posts (categoria,titulo,sub_titulo,arch_adjunto) VALUES (?,?,?,?,?)`, 
        [
          
          data.body,
          data.arch_adjunto,
          data.date,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    borrarPost: (posts, callback) => {
       
        pool.query(`DELETE * FROM posts WHERE body = ?`, 
        [posts],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },


    actualizarPosts : (data, callback) => {
        pool.query(`UPDATE posts  SET body = ?, date =? , arch_adjunto = ? WHERE body = ?  `, 
        [
           
            data.body,
            data.arch_adjunto,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    mostrarPosts: ( callback) => {
       
        pool.query(`SELECT * FROM posts `, 
            (error, results, fields) => 
            {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    subirComentario: (data, callback) => {
        pool.query(`INSERT INTO comentarios  (idUsuarios, idGrupos, comentarios) VALUES (?,?,?)`, 
        [
          data.idUsuarios,
          data.idGrupos,
          data.comentarios,
        

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },

    borrarComentario: (data, callback) => {
        pool.query(`DELETE comentarios  (idUsuarios, idGrupos, comentarios) VALUES (?,?,?)`, 
        [
          data.idUsuarios,
          data.idGrupos,
          data.comentarios,
        

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },

    mostrarComentarios: (idUsuarios, callback) => {
       
        pool.query(`SELECT c* u.*,p.* FROM comentarios c
                    LEFT OUTER JOIN  users u ON c.idUsuarios =  u.idUsuarios  
                    LEFT OUTER JOIN  posts p ON c.idPosts =  p.idPosts
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
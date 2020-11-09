const pool = require("../../../config/database");

module.exports = {
    subirPost: (data, callback) => {
        pool.query(`INSERT INTO posts (body,arch_adjunto,date) VALUES (?,?,?)`, 
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
       
        pool.query(`DELETE FROM posts WHERE body = ?`, 
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
        pool.query(`UPDATE posts  SET body = ? , arch_adjunto = ?, date = ?  WHERE idPosts = '?' `, 
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
    mostrarPosts: ( callback) => {
       
        pool.query(`SELECT * FROM posts`, 
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
    },
    guardarPost: (data, callback) => {
        pool.query(`INSERT INTO guardados (idUsuario, idPosts) VALUES (?,?)`, 
        [
           data.idUsuarios,
           data.idPosts
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );

    },
      verGuardados: (idUsuarios, callback) => {
       
        pool.query(`SELECT u.*,p.* FROM suscripciones s 
                    LEFT OUTER JOIN  users u ON s.idUsuarios =  u.idUsuarios  
                    LEFT OUTER JOIN  posts p ON p.idPosts =  p.idPosts
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
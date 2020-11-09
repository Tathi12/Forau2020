const { subirPost, borrarPost,actualizarPosts,mostrarPosts} = require("./posts.service");

module.exports={
    subirPost: (req, res) => {
        const body = req.body;
        
        subirPost(body, (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    borrarPost: (req, res) => {
        const body = req.params.body;
        
        borrarPost(body, (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },

    actualizarPosts: (req, res) => {
        const body = req.body;
        
        actualizarPosts(body, (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    mostrarPosts: (req, res) => {
        
        
        mostrarPosts( (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },

    mostrarComentarios: (req, res) => {
        const idUsuarios = req.params.idUsuarios;
        this.mostrarComentarios(idUsuarios, (err, results) => {
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
    subirComentario: (req, res) => {
        const body = req.body;
        
        subirComentario(body, (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    borrarComentario: (req, res) => {
        const titulo = req.params.title;
        
        borrarComentario(titulo, (err, results) => {
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
                message: "se ha realizado la operacion con exito"
            });
        });
    },

    guardarPost: (req, res) => {
        const body = req.body;
        this.guardarPost(body, (err, results) => {
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
    verGuardados: (req, res) => {
        const idUsuarios = req.params.idUsuarios;
        verGuardados(idUsuarios, (err, results) => {
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

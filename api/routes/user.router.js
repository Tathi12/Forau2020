const router = require("express").Router();
require("dotenv").config();


const {mostrarPosts,subirPost,borrarPost,actualizarPosts,subirComentario,borrarComentario,mostrarComentarios,verGuardados} = require("../metodos/posts/posts.controller");
const {register, login} = require("../metodos/usuarios/users.controller");
const {subscribe, getSubscriptionsOfUser} = require("../metodos/grupos/grupo.controller");



router.get("/mostrarPosts", mostrarPosts);
router.post("/actualizarPost",actualizarPosts);
router.post("/subirPost", subirPost);
router.get("/borrarPost",borrarPost);

router.post("/registrarse", register);
router.post("/login", login);

router.post("/susbcribe",subscribe);
router.get("/versuscripciones:idUsuarios",getSubscriptionsOfUser);

router.get("/mostrarComentarios", mostrarComentarios);
router.post("/subirComentario", subirComentario);
router.get("/borrarComentario", borrarComentario);

router.post("/guardados",verGuardados);








module.exports = router;
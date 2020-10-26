const router = require("express").Router();
require("dotenv").config();


const {mostrarPosts,subirPost,borrarPost,actualizarPosts,subirComenatario,borrarComentario,mostrarComentarios} = require("../metodos/posts/posts.controller");
const {register, login} = require("../metodos/usuarios/users.controller");
const {subscribe, getSubscriptionsOfUser} = require("../metodos/grupos/grupos.controller");



router.get("/mostrarPosts", mostrarPosts);
router.post("/actualizarPost",actualizarPosts);
router.post("/subirPost", subirPost);
router.get("/borrarPost",borrarPost);

router.post("/registrarse", register);
router.post("/login", login);

router.post("/susbcribe",subscribe);
router.get("/versuscripciones:idUsuarios",getSubscriptionsOfUser);

router.get("/mostrarComentarios", mostrarComentarios);
router.post("/subirComentario", subirComenatario);
router.get("/borrarComentario", borrarComentario)







module.exports = router;
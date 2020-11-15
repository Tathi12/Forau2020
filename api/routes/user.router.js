const router = require("express").Router();
require("dotenv").config();

const { checkToken } = require("../../auth/tokenvalidation");
const {mostrarPosts,subirPost,borrarPost,actualizarPosts,subirComentario,borrarComentario,mostrarComentarios,verGuardados} = require("../metodos/posts/posts.controller");
const {register, login,registerUbicacion,registerInteres} = require("../metodos/usuarios/users.controller");
const {subscribe, getSubscriptionsOfUser} = require("../metodos/grupos/grupo.controller");



router.get("/mostrarPosts",checkToken, mostrarPosts);
router.post("/actualizarPost",checkToken,actualizarPosts);
router.post("/subirPost",checkToken, subirPost);
router.post("/borrarPost/:body",checkToken,borrarPost);

router.post("/registrarse", register);
router.post("/login", login);
router.post("/registrarseUbcicacion", registerUbicacion);
router.post("/registrarseInteres", registerInteres);


router.post("/susbcribe",checkToken,subscribe);
router.get("/versuscripciones:idUsuarios",checkToken,getSubscriptionsOfUser);

router.get("/mostrarComentarios",checkToken,mostrarComentarios);
router.post("/subirComentario", checkToken,subirComentario);
router.get("/borrarComentario", checkToken,borrarComentario);

router.post("/guardados/:idUsuarios",checkToken,verGuardados);








module.exports = router;
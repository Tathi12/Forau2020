const router = require("express").Router();
require("dotenv").config();

const { checkToken } = require("../../auth/TokenValidation");
const {mostrarPosts,subirPost,borrarPost,actualizarPosts} = require("../metodos/posts/posts.controller");
const {register, login} = require("../metodos/usuarios/users.controller");
const {subscribe, getSubscriptionsOfUser} = require("../metodos/grupos/grupo.controller");



router.get("/mostrarPosts",checkToken, mostrarPosts);
router.post("/actualizarPost",checkToken,actualizarPosts);
router.post("/subirPost", checkToken,subirPost);
router.get("/borrarPost",checkToken,borrarPost);

router.post("/registrarse", register);
router.post("/login", login);

router.post("/susbcribe",checkToken,subscribe);
router.get("/versuscripciones:idUsuarios",checkToken,getSubscriptionsOfUser);

module.exports = router;
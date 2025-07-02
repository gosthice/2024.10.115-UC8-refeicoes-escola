const express = require('express');
const UsuarioController = require('../controller/usuario.controller');
const AuthMiddleware = require('../middleware/usuario.middleware');

const router = express.Router();

router.post('/cadastrar', UsuarioController.cadastrar);

router.get('/perfil', AuthMiddleware.autenticarToken, UsuarioController.perfil);
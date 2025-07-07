const express = require('express');
const UsuarioController = require('../controller/usuario.controller');
const DadosRefeicaoController = require('../../dados_refeicao/controller/dados_refeicao.controller');
const AutenticacaoController = require('../../autenticacao/controller/autenticacao.controller');
const AuthMiddleware = require('../middleware/usuario.middleware');

const router = express.Router();

// rota para cadastrar
router.post('/cadastrar', UsuarioController.cadastrar);
// rota para login
router.post('/login', AutenticacaoController.login);
// rota para acessar o perfil
router.get('/perfil', AuthMiddleware.autenticarToken, UsuarioController.perfil);
// rota para sair do perfil
router.post('/logout', AutenticacaoController.sair);


//rota para criar a refeiçao
router.post('/refeicoes', AuthMiddleware.autenticarToken, DadosRefeicaoController.criar);
// rota para buscar as refeicoes
router.get('/refeicoes', AuthMiddleware.autenticarToken, DadosRefeicaoController.buscar);
router.get('/refeicoes/:id', AuthMiddleware.autenticarToken, DadosRefeicaoController.buscarPorId);
// rota para editar a refeicao (por ID)
router.put('/refeicoes/:id', AuthMiddleware.autenticarToken, DadosRefeicaoController.editar);
// rota para apagar a refeicao (por ID)
router.delete('/refeicoes/:id', AuthMiddleware.autenticarToken, DadosRefeicaoController.deletarPorId);

module.exports = router;
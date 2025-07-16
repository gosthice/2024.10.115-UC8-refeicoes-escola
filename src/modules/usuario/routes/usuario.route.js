const express = require('express');
const UsuarioController = require('../controller/usuario.controller');
const DadosRefeicaoController = require('../../dados_refeicao/controller/dados_refeicao.controller');
const AutorizacaoMiddleware = require('../../../middleware/autorizacao.middleware');
const AutenticacaoController = require('../../autenticacao/controller/autenticacao.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');

const router = express.Router();

// rota para cadastrar
router.post('/usuarios', UsuarioController.cadastrar);
// rota para login
router.post('/usuarios/login', AutenticacaoController.login);
// rota para entrar no perfil
router.get('/usuarios/me', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['merendeira', 'admin']), UsuarioController.perfil);

/*
// rota para cadastrar
router.post('/cadastrar', UsuarioController.cadastrar);
// rota para login
router.post('/login', AutenticacaoController.login);
// rota para acessar o perfil
router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);
// rota para sair do perfil
router.post('/logout', AutenticacaoController.sair);
*/

/*
//rota para criar a refeiçao
router.post('/refeicoes', AutenticacaoMiddleware.autenticarToken, DadosRefeicaoController.criar);
// rota para buscar as refeicoes
router.get('/refeicoes', AutenticacaoMiddleware.autenticarToken, DadosRefeicaoController.buscar);
router.get('/refeicoes/:id', AutenticacaoMiddleware.autenticarToken, DadosRefeicaoController.buscarPorId);
// rota para editar a refeicao (por ID)
router.put('/refeicoes/:id', AutenticacaoMiddleware.autenticarToken, DadosRefeicaoController.editar);
// rota para apagar a refeicao (por ID)
router.delete('/refeicoes/:id', AutenticacaoMiddleware.autenticarToken, DadosRefeicaoController.deletarPorId);
*/
module.exports = router;
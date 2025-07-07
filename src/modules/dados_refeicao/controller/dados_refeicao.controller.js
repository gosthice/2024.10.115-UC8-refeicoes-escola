const DadosRefeicao = require('../../dados_refeicao/models/dados_refeicao.model');

class DadosRefeicaoController {
    static async criar(req, res) {
        try {
            const {
                id,
                aluno_nome,
                turma,
                data_refeicao,
                cardapio,
                responsavel
            } = req.body;

            if (!id || !aluno_nome || !turma || !data_refeicao || !cardapio || !responsavel) {
                return res.status(401).json({
                    msg: "Todos os dados devem ser preenchidos!"
                })
            };

            await DadosRefeicao.create({ id, aluno_nome, turma, data_refeicao, cardapio, responsavel });
            res.status(200).json({ msg: "Refeicao criada com sucesso!" });
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
        }
    }

    static async buscar(req, res) {
        try {
            const refeicoes = await DadosRefeicao.findAll();

            if(refeicoes.length === 0) {
                return res.status(200).json({ msg: "Nenhuma refeiçao cadastrada. Tente novamente!" });
            }

            res.status(200).json(refeicoes);
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
        }
    }

    static async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const refeicao = await DadosRefeicao.findByPk(id);

            if(!refeicao) {
                return res.status(401).json({ msg: "Refeiçao nao encontrada. Tente novamente!" })
            };
            res.status(200).json({refeicao});
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'});
        }
    }

    static async editar(req, res) {
        try {
            const id = req.params.id;
            const {
                aluno_nome,
                turma,
                data_refeicao,
                cardapio,
                responsavel
            } = req.body;

            if (!aluno_nome || !turma || !data_refeicao || !cardapio || !responsavel) {
                return res.status(401).json({ msg: "Pelo menos um dos campos devem ser preenchidos!"})
            };

            const refeicaoAtualizada = await DadosRefeicao.update(
                {   aluno_nome: aluno_nome,
                    turma: turma,
                    data_refeicao: data_refeicao,
                    cardapio: cardapio,
                    responsavel: responsavel
                },
                { where: { id: id }}
            );

            if (refeicaoAtualizada.length === 0) {
                return res.status(404).json({ msg: "Nenhum dado atualizado encontrada. Tente novamnte!" })
            }0    
            res.status(200).json({ refeicaoAtualizada })
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
        }
    }

    static async deletarPorId(req, res) {
        try {
            const id = req.params.id;
            const refeicaoDeletar = await DadosRefeicao.findByPk({id});

            if (!refeicaoDeletar) {
                return res.status(404).json({ msg: "Refeiçao nao encontrada." })
            }

            await DadosRefeicao.destroy({
                where: {id: id}
            });

            res.status(200).json({ msg: 'Refeiçao excluída com sucesso!' })
        } catch (error) {
            res.status(500).json({ msg: 'Erro interno do servidor. Por favor, tente mais tarde!' })
        }
    }
}

module.exports = DadosRefeicaoController;
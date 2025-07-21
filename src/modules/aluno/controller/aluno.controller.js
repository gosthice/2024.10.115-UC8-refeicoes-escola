const AlunoModel = require('../../aluno/models/aluno.model');

class AlunoController {
   static async cadastrar(req, res) {
      try {
         const { id, nome, turma } = req.body; 

         if (!id || !nome || !turma) {
            return res.status(400).json({
               msg: "Todos os campos devem preenchidos."
            })
         };

         await Aluno.create({ id, nome, turma });
         res.status(200).json({ msg: "Aluno cadastrado com sucesso!"});
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
      }
   };

   static async listar(req, res) {
      try {
         const alunos = await AlunoModel.findAll();

         if (alunos.length === 0) {
            return res.status(400).json({
               msg: 'Nenhum aluno cadastrado. Tente novamente!'
            })
         };

         res.status(200).json(alunos);
      } catch (error) {
         resposta.status(500).json({ mensagem: "Erro ao listar o professor selecionado", erro: error.message });
      }
   };

   static async listarPorId(req, res) {
      try {
         const id = req.params.id;
         const aluno = await AlunoModel.findByPk({id});

         if(!aluno) {
            return res.status(400).json({ msg: 'Aluno não encontrado. Tente novamente!' })
         };

         res.status(200).json({aluno});
      } catch (error) {
         resposta.status(500).json({ mensagem: "Erro ao listar o professor selecionado", erro: error.message });
      }
   };

   static async editar(req, res) {
      try {
         const id = req.params.id;
         const { nome, turma } = req.body;

         if(!nome || !turma) {
            return res.status(401).json({ msg: 'Os campos devem ser preenchidos corretamente.' })
         };

         const alunoEditado = await AlunoModel.update(
            { nome: nome, turma: turma },
            { where: {id: id} }
         );

         if (alunoEditado.length === 0) {
            return res.status(404).json({ msg: 'Nenhum aluno encontrado. Tente novamente!' })
         };

         res.status(200).json(alunoEditado);
      } catch (error) {
         resposta.status(500).json({ mensagem: "Erro ao listar o professor selecionado", erro: error.message });
      }
   };

   static async excluirPorId(req, res) {
      try {
         const id = req.params.id;
         const aluno = await AlunoModel.findByPk(id);

         if (!aluno) {
            return res.status(404).json({ msg: 'Aluno não encontrado.' })
         };

         await AlunoModel.destroy({
            where: { id: id }
         });

         res.status(200).json({ msg: 'Aluno excluído com sucesso!' });
      } catch (error) {
         resposta.status(500).json({ mensagem: "Erro ao listar o professor selecionado", erro: error.message });
      }
   };
};

module.exports = AlunoController;
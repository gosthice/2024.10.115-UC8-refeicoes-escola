const Aluno = require('../../aluno/models/aluno.model');
const bcrypt = require('bcrypt');

class AlunoController {
   static async cadastrar(req, res) {
      try {
         const { nome, turma } = req.body;

         if (!nome || !turma) {
            return res.status(400).json({
               msg: "Todos os campos devem preenchidos."
            })
         };

         await Aluno.create({ nome, turma });
         res.status(200).json({ msg: "Aluno cadastrado com sucesso!"});
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
      }
   };

   
}
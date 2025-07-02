const Usuario = require('../../usuario/models/usuario.model');
const bcrypt = require('bcryptjs');

class UsuarioController {
   static async cadastrar(req, res) {
      try {
         const { id, nome, email, senha } = req.body;
         
         if (!id || !nome || !email || !senha) {
            return res.status(400).json({
               msg: "Todos os campos devem ser preenchidos"
            })
         };

         const senhaCriptografada = await bcrypt.hash(senha, 10);  // criptografar a senha
         await Usuario.create({ nome, email, senha: senhaCriptografada });

         res.status(200).json({ msg: "Usuario cadastrado com sucesso!"});
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
      }
   }

   static async perfil(req, res) {
      try {
         const { id } = req.user;
         const user = await Usuario.findOne({
            where: {id},
            attributes: ['id', 'nome', 'email']
         });

         if (!user) {
            return res.status(401).json({
               msg: "Não existe nenhum usuário cadastrado."
            })
         };

         res.status(200).json(user);
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
      }
   }
}

module.exports = UsuarioController;
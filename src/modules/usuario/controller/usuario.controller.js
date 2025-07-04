const Usuario = require('../../usuario/models/usuario.model');
const bcrypt = require('bcrypt'); // removido o js no final

class UsuarioController {
   static async cadastrar(req, res) {
      try {
         const { nome, email, senha } = req.body;
         
         if (!nome || !email || !senha) {
            return res.status(400).json({
               msg: "Todos os campos devem ser preenchidos", err: error.message
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
         const { email } = req.user;
         const user = await Usuario.findOne({
            where: {email},
            attributes: ['nome', 'email']
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
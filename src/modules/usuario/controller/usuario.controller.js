const Usuario = require('../../usuario/models/usuario.model');
const bcrypt = require('bcrypt'); // removido o js no final

class UsuarioController {
   static async cadastrar(req, res) {
      try {
         const { nome, email, senha, papel } = req.body;
         
         if (!nome || !email || !senha || !papel) {
            return res.status(400).json({
               msg: "Todos os campos devem ser preenchidos"
            })
         };

         const senhaCriptografada = await bcrypt.hash(senha, 10);  // criptografar a senha
         await Usuario.create({ nome, papel, email, senha: senhaCriptografada });

         res.status(200).json({ msg: "Usuario cadastrado com sucesso!"});
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
      }
   }

   static async perfil(req, res) {
      try {
         const { email } = req.usuario;
         const Usuario = await Usuario.findOne({
            where: {email},
            attributes: ['nome', 'papel', 'email']
         });

         if (!Usuario) {
            return res.status(401).json({
               msg: "Não existe nenhum usuário cadastrado."
            })
         };

         res.status(200).json(Usuario);
      } catch (error) {
         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
      }
   }
}

module.exports = UsuarioController;
const jwt = require('jsonwebtoken');

class AutenticacaoMiddleware {
   
   static autenticarToken(req, res, next) {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];

      if (!token) {
         return res.status(401).json({
            msg: "Token de acesso não fornecido."
         })
      };

      jwt.verify(token, process.env.SECRET_KEY, (error, usuario) => {
         if (error) {
            return res.status(403).json({
               msg: "Token de acesso não fornecido."
            })
         };

         req.usuario = usuario;
         next();
      });
   }
}

module.exports = AutenticacaoMiddleware;
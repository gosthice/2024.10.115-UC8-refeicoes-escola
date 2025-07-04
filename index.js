const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize } = require('./src/config/configDB');
const userRoute = require('./src/modules/usuario/routes/usuario.route');
const authRoute = require('./src/modules/autenticacao/routes/autenticacao.route')

dotenv.config();

const app = express();

app.use(cors({
   origin: 'http://localhost:3891',
   credentials: true
}));

app.use(express.json());

app.use('/api/', userRoute)
app.use('/api/', authRoute)

const PORTA = process.env.PORTA;
app.listen(PORTA, async () => {
   try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');

      await sequelize.sync({ force: true, alter: true });
      console.log('Banco de dados sincronizado com sucesso.');
   } catch (err) {
      console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
   }
   console.log(`Servidor rodando na porta ${PORTA}`);
});
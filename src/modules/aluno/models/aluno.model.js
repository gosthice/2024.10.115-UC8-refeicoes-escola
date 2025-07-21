const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Aluno = sequelize.define(
   "aluno",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         unique: true, 
         len: {
            args: [1, 5],
            msg: 'A ID deve ser no mínimo 1 caracteres e no máximo 5.'
         }
      },
   
      nome: {
         type: DataTypes.STRING(60),
         allowNull: false,
         validate: {
            isAlpha: {
               msg: 'É permitido apenas letras no nome.'
            }
         }
      },

      turma: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            arg: /^(?:[^0-9]*\d[^0-9]*)$/,
            msg: 'Deve conter o numéro da série na turma.'
         }
      },
   },
   {
      tableName: "aluno",
      createdAt: "criando_em",
      updatedAt: "atualizado_em"
   }
);

module.exports = Aluno;
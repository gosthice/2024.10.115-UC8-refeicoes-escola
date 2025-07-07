const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const DadosRefeicao = sequelize.define(
    "dados_refeicao",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true
        },
        aluno_nome: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        turma: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_refeicao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        cardapio: {
            type: DataTypes.STRING(130),
            allowNull: false
        },
        responsavel: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "dados_refeicao",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
);

module.exports = DadosRefeicao;
'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('usuario', [
      {
        nome: 'Maria Silva',
        papel: 'merendeira',
        email: 'maria.silva@example.com',
        senha: await bcrypt.hash('Senha@123', 10),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'João Souza',
        papel: 'admin',
        email: 'joao.souza@example.com',
        senha: await bcrypt.hash('Joao!2024', 10),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Ana Lima',
        papel: 'merendeira',
        email: 'ana.lima@example.com',
        senha: await bcrypt.hash('Ana@12345', 10),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Carlos Mendes',
        papel: 'admin',
        email: 'carlos.mendes@example.com',
        senha: await bcrypt.hash('Car1os#789', 10),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Fernanda Rocha',
        papel: 'merendeira',
        email: 'fernanda.rocha@example.com',
        senha: await bcrypt.hash('F3rn@nda2025', 10),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};

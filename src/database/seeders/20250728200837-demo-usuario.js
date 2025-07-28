'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Usuario', [
      {
        nome: 'Maria Silva',
        papel: 'merendeira',
        email: 'maria.silva@example.com',
        senha: await hashedPassword('Senha@123'),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'João Souza',
        papel: 'admin',
        email: 'joao.souza@example.com',
        senha: await hashedPassword('Joao!2024'),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Ana Lima',
        papel: 'merendeira',
        email: 'ana.lima@example.com',
        senha: await hashedPassword('Ana@12345'),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Carlos Mendes',
        papel: 'admin',
        email: 'carlos.mendes@example.com',
        senha: await hashedPassword('Car1os#789'),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Fernanda Rocha',
        papel: 'merendeira',
        email: 'fernanda.rocha@example.com',
        senha: await hashedPassword('F3rn@nda2025'),
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

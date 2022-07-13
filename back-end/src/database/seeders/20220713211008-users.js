'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
    [
      {
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator'
        // -- senha: md5('--adm2@21!!--')
      },
      {
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller'
        // -- senha: md5('fulana@123')
      },
      {
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer'
        // -- senha: md5('$#zebirita#$')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

// INSERT INTO users (id, name, email, password, role) VALUES
// (1, 'Delivery App Admin', 'adm@deliveryapp.com', 'a4c86edecc5aee06eff8fdeda69e0d04', 'administrator'), -- senha: md5('--adm2@21!!--')
// (2, 'Fulana Pereira', 'fulana@deliveryapp.com', '3c28d2b0881bf46457a853e0b07531c6', 'seller'), -- senha: md5('fulana@123')
// (3, 'Cliente Zé Birita', 'zebirita@email.com', '1c37466c159755ce1fa181bd247cb925', 'customer'); -- senha: md5('$#zebirita#$')
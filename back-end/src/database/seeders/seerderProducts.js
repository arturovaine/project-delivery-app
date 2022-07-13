
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.20,
        url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg'
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/heineken_600ml.jpg'
      },
      {
        id: 3,
        name: 'Antarctica Pilsen 300ml',
        price: 2.49,
        url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'
      },
      {
        id: 4,
        name: 'Brahma 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/brahma_600ml.jpg'
      },
      {
        id: 5, name: 'Skol 269ml',
        price: 2.19,
        url_image: 'http://localhost:3001/images/skol_269ml.jpg'
      },
      {
        id: 6,
        name: 'Skol Beats Senses 313ml',
        price: 4.49,
        url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'
      },
      { 
        id: 7,
        name: 'Becks 330ml',
        price: 4.99,
        url_image: 'http://localhost:3001/images/becks_330ml.jpg'
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: 2.79,
        url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'
      },
      {
        id: 9,
        name: 'Becks 600ml',
        price: 8.89,
        url_image: 'http://localhost:3001/images/becks_600ml.jpg'
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: 3.57,
        url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'
      },
      {
        id: 11,
        name: 'Stella Artois 275ml',
        price: 3.49,
        url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg'
      }
      ], { timestamps: false, tabelName: 'Users' });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};

// INSERT INTO products (id, name, price, url_image) VALUES
// 	(1, 'Skol Lata 250ml',2.20, 'http://localhost:3001/images/skol_lata_350ml.jpg'),
// 	(2, 'Heineken 600ml',7.50, 'http://localhost:3001/images/heineken_600ml.jpg'),
// 	(3, 'Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'),
// 	(4, 'Brahma 600ml',7.50, 'http://localhost:3001/images/brahma_600ml.jpg'),
// 	(5, 'Skol 269ml',2.19, 'http://localhost:3001/images/skol_269ml.jpg'),
// 	(6, 'Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'),
// 	(7, 'Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'),
// 	(8, 'Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),
// 	(9, 'Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'),
// 	(10, 'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),
// 	(11, 'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg');

// INSERT INTO products (id, name, price, url_image) VALUES

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coffee_beans_types', [
      {
        id: 'arabica',
        description: `Jadi, kalau biji arabica itu bentuknya lebih lonjong, saat dibelah bagian tengahnya terdapat rekahan berkelok. 
Trus rasanya tuh ada asamnya, tapi juga ada manisnya sedikit kayak buah-buahan. 
Dari segi aroma juga lebih terasa wangi buah-buahan, bunga, atau kacang-kacangan dibanding jenis biji kopi lainnya. 
Mau tanya apa lagi nih kak?`,
      },
      {
        id: 'robusta',
        description: `Jadi, kalau biji robusta itu bentuknya cenderung bulat dan saat dibelah bagian tengahnya terdapat rekahan lurus. 
Trus rasanya tuh lebih pahit dan kandungan kafeinnya bisa mencapai 2x lipat dibanding kopi arabica. 
Karakteristik rasanya yang menonjol lebih ke chocolaty gitu deh. 
Mau tanya apa lagi nih kak?`,
      },
      {
        id: 'liberica',
        description: `Jadi, kalau biji liberica itu ukurannya lebih besar dan bentuk bijinya asimetris. 
Trus rasanya tuh lebih seimbang antara pahit dan manis. 
Mau tanya apa lagi nih kak?`,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coffee_beans_types', null, {});
  },
};

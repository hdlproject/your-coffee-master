const {COFFEE_BEANS_TYPE} = require('../../models/constants/coffee');

class AskCoffeeBeansService {
  constructor(parameters) {
    this.parameters = parameters;
  }

  async getResponse() {
    switch (this.parameters['coffee-beans-type']) {
      case COFFEE_BEANS_TYPE.ARABICA:
        return `Jadi, kalau biji arabica itu bentuknya lebih lonjong, saat dibelah bagian tengahnya terdapat rekahan berkelok. 
Trus rasanya tuh ada asamnya, tapi juga ada manisnya sedikit kayak buah-buahan. 
Dari segi aroma juga lebih terasa wangi buah-buahan, bunga, atau kacang-kacangan dibanding jenis biji kopi lainnya. 
Mau tanya apa lagi nih kak?`;
      case COFFEE_BEANS_TYPE.ROBUSTA:
        return `Jadi, kalau biji robusta itu bentuknya cenderung bulat dan saat dibelah bagian tengahnya terdapat rekahan lurus. 
Trus rasanya tuh lebih pahit dan kandungan kafeinnya bisa mencapai 2x lipat dibanding kopi arabica. 
Karakteristik rasanya yang menonjol lebih ke chocolaty gitu deh. 
Mau tanya apa lagi nih kak?`;
      case COFFEE_BEANS_TYPE.LIBERICA:
        return `Jadi, kalau biji liberica itu ukurannya lebih besar dan bentuk bijinya asimetris. 
Trus rasanya tuh lebih seimbang antara pahit dan manis. 
Mau tanya apa lagi nih kak?`;
    }
  }
}

module.exports = AskCoffeeBeansService;

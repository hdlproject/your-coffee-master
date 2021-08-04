class AskCoffeeBeansService {
  constructor(parameters, {coffeeBeansRepo}) {
    this.parameters = parameters;
    this.coffeeBeansRepo = coffeeBeansRepo;
  }

  async getResponse() {
    const coffeeBeansType = await this.coffeeBeansRepo.getType(this.parameters['coffee-beans-type']);
    return coffeeBeansType.description;
  }
}

module.exports = AskCoffeeBeansService;

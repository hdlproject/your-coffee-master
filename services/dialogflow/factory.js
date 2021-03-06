const {INTENT_NAME} = require('../../models/constants/dialogflow');

const AskCoffeeBeans = require('./ask_coffee_beans');
const Fallback = require('./fallback');

class DialogflowService {
  static create({intentName, parameters}, {coffeeBeansRepo}) {
    switch (intentName) {
      case INTENT_NAME.ASK_COFFEE_BEANS:
        return new AskCoffeeBeans(parameters, {coffeeBeansRepo});
      default:
        return new Fallback();
    }
  }
}

module.exports = DialogflowService;

const {INTENT_NAME} = require('../models/constants/dialogflow');

class DialogflowHelper {
  static getIntentName(intentDisplayName) {
    switch (intentDisplayName) {
      case 'Confirm Ask Coffee Beans':
        return INTENT_NAME.ASK_COFFEE_BEANS;
      default:
        return INTENT_NAME.DEFAULT;
    }
  }
}

module.exports = DialogflowHelper;

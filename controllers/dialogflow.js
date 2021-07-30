const DialogflowService = require('../services/dialogflow/factory');

class DialogflowController {
  constructor(dialogflowService) {
    this.dialogflowService = dialogflowService;
  }

  async handleIntentFulfillment(req) {
    const response = this.dialogflowService.getResponse();

    return {
      'fulfillmentMessages': [
        {
          'text': {
            'text': [
              response,
            ],
          },
        },
      ],
    };
  }
}

module.exports = DialogflowController;

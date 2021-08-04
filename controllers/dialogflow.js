class DialogflowController {
  constructor(dialogflowService) {
    this.dialogflowService = dialogflowService;
  }

  async handleIntentFulfillment(req) {
    const response = await this.dialogflowService.getResponse();

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

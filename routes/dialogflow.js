const express = require('express');
const router = express.Router();
const DialogflowController = require('../controllers/dialogflow');
const DialogflowService = require('../services/dialogflow/factory');
const DialogflowHelper = require('../controllers/dialogflow_helper');

router.post('/intent-fulfillment', function(req, res, next) {
  const {body: {queryResult: {parameters, intent}}} = req;

  console.log(parameters, intent)

  const intentName = DialogflowHelper.getIntentName(intent.displayName);

  const service = DialogflowService.create(intentName, parameters);

  const controller = new DialogflowController(service);

  controller.handleIntentFulfillment(req)
    .then(result => {
      res.status(200).json(result).end();
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const DialogflowController = require('../controllers/dialogflow');
const DialogflowService = require('../services/dialogflow/factory');
const DialogflowHelper = require('../controllers/dialogflow_helper');
const CoffeeBeansRepo = require('../models/repositories/coffee_beans');

router.post('/intent-fulfillment', function(req, res, next) {
  const {body: {queryResult: {parameters, intent}}} = req;
  console.log(JSON.stringify(intent), JSON.stringify(parameters));

  const intentName = DialogflowHelper.getIntentName(intent.displayName);

  const coffeeBeansRepo = new CoffeeBeansRepo();

  const service = DialogflowService.create({
    intentName,
    parameters,
  }, {coffeeBeansRepo});

  const controller = new DialogflowController(service);

  controller.handleIntentFulfillment(req)
    .then(result => {
      console.log(JSON.stringify(result));
      res.status(200).json(result).end();
    });
});

module.exports = router;

const express = require("express");
const { processPaymentRequest, sendApiKeyOfStripe } = require("../controllers/paymentController");

const paymentRoute = express.Router();

// init routes
paymentRoute
  .route("/process-payment")
  .post(processPaymentRequest);
paymentRoute
  .route("/send-stripe-api-key")
  .get(sendApiKeyOfStripe);

module.exports = paymentRoute;

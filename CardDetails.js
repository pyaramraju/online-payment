const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    "recipientToken": "v0cdhlxg2dm1zlstkaz6ucaxdrpegspvpg2gqdup3pe3c4wb7z",
    "cardNumber": "4242-4242-4242-4242",
    "cardExpDate": "12/34",
    "cardCVV": "567",
    "currency": "INR",
    "amount": "1000"
});

module.exports = mongoose.model("CardDetails", cardSchema);

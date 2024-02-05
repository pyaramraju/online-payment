const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/pay", async (req, res) => {
  const App = req.body;

  try {
    const response = await fetch("https://65bdb94cb51f9b29e933a420.mockapi.io/api/v1/testPayment/pay", {
      method: "POST",
      headers: {
        "recipientToken": "v0cdhlxg2dm1zlstkaz6ucaxdrpegspvpg2gqdup3pe3c4wb7z",
        "cardNumber": "4242-4242-4242-4242",
        "cardExpDate": "12/34",
        "cardCVV": "567",
        "currency": "INR",
        "amount": "1000"
      },
      body: JSON.stringify(App)
    });
    const data = await response.json();
    res.json({ status: data.success ? "Payment successful" : "Payment failed" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "Payment failed. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

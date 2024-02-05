import './App.css';

  const App = {
    "name": document.getElementById("raju").value,
    "cardNumber": document.getElementById("4242-4242-4242-4242").value,
    "expDate": document.getElementById("12/34").value,
    "cvv": document.getElementById("567").value,
    "currency": document.getElementById("INR").value,
    "amount": document.getElementById("1000").value
  };
  document.getElementById("paymentForm").addEventListener("submit", async function(event) {
    event.preventDefault();
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
    document.getElementById("status").innerText = data.status;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("status").innerText = "Payment failed. Please try again later.";
  }
});
export default App;
function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
  
    var conversionRate = getConversionRate(fromCurrency, toCurrency);
    var convertedAmount = amount * conversionRate;
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = amount + " " + fromCurrency + " = " + convertedAmount.toFixed(2) + " " + toCurrency;
  }
  
  function getConversionRate(fromCurrency, toCurrency) {
    // Replace this with your own API call to get the conversion rate
    // You can use an API like Open Exchange Rates or any other currency conversion API
    // Here, we'll use a dummy conversion rate for demonstration purposes
    var conversionRates = {
      "USD": {
        "EUR": 0.85,
        "GBP": 0.71
      },
      "EUR": {
        "USD": 1.18,
        "GBP": 0.84
      },
      "GBP": {
        "USD": 1.41,
        "EUR": 1.19
      }
    };
  
    return conversionRates[fromCurrency][toCurrency];
  }
  
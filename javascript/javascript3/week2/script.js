const url = 'https://open.er-api.com/v6/latest/USD';
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const result = document.getElementById('result');
let exchangeRates, currencies;

async function fetchExchangeRates() {
  const response = await fetch(url);
  const data = await response.json();
  exchangeRates = data.rates;
  currencies = Object.keys(exchangeRates);
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  const convertedAmount = (amount / fromRate) * toRate;
  return convertedAmount.toFixed(2);
}

function updateResult() {
  const amount = amountInput.value;
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;
  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  result.textContent = convertedAmount;
}

function populateDropdowns() {
  for (let currency of currencies) {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
    option2.value = currency;
    option2.textContent = currency;
    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  }
  fromSelect.value = 'EUR';
  toSelect.value = 'DKK';
}

fetchExchangeRates()
  .then(populateDropdowns)
  .then(updateResult)
  .catch((error) => {
    console.error(error);
    result.textContent = 'An error occurred while gettingg exchange rates.';
  });

amountInput.addEventListener('input', updateResult);
fromSelect.addEventListener('change', updateResult);
toSelect.addEventListener('change', updateResult);
const axios = require("axios");

// Get Exchange-rate:
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get(
        "http://data.fixer.io/api/latest?access_key=336263726a0012b3bde6f3c72ac1c0c9",
    );
    const rate = response.data.rates;
    const eur = 1 / rate[fromCurrency];
    const exchangeRate = eur * rate[toCurrency];
    if (isNaN(exchangeRate)) {
        throw new Error(`Unable to get Currency ${fromCurrency} to ${toCurrency}`);
    }
    return exchangeRate;
};

// Get Countries:
const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/currency/${toCurrency}`);
        return response.data.map((country) => country.name);
    } catch (error) {
        throw new Error(`Unable to get Countries that use ${toCurrency}.`);
    }
};

// Convert Currency:
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const converted_amount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${converted_amount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
};

// Call converCurrency() to get meaningful data:
convertCurrency("USD", "PKR", 30)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });

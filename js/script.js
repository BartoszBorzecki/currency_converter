let valueElement = document.querySelector(".js-value");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let exchangeElement = document.querySelector(".js-exchange");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = valueElement.value;
    let exchange = exchangeElement.value;
    let EUR = 4.70
    let USD = 4.64
    let GBP = 5.42


    let result;

    switch (exchange) {
        case "EUR":
            result = value / EUR;
            break;
        case "USD":
            result = value / USD;
            break;
        case "GBP":
            result = value / GBP;
            break;

    }

    resultElement.innerText = ` ${result.toFixed(2)} ${exchange}`;

});
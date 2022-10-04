{
    const convertValue = (value, exchange) => {
        const EUR = 4.70
        const USD = 4.64
        const GBP = 5.42

        switch (exchange) {
            case "EUR":
                return value / EUR;

            case "USD":
                return value / USD;

            case "GBP":
                return value / GBP;

        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const resultElement = document.querySelector(".js-result");
        const exchangeElement = document.querySelector(".js-exchange");

        const value = valueElement.value;
        const exchange = exchangeElement.value;

        const result = convertValue(value, exchange)

        resultElement.innerText = ` ${result.toFixed(2)} ${exchange}`;

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}
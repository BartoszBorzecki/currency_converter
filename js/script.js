{
    const welcome = () => {
        console.log("Hello everyone!")
    }

    welcome();

    const convertValue = (value, currency) => {
        const EUR = 4.70
        const USD = 4.64
        const GBP = 5.42

        switch (currency) {
            case "EUR":
                return value / EUR;

            case "USD":
                return value / USD;

            case "GBP":
                return value / GBP;

        }
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = ` ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const currencyElement = document.querySelector(".js-currency");

        const value = valueElement.value;
        const currency = currencyElement.value;

        const result = convertValue(value, currency)

        updateResultText(result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}
document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.querySelector(".convert-button");
    const selectCurrency = document.querySelector(".select-currency");

    function convertValues() {
        const inputValue = document.querySelector(".value-to-convert").value;

        const dolarToday = 5.65;
        const euroToday = 6.44;

        const valoraserconvertido = document.querySelector(".real-value");
        const valorconvertido = document.querySelector(".dolar-value");

        if (selectCurrency.value == "dolar") {
            valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue / dolarToday);
        }
        if (selectCurrency.value == "euro") {
            valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue / euroToday);
        }

        valoraserconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);
    }

    function changeCurrency() {
        
        const currencyImg = document.querySelector(".currency-img");
        const currencyName = document.querySelector(".currency-name");

        if (selectCurrency.value == "dolar") {
            currencyName.innerHTML = "Dólar";
            currencyImg.src = "./assets/dolar.png";
        }
        if (selectCurrency.value == "euro") {
            currencyName.innerHTML = "Euro";
            currencyImg.src = "./assets/euro.png";
        }
        convertValues()
    }


    selectCurrency.addEventListener("change", changeCurrency);
    convertButton.addEventListener("click", convertValues);
});




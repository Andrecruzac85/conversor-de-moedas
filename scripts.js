document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.querySelector(".convert-button");

    function convertValues() {
        const inputValue = parseFloat(document.querySelector(".value-to-convert").value);
        console.log(inputValue);

        const dolarToday = 5.65;
        const converteddolar = inputValue / dolarToday;

        const valoraserconvertido = document.querySelector(".real-value");
        const valorconvertido = document.querySelector(".dolar-value");

        valoraserconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);

        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"        
        }).format(converteddolar);
    }

    convertButton.addEventListener("click", convertValues);
});




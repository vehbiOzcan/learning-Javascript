document.getElementById("change").addEventListener("click", convertCurrency);

function convertCurrency() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://v6.exchangerate-api.com/v6/d86633e74473d4a1faa211ad/latest/USD");
    //3.parametre default olarak true alır
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            //console.log(response.conversion_rates.TRY);
            const rate = response.conversion_rates.TRY;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;

        }
    }

    xhr.send();

}
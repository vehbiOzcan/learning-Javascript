function getText(){//Text dosyasından veri alma

    //Fetch API, window objesinin içerisinde gelen fetch() fonksiyonu ile 
    //http requestlerimizi yapabileceğimiz Ajax a alternatif ama ondan daha pratik ve kolay olan
    //bir API dir geriye bir promise döner ve biz bunu then ve catch kullanarak yakalarız

    fetch("example.txt") //Promise zinciri oluşturduk doğrudan response içeriğini de alabilirdik
    .then(response => {
        console.log(response); 
        return response}
        )
    .then(response => response.text()) //bunun sonucuda bize promise olarak gelir
    .then(data => console.log(data))
    .catch(err => console.log(err));
    //bu metotgeriye bir Response objesi döner gelen Response objesinin prototipi
    //içerisindeki text() fonkisyonu ile içerik text şeklinde alınır, json() fonksiyonu ile response içeriği 
    //json objesi olarak alınır
}

function getJsonFile() { //Localdaeki bir JSON dan veri alma
    fetch("example.json")
    .then(response => response.json()) //bunun sonucuda bize promise olarak gelir
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function getExternalApi(){//Uzak bir apiden JSON objesini aldık
    fetch("https://v6.exchangerate-api.com/v6/d86633e74473d4a1faa211ad/latest/USD")
    .then(response => response.json())
    .then(data => console.log(data.conversion_rates.TRY))
    .catch(err => console.log(err));


}   
//getText();
//getJsonFile();
getExternalApi();
console.log(window);
function getData(data) {//promise objesi döndüren fonkisyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            if (typeof data === "string") {
                //olumlu
                resolve(data);
            } else {
                //olumsuz
                reject("Lütfen bir String değer girin");
            }

        }, 3000);
    });
}
//Promise objesi içerisine bir tane callback fonksiyon alır bu fonksiyonda içerisine 
//Javascriptte hazır olan resolve ve reject olmak üzere iki fonksiyon alır biz 
//olumlu sonuçlarımızı (asıl istenilen) resolve ile olumsuz sonuçlarımızı (hataları)
//reject ile gödeririz

//dönen sonuçları resolve ise then reject ise catch ile yakalarız bu then ve catch 
//fonksiyonlarıda içlerine callback fonksiyon alırlar
console.log(getData("merhaba").then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.error(err);
}))

function addTwo(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === "number") {
            resolve(number + 2);
        } else {
            reject("Bir sayı girin");
        }
    })
}
//burada then return ile yeniden bir promise dönüyor bu sayede 
//promise chain yani promise zinciri oluşturuyor
//promise chain'de birden fazla then bulunabilir ve bu thenler birbirine bağlanır ama 
//yalnızca 1 tane catch bulunur bu oluşabilecek herhangi bir hatayı yakalar 

addTwo(5)
    .then(response => {
        console.log(response)
        return response + 2;
    })
    .then(response2 => console.log(response2))
    .catch(err => console.error(err));
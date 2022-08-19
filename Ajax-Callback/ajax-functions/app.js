//setTimeOut and setInterval functions with callback

let interval;

document.getElementById("btnStart").addEventListener("click", function () {
    setTimeout(function () {//asenkron
        console.log("Naber?");
    }, 5000);

    let i = 0;
    interval = setInterval(function () {//asenkron
        i++;
        console.log(i);
    }, 1000)

})

document.getElementById("btnStop").addEventListener("click", function () {
    clearInterval(interval);//interval ı siler/durdurur
})

document.getElementById("btnClick").addEventListener("click", function () {
    console.log("Tıklandı");
});//içine aldığı fonkisyon bir callback fonksiyondur

function process1() {
    setTimeout(function () {
        console.log("Process1");
    }, 3000);
}

function process2() {
    setTimeout(function () {
        console.log("Process2");
    }, 2000);
}

//Burada işlemler asenkron olarak gerçekleştiği için önce veya sonra yazılmanın bir önemi yoktur
//ilk olarak 2 sn sonra yazılacak olan process2 sonrada process1 yazılır
//process1();
//process2();
//bunu biz ilk olarak aynı saniyeleri koruyarak senkron bir şekilde önce process1 sonra 2 yi 
//yazmak istiyorsak callback fonksiyonlardan yaralanırız bunun için process1 in içine parametre olarak bir fonksiyon göndeririz 
//ve bu fonksiyon process2 olur bu sayede senkron bir şekilde işlemlerimizi yapabiliriz

function process1(callback) {
    setTimeout(function () {
        console.log("Process1");
        callback();

    }, 3000);
}

function process2() {
    setTimeout(function () {
        console.log("Process2");
    }, 2000);
}

//process1(process2);

const langs = ["python", "java", "javascript", "carbon", "lua"];

function addLang(lang) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi");
    }, 2000)
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        })
    }, 1000)
}

//addLang("c++");
//getAllLangs();

//Bu şekilde önce ekrana basar sonra da dili ekler asenkron bir şekilde çalıştığı için tam tersi yapmak için
//getALlLangs i parametre olarak addlang a göndermeliyiz ve callback çalışmalı ki 
//istediğimiz şekilde çalıştırablilelim

function addLang(lang, callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000)
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        })
    }, 1000)
}

//addLang("python", getAllLangs());

//Arrow Function, Bind and This

const person = {
    age:25,

    // tellAge: function(){
    //     console.log(this);
    //     console.log(this.age)
    // }.bind(this)
    //normalde bind yazmadan bu thisler fonksiyonumuzun iiçinde person objesini gösterir fakat fonksiyon dışında 
    //window objesini gösterir eğer biz buraya bind ile this gönderirsek 
    //artık fonksiyon içindeki thisler window objesini gösterir

    tellAge: () => {
        console.log(this.age);
        console.log(this);
    }
    //arrow function aslında tam olarak arka planda yuklarıdaki biçime dönüştürülür
    //yani içerisine kapsayıcı obje gönderilir burada kapsayıcı obje window olduğu için 
    //windowu gönderdi

}

person.tellAge();


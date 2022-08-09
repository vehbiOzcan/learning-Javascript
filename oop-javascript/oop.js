//OBJECT LITERAL
/*let value;
//obje yazımı
const programmer = {
    name: "john doe",
    age: 25,
    email: "john.doe@example.com",
    langs: ["python", "php", "java", "javascript"],
    //obje içierisinde obje tanımlayabiliriz
    adress: {
        city: "Ankara",
        street: "etimesgut"
    },
    // obje içerisinde metod tanımlayabiliriz
    work: function () {
        console.log("Programcı Çalışıyor...");
    }

}
programmer.salary = 15000; //objeye yeni özellik ekleyebiliriz

value = programmer;
value = programmer.adress.city;
value = programmer.langs;
value = programmer.work();
//value = programmer["email"]; bir başka değer ulaşımı böyledir

//DATE OBJECT

const now = new Date();//şimdiki zaman
value = now;
const date1 = new Date("8-15-2000 08:15:00");
value = date1;
const date2 = new Date("May 22 1981");
value = date2;
const date3 = new Date("1 05 1974");
value = date3;

value = date1.getMonth();//0 dan başlayarak ay
value = date1.getDate();//hangi gün sayı olarak
value = date1.getDay();//haftanın kaçıncı günü 1 den başlayarak

value = date1.getHours(); //saat
value = date1.getMinutes();//dakika
value = date1.getSeconds();//saniye
value = date1.getMilliseconds();//milisaniye

date1.setMonth(4);//ayı 0 dan başlatırız
date1.setDate(29);
date1.setFullYear(2003);
date1.setHours(9);
date1.setMinutes(29);
date1.setSeconds(00);

value = date1;

console.log(value);

//WINDOW OBJECT
//Javascript en genel objedir burada sadece birkaç metod kullanımına bakıyoruz

//alert("Merhaba");

//value = confirm("Bu bir confirm");

if (value) {
    console.log("tamam seçildi");
} else {
    console.log("iptal seçildi");
}

//value = prompt("2 + 2 = ?");

if (value == 4) {
    console.log("Doğru");
} else {
    console.log("Yanlış");
}

value = window;
value = window.location;
value = window.location.host;
value = window.location.host.name;
value = window.location.port;
value = window.location.href;
*/
/*
if (confirm("Sayfa Yenilensin mi?")) {
    window.location.reload();
} else {
    console.log("Sayfa yenilenemedi");
}
*/

/*
//tüm sekme boyutları
value = window.outerHeight;
value = window.outerWidth;

//içeriğin göründüğü kısmın boyutları
value = window.innerHeight;
value = window.innerWidth;

//içerik içinde oluşan scroll barın konumlarını verir
value = window.scrollX;
value = window.scrollY;

console.log(value);
*/
///------------------------------------------2.KISIM--------------------------------------------------------\\\

//CONSTRUCTOR

const emp1 = {
    name:"Ahmet",
    age:25
}

const emp2 = {
    name:"Mehmet",
    age:25
}
//tek tek obje oluşturmaktansa constructor kullanmak daha mantıklıdır

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp3 = new Employee("Ahsen",25,10000);
const emp4 = new Employee("Semih",25,15000);

emp3.showInfos();

//PROTOTYPE

//Javascriptte nesneler prototype tabanlı oluşur yani en temel Object nesnesi aynı zamanda oluşan tüm nesnelerin sahip olduğu bir prototype tir
//ve default bazı özellikler barındırır veya biz sonradan da ona özellikler ekleyebiliriz

const myObj = {};
console.log(myObj);

// myObj nesnesinin prototype i
// Object tir

function Person(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullname = function(){
        return `${this.name} ${this.surname}`
    } 
}

// myObj nesnesinin prototype i da Objecttir ama Person sadece Object'ten oluşmaz içerisinde bulundurduğu propertyleride kapsar
//OBJECT + name + surname + age ----> Person
// ama biz Person uapıcı metodundan bir nesne türetrisek bu sefer nesnenin prototype i Person olur Personun prototype da Object olur buna 
// prototype chain yani prototip zinciri denir 

const tokuc = new Person("Tokuç","Dog",1);
Person.prototype.color = "Yellow"; 
//bu şekilde nesnemizin prototype na yeni özellikler ekleyebiliriz
console.log(tokuc.hasOwnProperty("color")); // bura false döner çünkü bu kendi özelliği değildir prototipten gelen bir özelliktir
// ama nesnemiz özünde buna sahip olur

//Birde yapıcı metotlarla üretilen her objede aynı ve değişmeyen property ve metodları biz 
//constructor metodunun prototype na eklersek gereksiz yere bellek işgalinden kurtuluruz çünkü
//bir Constructordan bir nesne ürettiğimiz zaman o constructorun propertylerynin hepsi için bir alan ayrılır 
//ama biz prototype yazarsak tüm nesnelerimiz için yalnızca bir kere yer ayrılır bellekte

//Örneğin yukarıdaki Person constructorına biz üretilen nesnenin tüm bilgilerini bastıran bir showInfos metodunu 
//ekleyecek olalım bu metod her nesne için farklı çalışmayacak öyle ise bunu constructora değilde onun prototype na
//ekleyelim ki sadece bir kere yer ayrılsın ama tüm nesnelerde kullanabilelim bunun mantığı prototype in sadece bir kere üretilmesidir

Person.prototype.showInfos = function(){
    console.log(`İsim:${this.name} Surname:${this.surname} Yaş:${this.age}`);
}
//artık bu metodu her nesne ortak olarak kullanabilecek

tokuc.showInfos();

console.log(tokuc);


//Object.create()

function Vehicle() {


}

Vehicle.prototype.test1 = function(){
    console.log("test1");
}
Vehicle.prototype.test2 = function(){
    console.log("test2");
}

const vehicle = new Vehicle();

//Object.create() metodu oluşturacağımız objeyi başka bir objenin prototipini kullanarak oluşturmamızı sağlar
//Kalıtım için kulanılır bu metodla oluşturulan objenin prototipi kendinden oluşturulan ata objemizi gösterir

const truck = Object.create(vehicle);
//Object ----> Vehicle -----> truck 
truck.name = "Man";
truck.year = "2020";

console.log(truck);


//Bir Nesnenin prototipini Başka bir nesnenin prototipine bağlayabiliriz 
//yani aslında bir nesnenin özelliklerini başka bir nesneye prototip tabanlı kalıtabiliriz ve bunun
//içinde Object.create() metodunu kullanırız Car nesnesin Vehicle nesnesin özelliklerini almasını sağlayalım


function Car(name,model) {
    this.name = name;
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

const carObj = new Car("Nissan","R34 GT-R");

console.log(carObj);

Car.prototype.myTest = () => console.log("myTest Function");

//Buradaki prototip zinciri önce carObj nesnesi sonra Car nesnesi sonra Vehicle nesnesi ve en son ve genel Object nesnesinin prototipidir 
//bir property yi arama hiyerarşiside bu sırada işler

//Call, Apply and Bind function

const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number1: 20,
    number2: 30
}
//Bu fonksiyonlar normalde o özelliği sahip olmadığı için this i kullanamazken bu fonksiyonları 
//kullanarak metotlara bir obje gönderip thisin işaret edeceği bir objeye sahip olmasını sağlar
function addNumber(number3,number4) {
    console.log(this.number1 + this.number2 + number3 + number4);
}

addNumber(100,200);
addNumber.call(obj1,100,200);

addNumber.apply(obj2,[100,200]);

const bindFunction = addNumber.bind(obj2);
bindFunction(100,200);

//INHERITENCE

function Animals(name,age){
    this.name = name;
    this.age = age;
}

Animals.prototype.showInfos = function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);
}

const animal = new Animals("Kedi","1");
animal.showInfos();

function Dog(name,age,genus){
    this.name = name;
    this.age = age; 
    this.genus = genus; 
}

function Cat(name,age,genus){
    // this.name = name;
    // this.age = age; 
    Animals.call(this,name,age);//2.yöntem
    //burada this Cat constructorunı işaret ediyor
    this.genus = genus; 
}

Dog.prototype = Object.create(Animals.prototype);//1.yöntem
//Animals prototypeni Dog prototype na bağlıyoruz yani prototip tabanlı kalıtım
const dog = new Dog("Sarı",1,"Golden");

//@Override
Dog.prototype.showInfos = function(){
    console.log("Ad: "+this.name+" Yaş: "+this.age+" Cins: "+this.genus);
}
dog.showInfos();
console.log(dog);

const cat = new Cat("Dişsiz",4,"Bombay");
Cat.prototype.showInfos = function(){
    console.log("Ad: "+this.name+" Yaş: "+this.age+" Cins: "+this.genus);
};
// Cat.prototype
cat.showInfos();
console.log(cat);
//iki yöntem de kalıtım yapmak için kullanılabilir. Ama 2. yötem görüldüğü üzere daha basit





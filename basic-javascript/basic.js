//VARIABLES
//primitive type
var a = 10;
console.log(a);
console.log(typeof a);

var b = "deneme";
console.log(b);
console.log(typeof b);

var c = true;
console.log(c);
console.log(typeof c);

var d = 10.1;
console.log(d);
console.log(typeof d);

//referance type

var x = [1, 2, 3, 4];
console.log(x[2]);
console.log(typeof x);

x.push(5);


var y = {
    name: "kenny",
    age: 15
}
console.log(y);
console.log(typeof y);

var t = function myFunction() {
    console.log("benim fonksiyonum");
}
console.log(t);
console.log(typeof t);


//var defalarca tanımlanabilir
var o = 10;
var o = 5;

//let sadece 1 kere tanımlanır sonradan değeri değiştirilebilir
let z;
z = 10;
z = 20;
console.log(z);

//const tanımlandığı satırda aynı zamanda initialize edilmelidir.
//const sonradan değiştirilemez, dizilerde ise const sonradan değiştirilemez ama referans gösterdiği adresi değiştirmeden adresteki değere ekleme veya çıkarma yapılabilir
const g = 10;
console.log(g);

const dizi = [1,2,3,4,5];
dizi.push(7);

console.log(dizi);

//OPERATORS
/*
==
=== hem tip hem içerik kontrolü
!=
!(KOŞUL)
<
>
>=
<=
TERNARY
(KOŞUL) ? (TRUE İFADESİ) : (FALSE İFADESİ)
&& ve 
|| veya
*/ 


//TYPE CONVERSION

let value;
//String() metodu ile stringe çevirmek
value = 321;
console.log(value);
console.log(typeof value)

value = String(321);
console.log(value);
console.log(typeof value);

value = function myfonk(){
    console.log();
}
console.log(value);
console.log(typeof value);

value = String(true);
value = String([1,2,3]);

value = (10).toString();
value = 20 + "300";
console.log(value);
//Number() metoduyla numbera çevirmek bu metod sadece sayı olan stringleri number yapar

value = Number("321");
console.log(value + typeof value);
value = Number("3.14");
console.log(value + typeof value);
value = Number(null);
console.log(value + typeof value);
value = Number(undefined);
console.log(value + typeof value);

value = parseInt("321");
value = parseFloat("3.14");

//MATH METHODS

value = Math.PI;
value = Math.E;
value = Math.floor(3.5);
value = Math.ceil(3.5);
value = Math.round(3.7);
value = Math.round(3.2);
value = Math.random();

console.log(value);

//STRING METHODS

const firstName = "Walter";
const lastName = "White";
let lang = "python,javascript,java";
let fname;

fname = firstName.concat(" ",lastName," ","Chemist");
console.log(fname); 

value = lang.split(",");
console.log(value);
console.log(value[1]);
fname = fname.replace("Walter","Mr. Walter");
console.log(fname)

//TEMPLATE LITERAL
//stringleri biçimlendirmede kolalık sağlayan bir kullanım
const namee = "Bill";
const lname = "Gates";
const department = "Yazılım";

let bref = "İsim:"+ namee + "\n" + "Soyad:" + lname + "\n" + "Alan:" + department;
console.log(bref);
bref = `İsim:${namee}\nSoyad:${lname}\nAlan:${department}`;
console.log(bref);

const HTML = `
    <ul>
        <li>${namee}</li>
        <li>${lname}</li>
        <li>${department}</li>
    </ul>    
`
document.body.innerHTML = HTML;
//HTML e ekleme yapacağımızda kullanımı yaygın

//ARRAYS

let value2;
//dizi tanımlama şekilleri let ve var da olabilir
const numbers = [4,2,5,6,8,9];
//const numbers = Array(4,2,5,6,8,9)

value2 = numbers.length;
value = numbers[0];

//Array methods
/*

indexof(sayı) sayı hangi indiste 
push(sayi) array sonuna değer ekler
unshift(sayi) başına ekler
pop(sondan eleman atar)
shift() baştan eleman atar
splice(alt,üst) alt üst aralığı atar
reverse() ters çevirir
sort() ilk değere göre sıralar
sort(function(x,y){return x - y}); küçükten büyüğe
sort(function(x,y){return y - x}); büyükten küçüğe

*/ 

//FUNCTION

function myFunction(name){
    console.log(`İsim:${name}`);
}

//Function expression

const merhaba = function(name){
    console.log("Merhaba" + name);
}

//Immediately Invoked Function Expression(IIFE)
/*
(function(x){
    console.log("Merhaba" + x);
})();//gönderilen parametre
*/
//arrow function
const arrowFunction = x => console.log(x);

arrowFunction("this is an arrow");


//Obje içinde fonksiyon kullanımı

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    }
}

console.log(database.host);
database.add();
database.get();

//LOOPS 
let diller = ["python","php","javascript","java"];
diller.forEach(function(dil,index){
    console.log(dil," ",index);
});
//obje dizisi
const users = [
    {name:"Ahmet",age:15},
    {name:"Ali",age:25},
    {name:"Veli",age:30}
];
//bir obje dizisinde belli bir özelliği dizi haline getirmek için map kullanılır
//user nesne dizisini tek tek dolanıp name özelliklerini names te dizi haline getirdik

const names = users.map(function(user){
    return user.name;
});

console.log(names)

const user = {
    name: "Semih",
    age:"20"
}

//for in
for(let key in user){
    //key sadece özellikleri getirir 
    //user[key] ise özelliğin değerini getirir
    console.log(key,user[key]);

const cars = ["BMW","Audi","Ford"];    
let text = "";

//for of
for(let x of cars){
    text += x +"\n";
}    
console.log(text)

}





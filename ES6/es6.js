//DESTRUCTİNG

let number1, number2;

arr = [100, 200, 300, 400];

[number1, number2] = arr;
console.log(number1, number2);

//obje ile

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 5,
    showInfos: () => console.log("Bilgiler gösteriliyor...")
};

const { a: number3, b: number4, c: number5, showInfos: bilgiGoster } = numbers;

console.log(number3, number4, number5);
bilgiGoster();

const getLangs = () => ["python", "java", "c++"];
const [lang1, lang2, lang3] = getLangs();

console.log(lang1, lang2, lang3);

//SPREAD OPERATOR

const langs = ["python", "c++", "java", "php"];

//console.log(langs[0],langs[1],langs[2],langs[3]);

//diziyi yazdırma
console.log(...langs);

const langs2 = ["javascript", "c#", ...langs];

console.log(...langs2);


const numbers2 = [1, 2, 3, 4, 5, 6, 7];

//dizi içinde dizi ekleme
const [a, b, ...numbers3] = numbers2;

console.log(a, b);
console.log(...numbers3);

//fonksiyona parametre göderme
const addNumbers = (a, b, c) => console.log(a + b + c);

const numbers4 = [100, 200, 300];

addNumbers(...numbers4);

//FOR IN and FOR OF

const person = {
    name: "Fatih Sultan Mehmet",
    age: 21,
    langs : ["Türkçe","Arapça","Farsça","Latince","Yunanca","Sırpça"]
}

const langs3 = ["Python","Java","Carbon","Php"];

const ad = "Mustafa";

//for in
//for in döngüde oluşturulan değişkende aldığı değerlerin indis değerlerini tutar

//object
for(let prop in person){
    console.log(prop,person[prop]);
}
//array
for(let index in langs3){
    console.log(index,langs3[index]);
}
//string
for(let index in ad){
    console.log(index,ad[index]);
}

//for of
//for of döngüde oluşturulan değişkende aldığı değerlerin içeriğini tutar ama objelerde çalışmaz sadece dizi yapılı veri türlerinde çalışır

// object
//for(let value of person){
//     console.log(value);
// }

//array
for(let value of langs3){
    console.log(value);
}
//string
for(let value of ad){
    console.log(value);
}

//MAPS 
//Map'ler key-value ilişkisiyle çalışır key ve value her türden değeri alabilir

let map = new Map();

console.log(typeof map);

const key1 = "Ankara";
const key2 = {a:10,b:20};
const key3 = () => 2;

//set
map.set(key1,"String değeri");
map.set(key2,"Object Literal değeri");
map.set(key3,"Fonksiyon değeri")

//get
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

//map boyut
console.log(map.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",17);
cities.set("Konya",2.5);

//foreach ile 
cities.forEach(function(value,key){
    console.log(key,value);
})

//for of
for(let [key,value] of cities){
    console.log(key,value)
}
//sadece key
for(let key of cities.keys()){
    console.log(key);
}
//sadece value
for(let value of cities.values()){
    console.log(value)
}

//Array convert to Map

const array = [["key1","değer1"],["key2","değer2"]];
const lastMap = new Map(array);
console.log(lastMap);

//Map convert to Array
const mapToArray = Array.from(cities);
console.log(mapToArray);

// REFERENCE TYPE and PRIMITIVE TYPE
//Referans tipler adres tutma mantığı ile çalışırken primitive tipler değer tutar
//iki referans tipi birbiri ile kıyaslarken içeriğine bakılmaz aynı adresi tutup tutmadıklarına bakılır
//bu  yüzden içerikler aynı olsa dahi adresleri farklı ise eşit çıkmazlar

const mapp = new Map();

mapp.set([1,2,3], "Ankara");
console.log(mapp.get([1,2,3]));//undefined der çünkü arraylarin adresleri farklı
//bunu önlemek için key = [1,2,3] yapıp set ve get te de key değişkenini kullanmalıyız 
//diğer eşitlik işlemleri için de geçerli

//SET
//setleri maplarden ayıran bazı metodları,key value değilde sadece değer tutuyor olmaları 
//ve en önemlisi bir değeri yalnızca bir kere tutyor olmaları
const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Konya");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});
console.log(mySet);

const mySet2 = new Set([100,3.14,"İstanbul"]);
console.log(mySet2);

console.log(mySet2.size);

mySet.delete(3.14);

console.log(mySet)

console.log(mySet.has("Konya"));
console.log(mySet.has(100));
console.log(mySet.has([1,2,3])); //array referans tip olduğu için false döner

//foreach
mySet.forEach(function(value){
    console.log(value);
})

//for of
for(let value of mySet){
    console.log(value)
}

//Set convert to Array
const array2 = Array.from(mySet2);
console.log(array2);
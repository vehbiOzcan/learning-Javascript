//değişkenler

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

//Referance type

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

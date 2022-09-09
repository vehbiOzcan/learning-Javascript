
// module.exports = function test1(){
//     console.log("Test1");
// }

// module.exports = function test2(){
//     console.log("test2");
// }
//Eğer biz bu şekilde isim vermeden fonksiyonlar yazarsak require ile oluşturduğumuz nesnemiz en son yazdığımız nesene olur
//burada index.js deki app test2 fonksiyonu oldu 

//Aşağıdaki şekilde yazarsak index.js de require ile oluşturduğumuz nesnemiz ile dilediğimize erişebiliriz
//module.exports.nesneadı = nesnemizin yapısı; 
// module.exports.test1 = function test1(){
//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){
//     console.log("Test 2");
// }
//Ama bu kullanımdan daha iyi bir kullanım var o da modülü obje şeklinde kullanmak
module.exports = {
    name: "Ahmet",
    test1: function(){
        console.log("Test 1");
    },
    car:{
        name:"Audi A8",
        model:"2022"
    }
}

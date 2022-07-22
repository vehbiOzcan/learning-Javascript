//OBJECT LITERAL
let value;
//obje yazımı
const programmer = {
    name: "john doe",
    age: 25,
    email:"john.doe@example.com",
    langs: ["python","php","java","javascript"],
    //obje içierisinde obje tanımlayabiliriz
    adress: {
        city: "Ankara",
        street: "etimesgut"
    },
    // obje içerisinde metod tanımlayabiliriz
    work: function(){
        console.log("Programcı Çalışıyor...");
    }

}

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

//WINDOW OBJECT



console.log(value);


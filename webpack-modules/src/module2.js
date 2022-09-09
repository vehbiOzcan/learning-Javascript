//ES6 modules

//ES6 ile modulleri export etmede yeni bir syntax geldi dışarıya export edilen yani kullanıma açılan  yapının 
//başına export yazılır ve bu yapı kullanılacak sınıfın içerisinde import anahtar kelimesiyle dahil edilir import kullanımı
//index.js dosyasında anlatıldı

export const name = "Ahmet";
export function test(){
    console.log("test");
}
export class Person{
    static Test(){
        console.log("Test Person");
    }
}

export const character  = {
    name:"Steve",
    game:"Minecraft",
    info: function(){
        console.log(this.name,this.game);
    }
}

//defult anahtar kelimesi ile yazılan bir yapı impoert edilen sınıf içerisinde destructing içinde değil direkt isimiyle yazılır
//bir modül içinde yalnızca bir tane default bulunabilir  

//export default const Deneme = "deneme";
//iki farklı şekilde de yazılabilir

const Deneme = "Default denemesi";

export default Deneme;


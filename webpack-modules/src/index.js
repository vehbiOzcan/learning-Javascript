//CommonJS Modules
const app = require("./module1"); //require export edilen modüllleri almamızı sağlayan bir metoddur

console.log(app);
// app.test1();
// app.test2();

console.log(app.name);
app.test1();
console.log(app.car.name);
console.log(app.car.model);

//ES6 Modules

//import {modül içindeki nesnelerin adı} from "import edilen modulun  yolu (direk modul ismi yazılırsa node_modules içinde arar)";

//Eğer bir modulun tamamını kullanacaksak şu şekilde:
//import * as modulunAdı from "modulün yolu";

//eğer default olarak tanımlanmış bir yapıyı kullanacaksak destructing içinde değil direkt ismi ile alabiliriz yani:
//import defaultTanımlananNesneAdı from "import edilen modul yolu"; 

import {name,Person,test} from "./module2"; //export ile yapılan propertleri import ettik
import Deneme from "./module2"; //default bir property import ettik

console.log(name); //property
test(); //method
Person.Test(); //class
console.log(Deneme);//Default property

import * as module2 from "./module2"; //module2 yi komple import ettik ama içerisinde export yapılanlar kullanılabilir

module2.character.info(); //object literal

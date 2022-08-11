//ES6+ OOP CLASSES

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("Ad: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
// }

// const emp1 = new Employee("Ahmet",25,10000);

// console.log(emp1);
//Eski yöntemle objelerimizi ve prototiplerimiz bu şekilde oluşturuyorduk ama 
//ES6 ile birlikte sınıf yapılaryla oluşturuyoruz 

class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    //constructor dışına yazdığımız metotlar ve propertyler objenin prototipi içerisine eklenir 
    showInfos() {
        console.log("Ad: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp2 = new Employee("Ahmet", 25, 10000);
console.log(emp2);

//STATIC METHODS 

class Matematik {
    sqr(x) {
        console.log(x * x);
    }
    static cube(x) { //sınıfın prototipine yazılmadığı için üretilen objeler sahip değildir
        console.log(x * x * x);
    }
}

const math = new Matematik();
math.sqr(4);
console.log(math);
console.log(Matematik);
//math.cube(4); static metotları üretilen objeler kullanmaz sadece sınıfla birlikte kullanıllabilir

Matematik.cube(4);
//Matematik.sqr(4); static olmayan metotlar ise sadece üretilen objeler ile kullanılabilir sınıf ile kullanılamaz

//INHERITENCE

// function Animals(name,age){
//     this.name = name;
//     this.age = age;
// }

// Animals.prototype.showInfos = function(){
//     console.log("İsim: "+this.name+" Yaş: "+this.age);
// }

// const animal = new Animals("Kedi","1");
// animal.showInfos();

// function Dog(name,age,genus){
//     this.name = name;
//     this.age = age; 
//     this.genus = genus; 
// }

// function Cat(name,age,genus){
//     // this.name = name;
//     // this.age = age; 
//     Animals.call(this,name,age);//2.yöntem
//     //burada this Cat constructorunı işaret ediyor
//     this.genus = genus; 
// }

// Dog.prototype = Object.create(Animals.prototype);//1.yöntem
// //Animals prototypeni Dog prototype na bağlıyoruz yani prototip tabanlı kalıtım
// const dog = new Dog("Sarı",1,"Golden");

// //@Override
// Dog.prototype.showInfos = function(){
//     console.log("Ad: "+this.name+" Yaş: "+this.age+" Cins: "+this.genus);
// }
// dog.showInfos();
// console.log(dog);

// const cat = new Cat("Dişsiz",4,"Bombay");
// Cat.prototype.showInfos = function(){
//     console.log("Ad: "+this.name+" Yaş: "+this.age+" Cins: "+this.genus);
// };
// // Cat.prototype
// cat.showInfos();
// console.log(cat);
//ES6 öncesi kalıtım işlemlerini yukarıdaki gibi yapılıyordu ama ES6 ile birlikte kalıtım işlemleri oldukça basit bir syntax ile yapılıyor
//fakat arka planda yine bu şekilde oluşturuluyor

class Person { //SuperClass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }

}

class Developer extends Person {//DerivedClass, Subclass, ChildClass
    constructor(name, age, salary, langs) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
        this.langs = langs;
        super.showInfos();
    }
    //şuan bu sınıfta personun sahip olduğu tüm metot ve propertylere sahip
    //ama biz bu metotları override edebliriz sınıf içerisinde
    
    //@Override
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary + " Diller: " + this.langs);
    }
    
    //@Override
    toString(){
        console.log("Geliştirici");
    }

    raiseSalary(amount){
        this.salary += amount;
    }

}

const dev = new Developer("Selim",22,10000,"Java, C, JavaScript, HTML");
dev.raiseSalary(500);
dev.showInfos();
dev.toString();
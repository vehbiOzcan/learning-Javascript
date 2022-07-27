//LOCAL STORAGE
//verileri kendimiz veya javascriptle silmezsek kalıcı olarak tutan yapı
//set ıtem
localStorage.setItem("hareket","pushup");
localStorage.setItem("tekrar","12");

//get Item
const value = localStorage.getItem("hareket");
console.log(value);

//clear local storage
//localStorage.clear();

if(localStorage.getItem("sport") === null){
    console.log("Veri bulunamadı");
}else{
        console.log("veri bulundu");
}
//local storage - array yazma

//böyle yapınca local storage a veri string olarak yazılıyor
const todos = ["Todo1","Todo2","Todo3"];
localStorage.setItem("todos",todos);

//ama JSON un bir metodunu kullanarak yazarsak dizi olarak kayıt ediyor
//diziyi kayıt etme
localStorage.setItem("todo",JSON.stringify(todos));
//diziyi çekme
const values = JSON.parse(localStorage.getItem("todo"));
console.log(values);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo")

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;
    //todos varmı yokmu diye kontrol
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
        //todos dizisinin içeriğini alıyoruz
    }

    todos.push(value);
    //son eklenen todosu ekliyoruz
    localStorage.setItem("todos",JSON.stringify(todos));
    //tekrar local storagega kayıt ediyoruz
    e.preventDefault();
}

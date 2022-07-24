let value;

value = document;
value = document.all.length;
value = document[0];
value = document.all[0];

//elements html elementlerini collection olarak alıyor
const elements = document.all;

console.log(elements);

for(let i = 0; i < elements.length; i++){
    console.log(elements[i]);
}

//collection türünü array haline getirdik
const collections = Array.from(document.all);

collections.forEach(function(element){
    console.log(element);
})

value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.URL;

value = document.characterSet;

console.log(value);

//SCRIPTS
let script;
script = document.scripts;

script = document.scripts.length;
script = document.scripts[0]; //0. indisteki scripti getirir

console.log(value);

//LINKS
let link;
link = document.links;
link = document.links.length;
link = document.links[0];
//getAttribute seçilen elemanın istenilen attribute nu getirmeye yarar
link = document.links[document.links.length-1].getAttribute("class");
link = document.links[document.links.length-1].getAttribute("href");
link = document.links[document.links.length-1].className;
link = document.links[document.links.length-1].classList;//liste halinde verir

console.log(link);

//FORM

form = document.forms;
form = document.forms.lenght;
form = document.forms[0];
form = document.forms["form"];//bu şekilde name özelliğine göre alır
//aşağıdaki iki şekilde form elemanların özelliğini almak için iki farklı yöntem 
form = document.forms[0].id;
form = document.forms[0].getAttribute("id");

value = document. forms[0].method;


console.log(form);

//ELement Id 'e göre seçme

let select;

select = document.getElementById("todo-form");
select = document.getElementById("tasks-title");

//Element Class 'a göre seçme

select = document.getElementsByClassName("list-group-item");
select = document.getElementsByClassName("card-header");

//Element Tag' a göre seçme

select = document.getElementsByTagName("li");
select = document.getElementsByTagName("div");

//Query Selector - CSS Selector tek bir element seçer

select = document.querySelector("#todo-form");
select = document.querySelector("#tasks-title");

select = document.querySelector(".list-group-item");
//Query Selector ile tüm elemanları seçme 

//Node List olarak döndürür
select = document.querySelectorAll(".list-group-");

select.forEach(function(el){
    console.log(el);
})

console.log(select);

//STYLE and ELEMENT ATTRIBUTES

let element;
element = document.querySelector("#clear-todos");

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);

element.className = "btn btn-primary";

element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr.";
element.target = "_blank";
element.textContent = "Google Git";
element.innerHTML = "<span color = 'red'>Silin</span>";

const lists = document.querySelectorAll(".list-group-item");

lists.forEach(function(list){
    list.style.backgroundColor = "#ccc";
})















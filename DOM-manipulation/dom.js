let value;

value = document;
value = document.all.length;
value = document[0];
value = document.all[0];

//elements html elementlerini collection olarak alıyor
const elements = document.all;

console.log(elements);

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

//collection türünü array haline getirdik
const collections = Array.from(document.all);

collections.forEach(function (element) {
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
link = document.links[document.links.length - 1].getAttribute("class");
link = document.links[document.links.length - 1].getAttribute("href");
link = document.links[document.links.length - 1].className;
link = document.links[document.links.length - 1].classList;//liste halinde verir

console.log(link);

//FORM
form = document.forms;
form = document.forms.lenght;
form = document.forms[0];
form = document.forms["form"];//bu şekilde name özelliğine göre alır
//aşağıdaki iki şekilde form elemanların özelliğini almak için iki farklı yöntem 
form = document.forms[0].id;
form = document.forms[0].getAttribute("id");

value = document.forms[0].method;


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

select.forEach(function (el) {
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

const lists = document.querySelectorAll(".list-group-item:nth-child(odd)");
//CSS te çocuk elemanları seçme komutları ile seçebiliriz

lists.forEach(function (list) {
    list.style.backgroundColor = "#ccc";
})

//NAVIGATING DOM ELEMENTS

let val;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

val = todoList;
val = todo;
val = cardRow;

//Child Nodes

//Bu özellik satır atlamalarınıda birer child olarak alır
val = todoList.childNodes; //çocukları getirir ama textleride sayar
val = todoList.childNodes[0];

//Children (Element)

//Bu özellik satır atlamalarını yani textleri dahil etmez sadece elementleri sayar

val = todoList.children; //çocukları getirir
val = todoList.children[0];
val = todoList.children[0].textContent = "Değişti";

val = cardRow;
val = cardRow.children; 
val = cardRow.children[2].children[1].textContent = "Burası da değişti";

val = todoList;
val = todoList.firstElementChild; //ilk çocuk
val = todoList.lastElementChild; //son çocuk
val = todoList.children.length; //çocuk sayısı
val = todoList.childElementCount;//sayı almanın bir başka yöntemi

val = cardRow;
val = cardRow.parentElement; //ebeveyni 
val = cardRow.parentElement.parentElement; 

//Element Sibling

val = todo;
val = todo.previousElementSibling; //önceki kardeş elementi alır
val = todo.nextElementSibling; //sonraki kardeş elementi alır
val = todo.nextElementSibling.nextElementSibling;

val = todo.previousElementSibling.previousElementSibling;

console.log(val);

//ADD ELEMENT ( DYNAMIC )

//<a id = "clear-tools" class = "btn btn-danger" href = "#">Farklı bir link</a>

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//Text Content
// newLink.textContent = "Farklı sayfaya git"; ama bu yöntem eğer elementin childları varsa onların yerini alır
//appendChild() son çocuğun arkasına ekler

//const text = document.createTextNode("asdasd");

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
cardBody.appendChild(newLink);

console.log(cardBody);

//DELETE ELEMENT ( DYNAMIC )

const todoList2 = document.querySelector("ul.list-group"); //parent elementi aldık
const todos = document.querySelectorAll("li.list-group-item");


//Remove metodu

todos[1].remove();
//doğrudan seçili elementi siler

//Remove child metodu
//içerisine elementin çocuğunu atarız
todoList2.removeChild(todoList2.lastElementChild);
todoList2.removeChild(todos[2]);

console.log(todos);
console.log(todoList2);

//REPLACE ELEMENT

//<h5 class="card-title" id="tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];//hangi parenti seçeceğimizi söyledik
const newElement = document.createElement("h3");//h3 etiketini bu metodla oluşturduk

newElement.id = "tasks-title";
newElement.className = "card-title";
newElement.textContent = "Yeni Todolar";

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);
//seçilen parentin çocuklarından yeni gelecek olan 1.parametre değişecek olan 2. parametre olur

console.log(newElement);

//ADD,DELETE,REPLACE ELEMENT ( DYNAMIC )

const todoInput = document.getElementById("todo");
let element2;

element2 = todoInput;
element2 = todoInput.classList;

todoInput.className = "form-control";
//bu şekilde class name 0 dan verilebilir
//aşağıdaki şekliyle class name eklenebilir
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
//class name silinebilir
todoInput.classList.remove("form-control"); //class ismini siliyor

element2 = todoInput;
element2 = todoInput.placeholder; //özelliği getirir
element2 = todoInput.getAttribute("placeholder"); //özelliği getirir
todoInput.setAttribute("placeholder","naber");
todoInput.setAttribute("title","Input"); //özellik ekler veya günceller
todoInput.removeAttribute("title"); //özelliği siler


console.log(element2);




//EVENT OBJECT and EVENT LISTENER

const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);

});


/*
filterInput.onfocus = () => {
    console.log("focus");
}; eventin bir başka kullanımı*/


todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("submit event");

    e.preventDefault(); //event objesinin default davranışlarını yok sayar

}

//KEYBOARD EVENTS

//keypress sadece harfler ve rakamları alır diğerlerini değerlendirmez
document.addEventListener("keypress",function(e){
    //console.log(e.which); //ASCII kodunu verir
});

//keydown basıldığı anda basılan her karakteri alır
document.addEventListener("keydown",function(e){
    //console.log(e.key); //ASCII kodunu verir
});

//keyup tuşa basmayı bıraktığımız an alır her karakteri alır
document.addEventListener("keyup",function(e){
    console.log(e.key); //ASCII kodunu verir
});

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

//Aşağıda başlığı dinamik olarak input elementinin içeriği ile değiştiriyoruz
todoInput.addEventListener("keyup",changeText);

function changeText(e){

    header.textContent = e.target.value;
    console.log(e.target.value);

}

//MOUSE EVENTS
const cardbody = document.querySelectorAll(".card-body")[1];
const headr = document.querySelector(".card-header");
const filter = document.querySelector("#todo");

//mouse click event : tam tıklamada çalışır bas çek yapınca
headr.addEventListener("click",run);

//double click event : tam çift tıklamada bas çek yapınca
headr.addEventListener("dblclick",run);

// mousedown event : basılı tutunca çalışır
headr.addEventListener("mousedown",run);


//mouseup event : bırakınca çalışır
headr.addEventListener("mouseup",run);

//mouseover event: elementin üzerine her gelişte çalışır
// headr.addEventListener("mouseover",run);
// cardbody.addEventListener("mouseover",run);

//mouseout event : elementin üzerinden her ayrılışta çalışır
// headr.addEventListener("mouseout",run);
// cardbody.addEventListener("mouseout",run);

//mouseenter event : mouse conteiner üzerine geldiğinde tüm childlar için bir kere çalışır
//cardbody.addEventListener("mouseenter",run);

//mouseleave event : mouse conteiner üzerinden ayrılınca tüm childlar için sadece bir kere çalışır
//cardbody.addEventListener("mouseleave",run);

//DOMContentLoaded event : sayfa her yeni yüklemede bir kez çalışır
document.addEventListener("DOMContentLoaded",run);

//focus event
filter.addEventListener("focus",run);

//blur event
filter.addEventListener("blur",run);

//copy
filter.addEventListener("copy",run);

//paste
filter.addEventListener("paste",run);

//cut
filter.addEventListener("cut",run);

//select
filter.addEventListener("select",run);


function run(e){
    console.log(e.type);
}

//Event Capturing or Delegation
cardbody.addEventListener("click",tryer);
//event delegation sayesinde biz bir conteiner içerisindeki elementlerin hepsine tek tek 
//event listener atamaktan kurtuluruz kapsayıcının sahip olduğu listenera sahip olurlar
function tryer(e){
    console.log(e.target);
}

//Event Bubbling
//Event bubbling child yapılan bir event, aynı tür evente sahipse sırasıyla parenta kadar (dahil) tetiklenir

document.querySelector(".container").addEventListener("click",function(e){
    console.log("Div Container");
});
document.querySelector(".card.row").addEventListener("click",function(e){
    console.log("Card Row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(e){
    console.log("Card Body");
});



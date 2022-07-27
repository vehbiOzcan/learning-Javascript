//SESSION STORAGE (-KEY -VALUE)
//sessionStorage bir window objesidir ve anlık depolama sağlar sayfa kapatıldığında yada oturum kapatıldığında gider

//BUTONS
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//INPUTS
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    console.log("ekleme");
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e){ 
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}

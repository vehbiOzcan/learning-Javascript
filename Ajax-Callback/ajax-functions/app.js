let interval;

document.getElementById("btnStart").addEventListener("click", function () {
    setTimeout(function () {//asenkron
        console.log("Naber?");
    }, 5000);
    
    let i = 0;
    interval = setInterval(function () {//asenkron
        i++;
        console.log(i);
    }, 1000)

})

document.getElementById("btnStop").addEventListener("click", function () {
    clearInterval(interval);//interval ı siler/durdurur
})
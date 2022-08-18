// onreadystatechange	Defines a function to be called when the readyState property changes
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status 	
//200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

document.getElementById("btn").addEventListener("click", function () {
   
    const xhr = new XMLHttpRequest();
    //nesnemizi oluşturduk


    // xhr.onreadystatechange = function () {
    //     console.log(this.readyState);
    //     if (this.status === 200 && this.readyState === 4)
    //         console.log(xhr.responseText);
    // } bu artık eski bir yöntem onload metodu kullanmak daha pratik

    xhr.onload = function(){    //bu metod readyState == 4 olduğunda çalışır 
        //response hazır
        console.log(this.responseText);
    }

    xhr.onprogress = function(){
        console.log("İşlem yapılıyor...",this.readyState);
        //bu metod readyState == 3 ken çalışır
    }
    //oluşturduğumuz xhr nesnemizi open ile hangi methodla ,hangi server veya adresten alacağı veri kaynağını,ve true asenkron false senkron işlem yapacağını gönderiyoruz
    xhr.open("GET", "example.txt", true);

    //burada da requestimizi gönderiyoruz asenkron
    xhr.send();

})

//AJAX->CALLBACK HTTP REQUEST

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url) {

        this.xhr.open("GET", url);//Bağlantı sağlandı
        //Request.xhr demek oluyor aşağıdaki kullanım

        const temp = this;

        // this.xhr.onload = function () {
            //Buradaki this imiz Requesti (sınıfımızı) işaret eder kapsayıcı olarak

            // if(this.xhr.status === 200){
            //     console.log(this.xhr.responseText);
            // }
            //Bu şekilde kullanım yanlıştır zaten biz burada this.xhr yaparak sınıfın içindeki xhr ı aldık 
            //yani biz tekrar this.xhr.onlaod içinde this.xhr yapınca xhr nin içinde başka bir xhr ararız 
            //bu yüzden hata alırız bunun önüne geçmenin 4 yolu var:

            //1.Yöntem: onload dışında const temp = this; yaparak this nesnemize Requesti eriştirip onload içinde 
            //this yerine tempi kullanmak (takipi kolay olsada ilkel bir yöntemdir)
            // if(temp.xhr.status === 200){
            //     console.log(temp.xhr.responseText);
            // }

            //2.Yöntem: this.xhr.onload içinde artık bizim thisimiz xhr nesnesini tuttuğu için
            //sadece this anahtar kelimesini kullanmak
            // if(this.status === 200){
            //     console.log(this.responseText);
            // }

        //}

        //3.Yöntem: get metodu içindeki this sınıfı(Request i) işaret ettiği için onload metoduna .bind(this) diyerek içerideki this e
        //Requesti işaret ettirebiliriz
        this.xhr.onload = function () {
            if (this.xhr.status === 200) {
                console.log(this.xhr.responseText);
            }
        }.bind(this);

        //4.Yöntem: onload metodunu arrow function a eşitleyerek yazarız buda içeriye this olarak
        //Requesti eşitler yani temel olarak 3.Yöntemi uygulamış oluruz
        // this.xhr.onload = () => {
        //     if (this.xhr.status === 200) {
        //         console.log(this.xhr.responseText);
        //     }
        // }

        this.xhr.send();



    }
    //apiden veri almak için get
    get(url,callback) {
        //callback, bizim ulaştığımız değerleri fonksiyon dışında alabilmemiz için kullancağımız yöntemlerden biridir

        this.xhr.open("GET", url);
        const temp = this;

        this.xhr.onload = function () {
            
            if (this.xhr.status === 200) {
                callback(null,this.xhr.responseText);
            }else{
                callback("GET request: Bir Hata Oluştu",null);
            }

        }.bind(this);


        this.xhr.send();



    }
    //apiye veri göndermek için post
    post(url,data,callback){
        
        this.xhr.open("POST",url);
        //setRequestHeader metodu ile göndereceğimiz post umuzun hangi türde veri olacağını belirtiyoruz form mu yoksa json mu? 
        //json için
        this.xhr.setRequestHeader("Content-type", "application/json");
        //form için
        //this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        this.xhr.onload = function(){
            if(this.status === 201)//post işlemi başarılı kodu (bkz:MDN response status codes)
            {
                callback(null,this.responseText);//attığımız postu geri dönüyoruz
            }else{
                callback("POST request: Bir Hata Oluştu");
            }
        }
        this.xhr.send(JSON.stringify(data));//String olarak göndermemiz gerektiği için JSON objesini çevirdik
    }

    //mevcut veriyi güncellemek için
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("PUT request: Bir hata oluştu");
            }

        }

        this.xhr.send(JSON.stringify(data));
    }

    //mevcut veriyi silmek için kullanılır
    delete(url,callback){
        this.xhr.open("DELETE",url);

        const temp = this;

        this.xhr.onload = function(){
            if(temp.xhr.status === 200){
                callback(null,"Silme işlemi başarılı");
            }else{
                callback("DELETE request: Bir hata oluştu",null);
            }
        }

        this.xhr.send();
    }

}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    //callback fonksiyon sayesinde bu değerleri alabiliyoruz yani aslında biz getiçindeki callbackte gönderdiğimiz değerleri burada erişiyoruz ve işliyoruz

    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }

});

request.post("https://jsonplaceholder.typicode.com/albums",{userID:2,title:"Cem Karaca"},function(err,album){
    if(err === null){
        console.log(album);
    }else{
        console.log(err);
    }
})

request.put("https://jsonplaceholder.typicode.com/albums/10",{userID:143,title:"maNga Şehr-i Hüzün"},function(err,album){
    if(err === null){
        console.log(album);
    }else{
        console.log(err);
    }
})

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        console.log(response)
    }else{
        console.log(err);
    }
})







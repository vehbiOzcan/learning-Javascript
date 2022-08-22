class Request {

    // get(url){

    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    // } 
    //Yukarıdaki biçimle veriyi dışarıdan alamayız bunun için tekrar promise yapısını kullanabiliriz
    get(url) {// veri alma
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
        //Aldığımız veriyi artık promise yapısı ile dışa dönebiliyoruz
    }

    post(url, data) {//veri gönderme
        return new Promise((resolve, reject) => {//fonksiyon dışında erişebilmek için promise olarak döndürdük
            fetch(url, {
                method: 'POST',//ne tür bir request olduğunu belirtiyoruz
                body: JSON.stringify(data),//datayı string olarak body özelliği altıda yolluyoruz
                headers: {//headers özelliği altında içerik tipimizi (json veya form) ve hangi karakter setini kullanacağımızı belirtiyoruz
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    put(url, data) { //veri güncelleme
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    delete(url) {//veri silme
         //silme işlemi başarılı olunca promise geriye null dönüyor 
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => resolve("Veri Silindi."))
                .catch(err => reject(err));
        })

    }


}

const request = new Request();
let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     })
//     .catch(err => console.error(err));

//console.log(albums); 
//albums er undefined olarak durur çünkü asenkron olarak işlem yapıldığı için then içinde albums = data yapılmadan 
//albums ekrana bastırıldı bu yüzden tanımsız olarak geldi ama then içindeki işlem 
//sorunsuz bir şekilde ekrana bastırılır


//Aşağıdaki şekiliyle çalışır çünkü 3 sn bekledikten sonra çalışıyor yukarıdaki then içindeki işlem çoktan bitmiş oluyor ve kod senkron gibi davranıyor
// setTimeout(() => {
//     console.log(albums);
// }, 3000);

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Hans Zimmer - Time" })//id API de otomatik ekleniyor
    .then(album => console.log(album))
    .catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Evgeny Grinko - Jane Maryam" })//id endpointle gitti
    .then(album => console.log(album))
    .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")//silinecek id endpointle geliyor
.then(message => console.log(message))
.catch(err => console.log(err));
class Request {
    // async ve await kullanarak http request işlemlerimizi çok daha basite indirgeyerek kullanabiliyoruz
    async get(url) { //Veri alma
        const response = await fetch(url); //Response objesi
        const data = await response.json();//JSON objesi
        return data;//aldığımız JSON objesi yeniden bir promise olarak dönüyor async fonksiyon olduğu için
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        const respData = await response.json();

        return respData;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const respData = await response.json();

        return respData;
    }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE'
        })

        return "Veri Silindi";
    }

}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => console.log(data))
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Evgeny Grinko - Valse"})
.then(data => console.log(data))
.catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:2,title:"Ludovico Einaudi - Experience"})
.then(data => console.log(data))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.log(err));
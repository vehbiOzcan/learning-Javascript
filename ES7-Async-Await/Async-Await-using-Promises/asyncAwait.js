//async fonksiyonların promise döneceğini belirten bir kullanımdır
//biz bir fonksiyona promise döndürmesek bile eğer async function olarak tanımlarsak otomatik olrak 
//promise olrak resolve döner. 
async function test(data) {
    return data;
}
//Yukarıdaki fonksiyon ile aşağıdaki fonksiyon aynıdır
async function test2(data) {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

console.log(test("Merhaba"));

console.log(test2("Merhaba2"));

//await anahtar kelimesi ise bir promisin resolve dönmesini bekler resolve dönene kadar aşağıdaki satırları çalıştırmaz
//ve await yalnızca async functionlarda kullanılabilir 
async function test3(data) {
    let promise = new Promise((resolve, reject) => { //promise başka değişkenlere atanabilir
        setTimeout(() => {
            resolve("Bu bir denemedir");
        }, 3000)
    })
    let response = await promise; // bu kısımdan sonrasını promise resolve dönene kadar çalıştırmaz

    return response;//promise resolved olunca ve response değişkenine girince return çalışır 
    //yani aşağısını okur
}

test3()
    .then(response => console.log(response));


async function test4(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data);
            } else {
                reject("Lütfen string değer girin");
            }
        }, 4000);

    });
    //sonuç resolve olursa aşağıya iniyor ama reject olursa hiç aşağıya bakmadan 
    //reject dönüyor ve fonksiyonu orada bitiriyor
    const response = await promise;//Stringse artık bunun içerisinde data promise şeklinde 
    //reject olursa  yukarıdaki satır bu ve sonraki kısma hiç bakılmaz
    return response;
    console.log("resolve döndü");
}

test4(4)
.then(data => console.log(data))
.catch(err => console.log(err));

//bu async ve awaitler fetch ile çok efektif bir şekildde kullanılır

async function getCurrency(url){
    const response = await fetch(url); //Promise döner resolve içinde ise Response objesi dönüyor
    console.log(response);
    const data = await response.json(); //.json da Promise dönüyor resolve döünce Geriye JSON objesi dönüyor 

    return data; //async olduğu için bu fonksiyonda data yı promise olarak döner ve resolve durumunda JSON objesi olarak döner
}

getCurrency("https://v6.exchangerate-api.com/v6/d86633e74473d4a1faa211ad/latest/USD").then(data => console.log(data));
//promise olarak döndüğü için then yapısı ile aldık
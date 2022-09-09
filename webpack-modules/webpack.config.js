var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry:["@babel/polyfill","./src/index.js"],//ana klasörümüzün yerini gösteriyoruz ve async await kullanmını sağlıyoruz
    output:{//çıktı klasörünü ve dosyasını oluşturuyoruz
        path:path.resolve(__dirname,'bundles'),
        filename:'bundle.js'
    },
    mode:"development",//development veya production
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',//webpack in babel ile iletişimini ve kullanmasını sağlayan paket
                    options:{
                        presets:["@babel/preset-env"] //babel in ES5 standartlarına çeviren paketi
                    }
                }
            }
        ]
    }
}

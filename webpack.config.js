//Importando path
const path = require("path");

//Importando HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Importando plugin de imagens
const CopyWebpackPlugin = require("copy-webpack-plugin");

 
module.exports = {
    //targes define onde vamos exportar as configurações
    target: "web",
    //Definindo o modo da aplicaçao 
    mode: "development",

    //Definindo arquivo de entrada 
    entry: path.resolve(__dirname, "src", "main.js"),
    //Definindo a saida
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    //configurações do DEVSERVER
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            //definindo arquivo que sera utilizado
            template: path.resolve( __dirname, "index.html"),
            favicon: path.resolve( "src", "assets","scissors.svg" ),
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                from: path.resolve(__dirname,"src", "assets"),
                to: path.resolve(__dirname,"dist", "src", "assets"),
}            ],
        })
    ],

    //Importando o Css

    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
            {
                test:/\.js$/,
                exclude:/node_module/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}

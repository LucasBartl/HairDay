//Importando path
const path = require("path");

//Importando HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    ],

    //Importando o Css

    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            }
        ]
    }
}

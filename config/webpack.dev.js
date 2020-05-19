const path = require("path");

module.exports = {
    entry:{
        main: ["./src/main.js"]
    },
    mode:"development",
    output:{
        filename:"[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    devServer:{
        contentBase: "dist",
        overlay: true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test:/\.html$/i,
                use:[
                    {loader: "file-loader",
                     options: {name: "[name].html"}},
                    {loader: "extract-loader"},
                    {loader: "html-loader",  
                    options: {
                        // Disables attributes processing
                        attributes: false,
                      }}
                ]
            }
        ]
    }
}
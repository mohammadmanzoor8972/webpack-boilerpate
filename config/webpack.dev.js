const path = require("path");

module.exports = {
    entry:{
        schoolReport: ["./src/main.js", "./src/school.js"],
     //   attendance: ["./src/main.js", "./src/school.js"]
    },
    mode:"development",
    output:{
        filename:"[name].bundle.js",
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
            }
        ]
    }
}
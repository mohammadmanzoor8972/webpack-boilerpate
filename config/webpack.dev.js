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
                    options:{attributes:{
                        list: [ {
                            tag: 'img',
                            attribute: 'src',
                            type: 'src',
                          },
                          {
                            tag: 'img',
                            attribute: 'srcset',
                            type: 'srcset',
                          },
                          {
                            tag: 'img',
                            attribute: 'data-src',
                            type: 'src',
                          },
                          {
                            tag: 'img',
                            attribute: 'data-srcset',
                            type: 'srcset',
                          }]
                    }}}
                ]
            },
            {
                test:/\.(jpg|gif|png)$/i,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                            attributes: false
                        }
                    }
                ]

            }
        ]
    }
}
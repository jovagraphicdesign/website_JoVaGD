const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" // this generate index.htlm
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html edit filename | add more 
            filename: 'about.html',
            template: 'src/about.html'
        }),
        new HtmlWebpackPlugin({ 
            filename: 'contact.html',
            template: 'src/contact.html'
        }),    
        new HtmlWebpackPlugin({ 
            filename: 'work.html',
            template: 'src/work.html'
        })        
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    }
};
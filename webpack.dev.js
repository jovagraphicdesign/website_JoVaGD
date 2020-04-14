const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");


module.exports = merge(common,{
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 4e inject styles into DOM
                    "css-loader",   // 3e turn css into commonjs
                    "postcss-loader", //2e add vendor prefix to our css
                    "sass-loader"]  // 1ste turns sass into css
            }
        ]
    }
});
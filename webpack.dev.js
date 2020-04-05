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
                    "style-loader", // 3e inject styles into DOM
                    "css-loader",   // 2e turn css into commonjs
                    "sass-loader"]  // 1ste turns sass into css
            }
        ]
    }
});
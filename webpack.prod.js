const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), 
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,// 3e Extract css into files
                    "css-loader",   // 2e turn css into commonjs
                    "sass-loader"]  // 1ste turns sass into css
            }
        ]
    }
});
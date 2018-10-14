var path = require("path");

var config = {

    entry: ["./src/sample"],

    output: {
        path: path.resolve(__dirname, "wwwroot/build"),
        filename: "bundle.js"
    },

    mode: "development",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            } 
        ]
    }


};

module.exports = config;
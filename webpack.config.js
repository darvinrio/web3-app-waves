const { builtinModules } = require("module");

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        filename : 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /mode_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
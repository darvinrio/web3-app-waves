const { builtinModules } = require("module");

module.exports = {
    entry: [
        './src/seedIndex.js'
    ],
    output: {
        filename : 'dapp.js'
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
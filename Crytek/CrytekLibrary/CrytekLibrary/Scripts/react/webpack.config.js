
module.exports = {
    mode: 'production',
    context: __dirname,
    entry: "./app.js",
    output: {
        path: __dirname + '/build',
        filename: "main.js"
    },
    watch: true,
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            }]
    }
}
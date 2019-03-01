const webpack = require('webpack');

module.exports = {
    mode: 'production',
    context: __dirname,
    entry: "./app.js",
    output: {
        path: __dirname + '/build',
        filename: "main.js"
    },
    watch: true,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [{ loader: "style-loader" },
                { loader: "css-loader" }]
            },
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
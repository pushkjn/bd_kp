const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
    const isDevelopment = !(argv.mode == 'production')
    return ({
        entry: './client/src/index.jsx',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.jsx?$/, 
                    exclude: /(node_modules)/,  
                    loader: "babel-loader",   
                    options: {
                        presets: [ "@babel/preset-react" ]    
                    }
                }
            ]
        },
        mode: isDevelopment ? 'development' : 'production',
        resolve: {
            extensions: [ '.js', '.jsx' ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: 'body',
                template: './client/public/index.html'
            })
        ]
    })
}
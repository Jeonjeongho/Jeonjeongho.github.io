const path = require('path');
const webpack = require('webpack');

/*add start*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
/*add end*/

/*
const PATH = {
    src : path.resolve(__dirname),
    dist: path.resolve(__dirname , '../')
};
*/
const config = {

    devServer: {
        //host: 'localhost',
        //inline: true,
        //hot:true,
        //port: 4000,
        contentBase: path.resolve(__dirname, '../')
    },

    entry : {
        'assets/js/vendor' : ['babel-polyfill','jquery','url-search-params'],
        'assets/js/main' : ['./js/_app','./scss/app.scss']
    },
    output : {
        path: path.resolve(__dirname, '../'),
        filename:'[name].js',
    },
    module : {
        rules : [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory:true
                    }
                }
            },{
                test: /\.s[ac]ss$/,
                //loader: ['style-loader', 'css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 2,
                            }
                        },{
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline'
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true
                            }
                        },
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/css/main.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('assets/js/vendor'),
        new HandlebarsPlugin({
            entryOutput: [
                ['web/*.hbs', '[name].html'],
                ['web/event/*.hbs', 'event/[name].html']
            ]
        })
    ]
};

module.exports = config;

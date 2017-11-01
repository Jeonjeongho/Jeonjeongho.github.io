const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const handlebarsConfigPath = './handlebars/handlebars.config.js';
const mixWebpackConfig = {};

if (fs.existsSync(handlebarsConfigPath)) {
    const handlebarsConfig = require(handlebarsConfigPath);

    mixWebpackConfig['plugins'] = mixWebpackConfig['plugins'] || [];

    mixWebpackConfig['plugins'].push(new HandlebarsPlugin(handlebarsConfig));
}



mix
    .webpackConfig(mixWebpackConfig)

    .setPublicPath('../')
    // 소스맵
    .sourceMaps()
    // 자동 모듈 호출
    // .autoload({
    //     'jquery': ['$', 'jQuery']
    // })
    //
    // // 공용 js, css
    // .extract(['babel-polyfill', 'url-search-params', 'jquery'])
    // .sass('scss/_vendor.scss', 'assets/css/vendor.css')
    //
    // // web
    // .js('js/_app.js', 'assets/js/app.js')
    // .sass('scss/_app.scss', 'assets/css/app.css')

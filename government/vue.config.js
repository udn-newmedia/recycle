// const CompressionPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css']
// module.exports = {
//     publicPath: './',
//     configureWebpack: config => {
//         if (process.env.NODE_ENV === 'production') {
//             return {
//                 plugins: [new CompressionPlugin({
//                     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//                     threshold: 10240,
//                     deleteOriginalAssets: false
//                 })]
//             }
//         }
//     },
// }
module.exports = {
    publicPath: './',
}

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    // 使用这个插件
    // plugins: [
    //     new CopyWebpackPlugin([
    //         {
    //             from: "../../src/components/*.vue",
    //             to: "../appComponents/*.vue"
    //         },
    //     ])
    // ]
    configureWebpack: {
        plugins: [
            // new CopyWebpackPlugin({
            //     patterns: [{
            //
            //         from: '../../src/components/*.vue',
            //         to: '../appComponents/*.vue'
            //     }
            //     ],
            // }),
        ],
    }
}

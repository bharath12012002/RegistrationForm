const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/mfp/employee/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'employee',
            filename: 'remoteEntry.js',
            exposes: {
                './EmployeeApp': './src/bootstrap'
            },
            shared: ['react', 'react-dom']
        })
    ]

};
module.exports = merge(commonConfig, prodConfig);
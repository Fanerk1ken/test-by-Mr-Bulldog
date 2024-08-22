module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: 'pre',
                loader: require.resolve('source-map-loader'),
                resolve: {
                    fullySpecified: false,
                },
                exclude: /@twa-dev\/sdk/,
            },
        ],
    },
};
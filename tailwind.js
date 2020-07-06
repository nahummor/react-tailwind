module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                'facebook-blue': '#3b5998',
                'ios-green': '#53d769'
            },
            spacing: {
                '72': '18rem'
            }
        },
    },
    variants: {},
    plugins: [],
}
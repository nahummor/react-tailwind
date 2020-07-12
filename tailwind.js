module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {
            height: theme => ({
                "screen/2": "50vh",
                "screen/2.5": "40vh",
                'screen/3': '33.333333333333336vh',
                "screen/4": "25vh",
                "screen/5": "20vh",
                "screen/6": "16.666666666666668vh",
                "screen/10": "10vh",
            }),
            colors: {
                'facebook-blue': '#3b5998',
                'ios-green': '#53d769'
            },
            spacing: {
                '72': '18rem',
                '74': '18.5rem',
                '76': '19rem',
                '120': '30rem',
                '1/1': '100%',
                '5/6': '83.33333333333334%',
                '3/4': '75%',
                '1/2': '50%',
                '2/3': '66.66666666666667%',
                '2/5': '40%',
                '1/3': '33.333333333333336%',
                '1/4': '25%',
                '1/5': '20%',
                '1/6': '16.666666666666668%',
                '1/12': '8.333333333333334%'
            },
            minWidth: {
                none: 'none',
                xs: '20rem',
                sm: '24rem',
                md: '28rem',
                lg: '32rem',
                xl: '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
                '4xl': '56rem',
                '5xl': '64rem',
                '6xl': '72rem',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            }
        },
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    },
    plugins: [],
}
import breakpoints from '../breakpoints';

const commonTheme = {
    palette: {
        common: {
            white: 'rgba(255, 255, 255, 1)',
            black: 'rgba(0, 0, 0, 1)',
            pink: 'rgba(227, 68, 87,  1)',
            green: 'rgba(7, 178, 137, 1)',
            blue: 'rgba(0, 138, 227, 1)',
            purple: 'rgba(103, 62, 244, 1)',
            yellow: 'rgba(249, 201, 84, 1)'
        },
        error: {
            light: 'rgba(211, 47, 47, 1)',
            main: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(211, 47, 47, 1)'
        },
        warning: {
            light: 'rgba(255, 160, 0, 1)',
            main: 'rgba(255, 160, 0, 1)',
            dark: 'rgba(255, 160, 0, 1)'
        },
        info: {
            light: 'rgba(25, 118, 210, 1)',
            main: 'rgba(25, 118, 210, 1)',
            dark: 'rgba(25, 118, 210, 1)'
        },
        success: {
            light: 'rgba(67, 160, 71, 1)',
            main: 'rgba(67, 160, 71, 1)',
            dark: 'rgba(67, 160, 71, 1)'
        },
        grey: {
            [50]: '#fafafa',
            [100]: '#f5f5f5',
            [200]: '#eeeeee',
            [300]: '#e0e0e0',
            [400]: '#bdbdbd',
            [500]: '#9e9e9e',
            [600]: '#757575',
            [700]: '#616161',
            [800]: '#424242',
            [900]: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161'
        }
    },
    border: {
        color: 'rgba(176, 176, 176, 1)',
        radius: '.4rem',
        solid: '.1rem solid rgba(176, 176, 176, 1)'
    },
    // spacing: {
    //     marginButtonGroup: '1.6rem',
    //     paddingInputFile: '.8rem',
    //     paddingButtonNormal: '.8rem',
    //     paddingButtonSmall: '.4rem',
    //     spaceSm: '.8rem',
    //     spaceMd: '1.6rem',
    //     spaceLg: '2.4rem',
    //     spaceXl: '3.2rem'
    // },
    duration: {
        durationFast: '0.15s',
        durationNormal: '0.3s',
        durationSlow: '0.4s'
    },
    typography: {
        h1: {
            fontWeight: 400,
            fontSize: '3.6rem',
            lineHeight: 1.7,
            letterSpacing: 0
        },
        h2: {
            fontWeight: 500,
            fontSize: '3rem',
            lineHeight: 1.2,
            letterSpacing: '0.015rem'
        },
        h3: {
            fontWeight: 500,
            fontSize: '2.8rem',
            lineHeight: 1.2,
            letterSpacing: '0.015rem'
        },
        h4: {
            fontWeight: 500,
            fontSize: '2.2rem',
            lineHeight: 1.2,
            letterSpacing: '0.015rem'
        },
        body1: {
            fontWeight: 400,
            fontSize: '1.8rem',
            lineHeight: 1.4,
            letterSpacing: '0.015rem'
        },
        body2: {
            fontWeight: 400,
            fontSize: '2.2rem',
            lineHeight: 1.6,
            letterSpacing: '0.01rem'
        },
        button: {
            fontWeight: 500,
            fontSize: '1.6rem',
            lineHeight: 1.16,
            letterSpacing: '0.125rem'
        },
        caption: {
            fontWeight: 400,
            fontSize: '1.2rem',
            lineHeight: 1.14,
            letterSpacing: '0.04rem'
        }
    },
    space: ['.8rem', '1.6rem', '2rem', '3.2rem', '4rem', '4.8rem', '6rem', '8rem', '12rem', '16rem', '24rem'],
    transitions: {
        easing: {
            easeInOut: '.3s cubic-bezier(0.4, 0, 0.2, 1) .3s',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
        }
    },
    breakpoints
};
export default commonTheme;

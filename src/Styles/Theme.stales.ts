export const baseTheme = {
    colors: {
        pantone295c: '#002856',
        pantone289c: '#1f3a60',
        pantone200c: '#c11727',
        pantone187c: '#ae1926',
        gray1: '#ededed',
        gray3: '#e0e0e0',

        bg: '#E5E4E8',
        font: '#19191B',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    // in px
    sizes: {
        modal: {
            max_width: "800px",
            min_width: "400px",
            min_height: "50%",
            max_height: "80%",
        },
    },

    // in ms
    durations: {
        ms300: 0.3,
    },

    // z-index
    order: {
        header: 50,
        modal: 100,
        PopUp: 500,
    },
}
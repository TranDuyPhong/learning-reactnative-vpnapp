import { Utils } from 'expo-ui-kit';

const theme = {
    COLORS: {
        primary: '#0094FC',
        secondary: '#A3A1F7',
        tertiary: '#FFE358',
        black: '#000200',
        white: '#FFFFFF',
        gray: '#535453',
        error: '#DC3545',
        warning: '#FFE358',
        success: '#4CD964',
        info: '#4DA1FF'
    },
    SIZES: {
        base: 8,
        font: 16,
        radius: 30,
        padding: 26,
        h1: 34,
        h2: 24,
        h3: 20,
        title: 16,
        subtitle: 13,
        caption: 12,
        small: 10
    }
};

export default Utils.mergeTheme(Utils.theme, theme);
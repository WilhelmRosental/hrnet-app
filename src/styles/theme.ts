import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: '#e97316',
        secondary: '#12002b',
        tertiary: '#e9d116',
        surface: '#fbfbfb',
        surfaceContainer: '#fbfbfb',
        surfaceDim: '#371b05',
        gradient: 'linear-gradient(117deg, #e97316 0%, #e9d116 100%)',
    },
    fontFamily: {
        title: "'Rochester', cursive",
        body: "'Roboto', sans-serif",
    },
    fontSize: {
        title: '48px',
        titleSm: '24px',
        subtitle: '24px',
        subtitleSm: '12px',
        paragraph: '20px',
        paragraphSm: '14px',
        paragraph2: '18px',
        paragraph2Sm: '12px',
        paragraph3: '14px',
        paragraph3Sm: '10px',
        label: '14px',
        labelSm: '10px',
    },
    borderRadius: {
        lg: '5px',
        md: '10px',
        round: '500px',
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
}
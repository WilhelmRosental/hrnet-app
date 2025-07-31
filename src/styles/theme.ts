import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: '#12002b',
        secondary: '#ff6b35',
        background: '#f5f5f5',
        surface: '#ffffff',
        text: '#333333',
        textSecondary: '#666666',
    },
    fontSize: {
        small: '12px',
        paragraph: '14px',
        medium: '16px',
        large: '18px',
        xlarge: '24px',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    fontFamily: {
        title: "'Rochester', cursive",
        body: "'Roboto', sans-serif",
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
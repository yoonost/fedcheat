/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/**/**/*.{js,ts,jsx,tsx}',
        './src/**/**/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                'body': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
                'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            textDecoration: ['active'],
            minWidth: {
                36: '9rem',
                44: '11rem',
                56: '14rem',
                60: '15rem',
                72: '18rem',
                80: '20rem',
            },
            transitionProperty: { width: 'width', stroke: 'stroke' }
        }
    },
    plugins: [],
}


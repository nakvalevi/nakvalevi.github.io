import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
			'black': '#1D2722',
            'white': '#FFFFFF',
            'brown-lighter': '#F2F0E6',
            'brown-light': '#B9B292',
            'brown': '#726633',
            'brown-dark': '#4F4519',
            'brown-darker': '#352C08',
            'green-lighter': '#EDF2E6',
            'green-light': '#C7DBA9',
			'green': '#9EC06C',
			'green-dark': '#587F20',
            'green-darker': '#1E3300',
			'red': '#4E3B45',
            'yellow-light': '#EDD283',
			'yellow': '#DBA507',
			'yellow-dark': '#B58C0A',
			'background': '#F9F7F3',
			'border': '#DAD5BE',
		},
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '1280px',
            },
            center: true,
            padding: '1rem',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;

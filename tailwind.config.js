import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: '#ffffff', // Background color for the entire website
                default: '#212529', // Default text color
                heading: '#2d465e', // Color for headings, subheadings, and titles
                accent: '#0d83fd', // Brand accent color
                surface: '#ffffff', // Background for boxed elements
                contrast: '#ffffff', // Contrast color
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom right, rgba(13, 131, 253, 0.3), transparent)',
            },
        },

    },
    plugins: [],
};

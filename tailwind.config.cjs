module.exports = {
 darkMode: 'class',
 content: [
 './index.html',
 './src/**/*.{js,jsx,ts,tsx}',
 ],
 theme: {
 extend: {
 colors: {
 primary: {
 DEFAULT: '#6366f1', // Indigo-500
 foreground: '#fff',
 },
 accent: {
 DEFAULT: '#f59e42', // Orange-400
 foreground: '#fff',
 },
 categoryBlue: '#3b82f6',
 categoryGreen: '#10b981',
 categoryPink: '#ec4899',
 background: {
 DEFAULT: '#f8fafc',
 dark: '#18181b',
 },
 card: {
 DEFAULT: '#fff',
 dark: '#232336',
 },
 },
 fontFamily: {
 sans: ['Inter', 'ui-sans-serif', 'system-ui'],
 },
 boxShadow: {
 card: '02px8px0 rgba(60,60,60,0.06)',
 },
 },
 },
 plugins: [require('tailwindcss-animate')],
};
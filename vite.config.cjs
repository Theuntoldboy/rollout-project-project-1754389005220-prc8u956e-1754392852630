const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');

module.exports = defineConfig({
base: '/projects/modern-todo-app/',
plugins: [react()],
resolve: {
alias: {
"@": path.resolve(__dirname, "./src"),
},
},
build: {
minify: 'terser',
terserOptions: {
compress: {
drop_console: true,
},
},
},
server: {
port:5173,
host: true
}
});
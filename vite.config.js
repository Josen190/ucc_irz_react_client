const reactRefresh = require('@vitejs/plugin-react-refresh');
const reactSvgPlugin = require('vite-plugin-react-svg');

module.exports = {
  plugins: [
    reactRefresh(),
    reactSvgPlugin(),
  ],
};
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPWA = require('next-pwa')
 
module.exports = withPWA(withFonts(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  pwa: {
    dest: 'public'
}
  })));
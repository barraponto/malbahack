const {Neutrino} = require('neutrino');
const pkg = require('./package.json');
const api = Neutrino();

pkg.neutrino.use.map(require).map(api.use);

module.exports = api.config.plugin('stylelint').get('args')[0].config;

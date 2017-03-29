const {Neutrino} = require('neutrino');
const package = require('./package.json');
const api = Neutrino();

package.neutrino.use.map(require).map(api.use);

module.exports = api.eslintrc();

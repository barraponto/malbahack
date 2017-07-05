process.env.NODE_ENV = 'development';

const {Neutrino: neutrino} = require('neutrino');
const project = require('./package.json');
const api = neutrino();

project.neutrino.use.map(require).forEach(api.use);
module.exports = api;

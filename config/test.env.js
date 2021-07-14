'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
<<<<<<< HEAD
  NODE_ENV: 'testing'
=======
  NODE_ENV: '"testing"'
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
});

'use strict';

const debug = require('debug')('browl-plugin-settings-config-nginx-adapter')

/**
  * @param {Object} strategy
  */
module.exports = (strategy) => {
  debug('init');

  strategy.getTemplateData = () => {
    return strategy.repoConfig.settingsConfig.config;
  };

  return strategy;
};

'use strict';

const NullStrategy = require('browl-null');
const settingsConfigNginxAdapterPlugin = require('../');

describe('browl-plugin-settings-config-nginx-adapter', () => {
  let repo;
  let rootConfig;
  let repoConfig;

  let strategy;

  beforeEach(() => {
    repo = 'webapp';
    rootConfig = {
      conf_dir: '/etc/browl'
    };
    repoConfig = {};

    strategy = new NullStrategy(repo, rootConfig, repoConfig);
  });

  describe('#getTemplateData', () => {
    it('should return config data', () => {
      const expected = {
        foo: 'bar'
      };

      repoConfig.settingsConfig = {
        config: {
          foo: 'bar'
        }
      };

      settingsConfigNginxAdapterPlugin(strategy);

      const actual = strategy.getTemplateData();

      expect(actual).eql(expected);
    });

    it('should return empty config #1', () => {
      const expected = {};

      repoConfig.settingsConfig = {};

      settingsConfigNginxAdapterPlugin(strategy);

      const actual = strategy.getTemplateData();

      expect(actual).eql(expected);
    });

    it('should return empty config #2', () => {
      const expected = {};

      settingsConfigNginxAdapterPlugin(strategy);

      const actual = strategy.getTemplateData();

      expect(actual).eql(expected);
    });
  });
});

'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-hexo-plugin:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({pluginName: 'foo', pluginDesc: 'bar'});
  });

  describe('creates files', function () {
    it('package.json', function () {
      assert.file('package.json');
    });
    it('.gitignore', function () {
      assert.file('.gitignore');
    });
    it('index.js', function () {
      assert.file('index.js');
    });

    it('README.md', function () {
      assert.file('README.md');
    });
  });
});

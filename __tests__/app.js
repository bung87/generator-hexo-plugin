'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('plugin', () => {
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

    it('travis.yml', function () {
      assert.file('travis.yml');
    });
  });
});
describe('migration', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({pluginType: 'migration', pluginName: 'foo', pluginDesc: 'baz'});
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

    it('migrator.js', function () {
      assert.file('migrator.js');
    });

    it('README.md', function () {
      assert.file('README.md');
    });

    it('travis.yml', function () {
      assert.file('travis.yml');
    });
  });
});

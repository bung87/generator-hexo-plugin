'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

// Const gitconfig = require('git-config');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-hexo-plugin') + ' generator!'
    ));

    var createName = function () {
      return path.basename(process.cwd());
    };

    // Var config = gitconfig.sync();
    const prompts = [
      {
        type: 'list',
        name: 'pluginType',
        choices: ['plugin', 'migrator'],
        default: 'plugin'
      },
      {
        type: 'input',
        name: 'pluginName',
        message: 'name:',
        default: createName(path.basename(process.cwd()))
      },
      {
        type: 'input',
        name: 'pluginDesc',
        message: 'Module description'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );

    if (this.props.pluginType === 'plugin') {
      this.fs.copyTpl(
        this.templatePath('index_plugin.js'),
        this.destinationPath('index.js'),
        this.props
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('index_migrator.js'),
        this.destinationPath('index.js'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('migrator.js'),
        this.destinationPath('migrator.js'),
        this.props
      );
    }

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('travis.yml'),
      this.destinationPath('travis.yml')
    );
  }

  install() {
    this.npmInstall();
  }
};

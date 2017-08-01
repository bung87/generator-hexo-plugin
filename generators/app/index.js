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

    // Var config = gitconfig.sync();
    const prompts = [
      {
        type: 'input',
        name: 'pluginName',
        message: 'hexo plugin name:',
        default: path.basename(process.cwd())
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {pluginName: this.props.pluginName}
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  install() {
    this.npmInstall();
    // This.installDependencies();
  }
};

/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


describe('Lessapp generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.lessapp = helpers.createGenerator('lessapp:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));
  });

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      ['Gruntfile.js', /coffee:/],
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.coffee',
      'app/styles/main.less'
    ];

    helpers.mockPrompt(this.lessapp, {
      features: ['lessBootstrap']
    });

    this.lessapp.coffee = true;
    this.lessapp.options['skip-install'] = true;
    this.lessapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files in non-AMD non-coffee mode', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.js',
      'app/styles/main.less'
    ];

    helpers.mockPrompt(this.lessapp, {
      features: ['lessBootstrap']
    });

    this.lessapp.coffee = false;
    this.lessapp.options['skip-install'] = true;
    this.lessapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files in AMD mode', function (done) {
    var expected= [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.js',
      'app/styles/main.less'
    ];

    helpers.mockPrompt(this.lessapp, {
      features: ['lessBootstrap']
    });

    this.lessapp.options['skip-install'] = true;
    this.lessapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});

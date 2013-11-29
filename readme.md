# Web app generator with LESS

Edited default Yeoman generator for scaffolding out a front-end web app with Twitter Bootstrap in LESS

## Features

* CSS Autoprefixing (new)
* Built-in preview server with LiveReload
* Automagically compile CoffeeScript & LESS
* Automagically lint your scripts
* Automagically wire up your Bower components with [bower-install](https://github.com/stephenplusplus/grunt-bower-install).
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Optional - Twitter Bootstrap 3 (in LESS)
* Optional - Leaner Modernizr builds (new)

For more information on what `generator-webapp` can do for you, take a look at the [Grunt tasks](https://github.com/yeoman/generator-webapp/blob/master/app/templates/_package.json) used in our `package.json`.

## Getting Started

- Make sure you have [yo](https://github.com/yeoman/yo) installed: `npm install -g yo`
- Install: `npm install -g generator-lessapp`
- Run: `yo lessapp`
- Run `grunt` for building and `grunt serve` for preview
- Install: `npm install -g generator-webapp`
- Run: `yo webapp`
- Run `grunt` for building and `grunt serve` for preview

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=<framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Add support for [CoffeeScript](http://coffeescript.org/).

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

Note: We are regularly asked whether we can add or take away features. If a change is good enough to have a positive impact on all users, we are happy to consider it.

If not, `generator-webapp` is fork-friendly and you can always maintain a custom version which you `npm install && npm link` to continue using via `yo webapp` or a name of your choosing.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/robinpokorny/generator-lessapp/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

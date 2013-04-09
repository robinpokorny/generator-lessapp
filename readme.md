# Web app generator with LESS

Edited default Yeoman generator for scaffolding out a front-end web app with Twitter Bootstrap in LESS

## Use

Make sure you have [Yeoman 1.0 beta](http://yeoman.io/) installed, and fully working.

Create a directory to contain your project.
```bash
mkdir myapp && cd myapp
```

Next step is open up the terminal, and add this repository to the node package manager.
```bash
npm install generator-lessapp
```

And initialize the project
```bash
yo lessapp
```

After the inilization run `npm install && bower install` to install the required dependencies for your project.


(Guide inspired by [nickhartjes/generator-phpwebapp](https://github.com/nickhartjes/generator-phpwebapp/))

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for
  another supported testing framework like `jasmine`.


## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

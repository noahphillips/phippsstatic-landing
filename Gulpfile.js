var elixir = require('laravel-elixir');

elixir(function(mix) {

  mix
  .sass(
    'sass/app.scss',
    'public/css/compiled.css', './')

  .browserify(
    './entry.js',
    'public/scripts/compiled.js', './')

  .copy('./images', 'public/images')

  .browserSync({
    open: 'external',
    proxy: 'localhost:11001',
    notify: false,
    logConnections: false,
    reloadOnRestart: false,
    files: ['**/*']
  })
});

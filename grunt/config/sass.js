module.exports = {
  options: {
    bundleExec: true,
    debugInfo: false,
    lineNumbers: false,
    loadPath: 'app/_bower_components'
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.app %>/_scss',
      src: '**/*.{scss,sass}',
      dest: '.tmp/css',
      ext: '.css'
    }]
  },
  server: {
    options: {
      debugInfo: true,
      lineNumbers: true
    },
    files: [{
      expand: true,
      cwd: '<%= paths.app %>/_scss',
      src: '**/*.{scss,sass}',
      dest: '.tmp/css',
      ext: '.css'
    }]
  }
};

module.exports = {
  options: {
    bundleExec: true,
    config: '_config.yml,_config.build.yml',
    src: '<%= constants.appDir %>'
  },
  dist: {
    options: {
      dest: '<%= constants.distDir %>',
    }
  },
  server: {
    options: {
      config: '_config.yml',
      dest: '.jekyll'
    }
  },
  check: {
    options: {
      doctor: true
    }
  }
};

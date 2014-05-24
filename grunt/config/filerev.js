module.exports = {
  options: {
    length: 4
  },
  dist: {
    files: [{
      src: [
        '<%= constants.distDir %>/js/**/*.js',
        '<%= constants.distDir %>/css/**/*.css',
        '<%= constants.distDir %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        '<%= constants.distDir %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
      ]
    }]
  }
};

module.exports = {
  options: {
    length: 4
  },
  dist: {
    files: [{
      src: [
        '<%= paths.dist %>/js/**/*.js',
        '<%= paths.dist %>/css/**/*.css',
        '<%= paths.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        '<%= paths.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
      ]
    }]
  }
};

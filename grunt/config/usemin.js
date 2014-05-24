module.exports = {
  options: {
    assetsDirs: '<%= paths.dist %>',
  },
  html: ['<%= paths.dist %>/**/*.html'],
  css: ['<%= paths.dist %>/css/**/*.css']
};

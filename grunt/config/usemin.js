module.exports = {
  options: {
    assetsDirs: '<%= constants.distDir %>',
  },
  html: ['<%= constants.distDir %>/**/*.html'],
  css: ['<%= constants.distDir %>/css/**/*.css']
};

module.exports = {
  server: [
    'sass:server',
    'copy:stageCss',
    'jekyll:server'
  ],
  dist: [
    'sass:dist',
    'copy:dist'
  ]
};

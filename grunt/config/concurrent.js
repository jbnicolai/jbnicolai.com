module.exports = {
  server: [
    'copy:stageCss',
    'jekyll:server'
  ],
  dist: [
    'copy:dist'
  ]
};

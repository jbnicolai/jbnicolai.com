module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '<%= yeoman.dist %>/*',
        // Running Jekyll also cleans the target directory.  Exclude any
        // non-standard `keep_files` here (e.g., the generated files
        // directory from Jekyll Picture Tag).
        '!<%= yeoman.dist %>/.git*'
      ]
    }]
  },
  server: [
    '.tmp',
    '.jekyll'
  ]
};

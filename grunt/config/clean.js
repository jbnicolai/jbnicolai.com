module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '<%= constants.distDir %>/*',
        // Running Jekyll also cleans the target directory.  Exclude any
        // non-standard `keep_files` here (e.g., the generated files
        // directory from Jekyll Picture Tag).
        '!<%= constants.distDir %>/.git*'
      ]
    }]
  },
  server: [
    '.tmp',
    '.jekyll'
  ]
};

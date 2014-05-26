module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= paths.app %>',
      src: [
        // Jekyll processes and moves HTML and text files.
        // Usemin moves CSS and javascript inside of Usemin blocks.
        'css/**/*',
        // Copy moves asset files and directories.
        'img/**/*',
        'fonts/**/*',
        // Like Jekyll, exclude files & folders prefixed with an underscore.
        '!**/_*{,/**}'
        // Explicitly add any files your site needs for distribution here.
        //'_bower_components/jquery/jquery.js',
        //'favicon.ico',
        //'apple-touch*.png'
      ],
      dest: '<%= paths.dist %>'
    }]
  },
  // Copy CSS into .tmp directory for Autoprefixer processing
  stageCss: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= paths.app %>/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
};

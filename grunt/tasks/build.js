module.exports = function (grunt) {
  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    //'autoprefixer:dist',
    //'cssmin',
    //'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin',
    'favicons'
    ]);
};

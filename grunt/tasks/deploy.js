module.exports = function (grunt) {
  grunt.registerTask('deploy', [
    'check',
    'build',
    'buildcontrol'
    ]);
};

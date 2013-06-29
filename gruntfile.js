'use strict';
module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: ".",
    buildDir: ".",

    watch: {
      jsx: {
        files: ['<%= srcDir %>/*.jsx'],
        tasks: ['jsx:release']
      },
    },

    jsx: {
      release: {
        src: '<%= srcDir %>/game.jsx',
        dest: '<%= srcDir %>/game.jsx.js',
        "add-search-path": [],
        executable: "web",
        release: true,
      },
      dev: {
        src: '<%= srcDir %>/game.jsx',
        dest: '<%= srcDir %>/game.jsx.js',
        "add-search-path": [],
        executable: "web",
      },
    },
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:release']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:

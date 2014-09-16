'use strict'

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-semantic-release')

  grunt.initConfig({
    release: {
      name: 'excellenteasybot',
      email: 'info@excellenteasy'
    }
  })
}

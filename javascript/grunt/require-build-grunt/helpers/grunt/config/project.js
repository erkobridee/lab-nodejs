module.exports = {

  paths: {
    src: './src',
    build: './temp',
    dist: './dist'
  },
  
  require: {
    name: 'ng.app',
    config: '<%= project.paths.src %>/require.config.js',
    build: '<%= project.paths.build %>/require.build.config.js'
  }

};
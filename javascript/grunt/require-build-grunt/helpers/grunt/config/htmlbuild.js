module.exports = {

  dist: {
    src: '<%= app.paths.src %>/index.html',
    dest: '<%= app.paths.dist %>/',
    options: {
      beautify: true,
      scripts: {
        bundle: [
          '<%= app.paths.dist %>/app.min.js'
        ],
        vendors: [
'<%= app.paths.dist %>/vendor/require.js/2.1.9/require.min.js'/*,
'<%= app.paths.dist %>/vendor/jquery/1.10.2/jquery.min.js',
'<%= app.paths.dist %>/vendor/bootstrap/3.0.2/js/bootstrap.min.js',
'<%= app.paths.dist %>/vendor/angular.js/1.2.1/angular.min.js',
'<%= app.paths.dist %>/vendor/angular.js/1.2.1/angular-route.min.js',
'<%= app.paths.dist %>/vendor/angular.js/1.2.1/angular-resource.min.js',
'<%= app.paths.dist %>/vendor/angular.js/1.2.1/angular-animate.min.js',
'<%= app.paths.dist %>/vendor/toaster/0.3.0/toaster.js',
'<%= app.paths.dist %>/vendor/ngProgress/1.0.3/ngProgress.min.js',
'<%= app.paths.dist %>/vendor/angular.js/1.2.1/angular-mocks.js',
'<%= app.paths.dist %>/vendor/angular-mocks-backend/0.1.3/angular-mocks-backend.js',
'<%= app.paths.dist %>/vendor/lokijs/0.0.1/lokijs.min.js'*/
        ]
      }
    }
  }

};
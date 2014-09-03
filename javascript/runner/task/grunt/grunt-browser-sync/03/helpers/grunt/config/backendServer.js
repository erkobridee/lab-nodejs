module.exports = {

  toStart: {

    port: '<%= project.backend.port %>',

    server: require(process.cwd() + '/backend/app.js')

  }

};

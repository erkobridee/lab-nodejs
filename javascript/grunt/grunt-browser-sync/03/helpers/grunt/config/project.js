module.exports = {

  paths: {
    src: './frontend'
  },

  backend: {

    port: 9000,

    proxies: [
      {
        context: '/rest',
        host: 'localhost',
        port: '<%= project.backend.port %>',

        // https://github.com/drewzboto/grunt-connect-proxy#proxy-configuration
        xforward: false
      }
    ]
  }

};

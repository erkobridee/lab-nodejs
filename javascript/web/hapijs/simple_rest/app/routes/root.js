module.exports = function( server ) {

  server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
      var indexText = '<pre>' + [
        'hapi.js index',
        '',
        'try:',
        '  /rest/bookmarks/           [GET]',
        '  /rest/bookmarks/           [POST]',
        '  /rest/bookmarks/{id}       [PUT]',
        '  /rest/bookmarks/{id}       [DELETE]',
      ].join('\n') + '</pre>';

     reply(indexText);
    }
  });

};

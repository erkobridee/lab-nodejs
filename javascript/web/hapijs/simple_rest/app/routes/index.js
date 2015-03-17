module.exports = function( server ) {

  require('./root')( server );
  require('./bookmarks')( server );

};

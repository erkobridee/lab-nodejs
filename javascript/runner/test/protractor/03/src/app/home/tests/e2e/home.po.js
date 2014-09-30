// Page object
module.exports = {

  get: function() {
    return browser.get('/');
  },

  pageName: element(by.binding('pageName'))

};

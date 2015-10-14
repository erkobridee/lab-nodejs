// Page object
module.exports = {

  get: function() {
    return browser.get('#/github');
  },

  loginInput: element(by.model('login')),

  notFound: {
    message: element(by.binding('notFound.message'))
  },

  user: {
    // get first 'user.login' binding
    login: element.all(by.binding('user.login')).get(0),
    type: element(by.binding('user.type'))
  }

};

// Page object
module.exports = {

  get: function() {
    return browser.get('#/dep1');
  },

  value: element(by.binding('value')),

  sum: element(by.binding('sum(123,321)')),

  messageInput: element(by.model('message')),

  toExciteMsg: element(by.binding('toExciteMsg(message)')),

  toQuestionMsg: element(by.binding('toQuestionMsg(message)')),

  messageReverse: element.all(by.binding('message | reverse')).get(0),

  messageReverseUpper: element.all(by.binding('message | reverse')).get(1)

};

function escapeContent(content, quoteChar, indentString) {

  var bsRegexp = new RegExp('\\\\', 'g');
  var quoteRegexp = new RegExp('\\' + quoteChar, 'g');
  var nlReplace = '\\n' + quoteChar + ' +\n' + indentString + indentString + quoteChar;

  return content
    .replace(bsRegexp, '\\\\')
    .replace(quoteRegexp, '\\' + quoteChar)
    .replace(/\r?\n/g, nlReplace);

}

//---

module.exports = escapeContent;

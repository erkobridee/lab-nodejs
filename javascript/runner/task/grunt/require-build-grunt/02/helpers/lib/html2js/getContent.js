var escapeContent = require('escapeContent'),
    minify        = require('html-minifier').minify,
    Q             = require('q'),
    fs            = require('q-io/fs');

// return template content
function getContent(filepath, options) {

  return fs
    .read(filePath)
    .then(function(content) {

      if (Object.keys(options.htmlmin).length) {
        try {
          content = minify(content, options.htmlmin);
        } catch (err) {

          // TODO: review
          console.log(filepath + '\n' + err);

        }
      }

      // trim leading whitespace
      content = content.replace(/(^\s*)/g, '');

      return escapeContent(content, options.quoteChar, options.indentString);

    });

}

//---

module.exports = getContent;

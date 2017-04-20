/*

[StackOverflow] Can you create JavaScript regexes on the fly using string variables?
https://stackoverflow.com/questions/4371565/can-you-create-javascript-regexes-on-the-fly-using-string-variables


JavaScript: How to generate a regular expression from a string
http://makandracards.com/makandra/15879-javascript-how-to-generate-a-regular-expression-from-a-string

*/

RegExp.escape = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

function buildRegexp(string) {
  return new RegExp(RegExp.escape(string));
}

console.log( buildRegexp( 'makandra.com' ) );

console.log( buildRegexp( 'apirest/resurce' ) );

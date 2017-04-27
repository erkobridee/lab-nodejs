// load styles
require('./index.scss');

//---

var showTime = require('./time/show-time');
var doCalc = require('./math/do-calc');
var assetsImageLoader = require('./image/assets-loader');
var lazyImageLoader = require('./image/lazy-loader');

//---

showTime.render();
doCalc.render();
assetsImageLoader.render();
lazyImageLoader.render();

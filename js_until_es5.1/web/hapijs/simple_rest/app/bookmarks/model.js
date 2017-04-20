module.exports = (function() {

  var db = require('./storage');

  var ClassDef = function BookmarksModel() {};

  ClassDef.list = function(opts, cb) {
    var result = {
      data: [],
      count: 0,
      page: 1,
      pages: 1
    };

    var bookmarks = [];

    db.bookmarks.forEach(function(bookmark, i) {
      bookmarks.push({
        id:i,
        name: bookmark.name,
        description: bookmark.description,
        url: bookmark.url
      });
    });

    //---
    var bookmarksPage = [];
    var i, count, length, limit, flag;

    if(opts.page <= 0) opts.page = 1;

    count = 0;
    length = bookmarks.length;
    i = ((opts.page-1) * opts.size);
    limit = opts.size;

    if(i < length) {
      flag = true;
    } else {
      flag = false;
    }

    while(flag) {

      bookmarksPage.push(bookmarks[i]);

      i++; count++

      if(i<length && count<limit) {
        flag = true;
      } else {
        flag = false;
      }
    }

    result.count = length;
    result.data = bookmarksPage;
    result.page = opts.page;
    result.pages = Math.ceil(length / opts.size);
    //---

    cb(null, result);
  };

  ClassDef.find = function(id, cb) {
    var vo = "Not Found";

    if(id >= 0 && id < db.bookmarks.length) {
      vo = db.bookmarks[id];
      vo.id = id;
    }

    cb(null, vo);
  };

  ClassDef.insert = function(vo, cb) {
    db.bookmarks.push(vo);

    cb(null, vo);
  };

  ClassDef.update = function(id, vo, cb) {
    var flag = true;

    if(id >= 0 && id < db.bookmarks.length) {
      db.bookmarks[id] = vo;
    } else {
      flag = false;
    }

    cb(null, flag);
  };

  ClassDef.remove = function(id, cb) {
    var flag = true;

      if(id >= 0 && id < db.bookmarks.length) {
        db.bookmarks.splice(id, 1);
      } else {
        flag = false;
      }

      cb(null, flag);
  };

  return ClassDef;

})();

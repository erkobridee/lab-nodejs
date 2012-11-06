// 03_mongooseTest_2docRef.js

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
;

// author schema definition
var AuthorSchema = new Schema({
  name: {type: String, required: true},
  country: {type: String},
  createAt: {type: Date, default: Date.now}
});

// define author model in mongoose using author schema
mongoose.model('Author', AuthorSchema);

//--- category schema definition
var CategorySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String}
});

//--- define category model in mongoose using category schema
mongoose.model('Category', CategorySchema);

//--- book schema definition
var BookSchema = new Schema({
  category: {type: ObjectId, ref: 'Category'},
  author: {type: ObjectId, ref: 'Author'},
  name: {type: String, required: true},
  value: {type: Number, default: 0},
  createAt: {type: Date, default: Date.now}
});

//--- define book model in mongoose using book schema
mongoose.model('Book', BookSchema);

// handler events
mongoose.connection.on('open', execute);
mongoose.connection.on('error', errorEventHandler);

//--- connect to mongodb
mongoose.connect('mongodb://localhost/nodetest');

//-------------------------------------------------

function errorEventHandler(error) {
  console.log(error);
};

function endExecution() {
  mongoose.connection.removeListener('open', execute);
  mongoose.connection.removeListener('error', errorEventHandler);
  mongoose.connection.close();
};

//-------------------------------------------------

function countDocs(Model, next) {
  console.log('count books');

  ProductModel.count().exec(function(err, count) {
    if(err) console.log(err);
    else console.log('count: ' + count);

    next();
  });
};

function listAllDocs(Model, next) {
  console.log('list all books');

  Model
    .find({})
    .populate('category', 'name')
    .populate('author', 'name') 
    .exec(function(err, docs) {
    if(err) console.log(err);
    else console.log(docs);

    next();
  });
};

//-------------------------------------------------

function checkDocsOnDB(Model, next) {
  //countDocs(Model, next);
  listAllDocs(Model, next);
};

//-------------------------------------------------

function execute() {
  console.log('let\'s play');

  var Book = mongoose.model('Book')
    , Category = mongoose.model('Category')
    , Author = mongoose.model('Author')
    , async = require('async')
  ;

  async.series({
    insert: function(next) {

      async.waterfall([
        function(goNext) {
          var author = new Author();
          author.name = 'Erko Bridee';
          author.country = 'Brazil';

          author.save(function(err, doc) {
            if(err) console.log(err);
            else console.log(doc);

            goNext(null, doc);
          });
        },
        // insert category
        function(author, goNext) {
          var category = new Category();
          category.name = 'Tech';
          category.description = 'Development';

          category.save(function(err, doc) {
            if(err) console.log(err);
            else console.log(doc);

            goNext(null, author, doc);
          });
        },
        // insert product
        function(author, category, goNext) {
          var book = new Book();
          if(author) book.author = author;
          if(category) book.category = category;

          var randomValue = Math.ceil(Math.random() * 100);

          book.name = 'Node.js Mongoose Tests : ' + randomValue;
          book.value = randomValue;

          book.save(function(err, doc) {
            if(err) console.log(err);
            else console.log(doc);

            goNext();
          });
        },
        // end
        function(goNext) { next(); }
      ]);

    },
    check1: function(next) { checkDocsOnDB(Book, next); },
    update: function(next) {
      Book
        .find({})
        .limit(1)
        .exec(function(err, books) {
          if(err) console.log(err);

          var book = books[0];
          console.log(book.value);
          var newValue = Math.ceil(book.value * 2);
          console.log(newValue);

          Book.update(
            { _id: book._id }, 
            { $set: { 
              value: newValue
            }}, 
            function(err, doc) {
              if(err) console.log(err);
              
              next();
            }
          );

        });
    },
    check2: function(next) { checkDocsOnDB(Book, next); },
    end: function(next) {
      console.log('end');
      endExecution();
    }
  });

};
// 02_mongooseTest_docRef.js

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
;

//--- category schema definition
var CategorySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String}
});

//--- define category model in mongoose using category schema
mongoose.model('Category', CategorySchema);

//--- product schema definition
var ProductSchema = new Schema({
  category: {type: ObjectId, ref: 'Category'},
  name: {type: String, required: true},
  value: {type: Number, default: 0},
  when: {type: Date, default: Date.now}
});

//--- define product model in mongoose using product schema
mongoose.model('Product', ProductSchema);

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

function countProducts(ProductModel, next) {
  console.log('count products');

  ProductModel.count().exec(function(err, count) {
    if(err) console.log(err);
    else console.log('count: ' + count);

    next();
  });
};

function listAllProducts(ProductModel, next) {
  console.log('list all products');

  ProductModel
    .find()
    .populate('category') 
    .exec(function(err, docs) {
    if(err) console.log(err);
    else console.log(docs);

    next();
  });
};

//-------------------------------------------------

function checkProductsOnDB(ProductModel, next) {
  //countProducts(ProductModel, next);
  listAllProducts(ProductModel, next);
};

//-------------------------------------------------

function execute() {
  console.log('let\'s play');

  var Product = mongoose.model('Product')
    , Category = mongoose.model('Category')
    , async = require('async')
  ;

  async.series({
    insert: function(next) {

      async.waterfall([
        // insert category
        function(goNext) {
          var category = new Category();
          category.name = 'Refrigerante';
          category.description = 'Produto líquido';

          category.save(function(err, doc) {
            if(err) console.log(err);
            else console.log(doc);

            goNext(null, doc);
          });
        },
        // insert product
        function(category, goNext) {
          var product = new Product();
          if(category) product.category = category;
          product.name = 'Coca-Cola';
          product.value = 2;

          product.save(function(err, doc) {
            if(err) console.log(err);
            else console.log(doc);

            goNext();
          });
        },
        // end
        function(goNext) { next(); }
      ]);

    },
    check: function(next) { checkProductsOnDB(Product, next); },
    end: function(next) {
      console.log('end');
      endExecution();
    }
  });

};

// 01_mongooseTest_Schema.js

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
;

//--- product schema definition
var ProductSchema = new Schema({
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
mongoose.connect('mongodb://localhost/node-test');

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

  ProductModel.find({}, function(err, docs) {
    if(err) console.log(err);
    else console.log(docs);

    next();
  });
};

//-------------------------------------------------

function checkProductsOnDB(ProductModel, next) {
  countProducts(ProductModel, next);
};

//-------------------------------------------------

function execute() {
  console.log('let\'s play');

  var Product = mongoose.model('Product')
    , async = require('async')
  ;

  async.series({
    insert: function(next) { 
      console.log('insert product');

      var product = new Product()
        , rValue = (Math.random() * 100)
      ;

      product.name = 'Product Name from Mongoose : ' + rValue;
      product.value = rValue;

      product.save(function(err, doc) {
        if(err) console.log(err);
        else console.log(doc);
        
        next();
      });
    },
    check1: function(next) { checkProductsOnDB(Product, next); },
    update: function(next) {

      async.waterfall([
        // find last inserted
        function(doNext) {
          console.log('find last inserted');

          Product
            .find({})
            .sort('-when')
            .limit(1)
            .exec(function(err, doc) {
              if(err) console.log(err);
              else {
                console.log(doc);
                doNext(null, doc);
              }
            });
        },
        // update
        function(toUpdate, doNext) {
          // Mongoose DOCs - Documents
          // http://mongoosejs.com/docs/documents.html
          console.log('update');

          Product.update(
            { _id: toUpdate._id }, 
            { $set: { 
              name: 'UPDATED ' + toUpdate.name,
              value: (Math.random() * 1000),
              when: new Date()
            }}, 
            function(err, doc) {
              if(err) console.log(err);
              
              doNext();
            }
          );         
        },
        // end
        function(doNext) {
          next();
        }  
      ]);

    },
    check2: function(next) { checkProductsOnDB(Product, next); },
    remove: function(next) {
      console.log('remove oldest product');

      Product
        .find({})
        .sort('when')
        .limit(1)
        .findOneAndRemove(function(err, doc) {
          if(err) console.log(err);
          else console.log(doc);

          next();
        });

    },
    check3: function(next) { checkProductsOnDB(Product, next); },
    end: function(next) { 
      console.log('end');
      endExecution(); 
    }
  });

};



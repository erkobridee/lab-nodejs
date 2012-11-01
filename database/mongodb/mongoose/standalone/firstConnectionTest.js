// firstConnectionTest.js

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

function execute() {
  console.log('let\'s play');

  var ProductClass = mongoose.model('Product')
    , product = new ProductClass()
  ;

  product.name = 'Product Name from Mongoose';
  product.value = (Math.random() * 100);

  product.save(function(error, doc) {
    if(error) {
      console.log(error);
    } else { 
      console.log(doc);
    }

    endExecution();
  });

};


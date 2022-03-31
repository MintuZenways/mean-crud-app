var mongoose = require('mongoose');

module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        name: String,
        brand: String,
        model: String,
        price: Number,
        quantity: Number
    }
);

schema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;
    return object;

});

var product = mongoose.model("Product", schema);
return product;
}


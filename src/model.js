const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const BearSchema   = new Schema({
    name: String,
    type:String,
    quantity:Number,
    note:String
});

module.exports = mongoose.model('Bear', BearSchema);
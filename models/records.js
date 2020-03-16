const mongoose =  require ('mongoose');


const recordSchema = new mongoose.Schema({
    title:String,
    artist:String,
    year:String,
    img:String,
    price:String

})


var recordModel = mongoose.model('recordModel',recordSchema);
module.exports = recordModel
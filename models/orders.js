const mongoose =  require ('mongoose');


const orderSchema = new mongoose.Schema({
    quantity:Number,
    recordId:Number

})


var orderModel = mongoose.model('orderModel',orderSchema);
module.exports = orderModel
const orderModel = require('../models/orders');


exports.getOrders = (req, res, next) => {
    const orders = orderModel.find()
    orders
    .then(data => res.send(data))
}

exports.getOrder = (req, res, next) => {
    const { id } = req.params;
    const order = orderModel.find({ _id :  id });
    order
    .then(data => res.send(data))
}

exports.deleteOrder = (req, res, next) => {
    const { id } = req.params;
    const order = orderModel.remove({ _id : id })
    order
    .then(data => res.send(data))
}

exports.updateOrder = (req, res, next) => {
    const { id } = req.params;
    const dt = req.body;
    const order = orderModel.findByIdAndUpdate(id,dt,{new : true})
    order
    .then(data => res.send(data))
}

exports.addOrder = (req, res, next) => {
    const {
          quantity,
          recordId
        } = req.body;

    const post = new orderModel({ quantity,recordId})
 
    post
    .save()
    .then(data => res.send(data))
}
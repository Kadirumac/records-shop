const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const userModel = require('../models/users');


exports.getUsers = (req, res, next) => {
    const users = userModel.find()
    users
    .then(data => res.send(data))
}

exports.getUser = (req, res, next) => {
    const { id } = req.params;
    const user = userModel.find({ _id : id });
    user
    .then(data => res.send(data))
}

exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    const user = userModel.remove({ _id : id })
    user
    .then(data => res.send(data))
}

exports.updateUser = (req, res, next) => {
    const { id } = req.params;
    const dt = req.body;
    const user = userModel.findByIdAndUpdate(id,dt,{new:true})
    user
    .then(data => res.send(data))

}

exports.addUser = (req, res, next) => {
    const {   username,
        email,
       pass,
       id} = req.body;

       const postUser = new userModel({username,email,pass,id})
       postUser
       .save()
       .then(data => res.status(200).send(data))


}
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const recordModel = require('../models/records');



exports.getRecords = (req, res, next) => {

    const records = recordModel.find()
    records
    .then(data => res.send(data))
    
}

exports.getRecord = (req, res, next) => {
    const { id } = req.params;
 
    const record = recordModel.findOne({ _id : id })
    record
    .then(data => {res.json(data)})
    .catch(err => {
        res.json(err);
      });
}

exports.deleteRecord = (req, res, next) => {
    const { id } = req.params;
    const record = recordModel.remove({ _id : id });
    record
    .then(data => res.send(data))
}

exports.updateRecord = (req, res, next) => {
    const { id } = req.params;
    const dt = req.body;
    const record = recordModel.findByIdAndUpdate(id,dt,{new:true})
    record
  
    .then(data => res.send(data))
}

exports.addRecord = (req, res, next) => {
    const {   
        title,        
        artist,
        year,
        img,
        price} = req.body;

    const post = new recordModel({
         title,        
        artist,
        year,
        img,
        price})

        post 
        .save()
        .then(data => {res.json(data)})
        .catch(err => {
            res.json(err);
          });
}
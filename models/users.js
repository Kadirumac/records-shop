const mongoose =  require ('mongoose');


const userSchema = new mongoose.Schema({
   username: String,
    email: String,
   pass: String,
   id: String
})


var userModel = mongoose.model('userModel',userSchema);
module.exports = userModel
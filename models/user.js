const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})

//to add sald hashing password and username (which is added by passport local mongoose)
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);
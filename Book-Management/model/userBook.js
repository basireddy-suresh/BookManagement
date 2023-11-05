const mongoose = require('mongoose');

const userBookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});

const UserBookData = mongoose.model('UserBookData',userBookSchema);
module.exports = UserBookData;
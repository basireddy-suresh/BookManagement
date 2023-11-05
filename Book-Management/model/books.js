const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
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

const BooksData = mongoose.model('BooksData',booksSchema);
module.exports = BooksData;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://suresh51:3251@cluster0.hop7jwb.mongodb.net/');
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('MongoDB connection failed.');
})

db.once('open',function(){
    console.log('MongoDB connected successfully.');
})

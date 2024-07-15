const mongoose = require('mongoose');

const mongooseUrl = 'mongodb://localhost:27017/Data';

mongoose.connect(mongooseUrl).then(()=>{
    console.log('database connected')
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('database connected!');
});

db.on('error', (err)=>{
    console.log('Error in db connection ' + err.message);
});

db.on('disconnected', ()=>{
    console.log("database disconnected!");
});

module.exports = db;
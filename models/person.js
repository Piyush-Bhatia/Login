const mongoose = require('mongoose');
const {Schema} = mongoose;

const personalDetails = new Schema({
    id : Number,
    name : String,
    age : Number,
    status: String,
    measurementInfo: {
        type: String,
        enum: ['weight', 'height']
    }
});

const person = mongoose.model("person",personalDetails);


module.exports = person;
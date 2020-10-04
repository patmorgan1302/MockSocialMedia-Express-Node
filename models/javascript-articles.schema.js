const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const javascript_schema = new Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
         required: true
    },
    body : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    }
});

const jsSchema = mongoose.model('javascript_schema', javascript_schema);
module.exports = jsSchema;
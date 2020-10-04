const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student_schema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
         required: true
    },
    rollno : {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('student_schema', student_schema);
module.exports = Student;
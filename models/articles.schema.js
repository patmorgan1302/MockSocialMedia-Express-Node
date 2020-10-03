const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article_schema = new Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
         required: true
    },
    body : {
        type: Boolean,
        required: true
    }
});

const Article = mongoose.model('article_schema', article_schema);
module.exports = Article;
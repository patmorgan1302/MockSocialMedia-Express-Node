const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const node_article_schema = new Schema({
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

const nodeArticle = mongoose.model('nodeArticle_schema', node_article_schema);
module.exports = nodeArticle;
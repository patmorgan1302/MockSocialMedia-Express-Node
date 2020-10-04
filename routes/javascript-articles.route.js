let express = require('express');
let router = express.Router();
const JS = require('../models/javascript-articles.schema');


router.put('/:id', function(req, res, next) {
    console.log(req.body);
    JS.update({_id: req.params.id}, req.body, function (err, data){ 
        if (err){
            return res.json({err: 414, message: 'Article PUT HTTP Fail'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    JS.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 424, message: 'Article POST HTTP Fail'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    JS.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return res.json({err: 434, message: 'Article DELETE HTTP Fail'})
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    JS.find({}, function (err, data){ 
        if (err){
            return res.json({err: 444, message: 'Article GET HTTP Fail'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    JS.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 454, message: 'Article GET HTTP Fail'})
        }
   res.json(data)
})})

    
module.exports = router;
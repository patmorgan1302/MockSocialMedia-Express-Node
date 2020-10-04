require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config/config');
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

let article_route = require('./routes/article.route');
let node_route = require('./routes/node-articles.route');
let student_route = require('./routes/student.route');
let js_route = require('./routes/javascript-articles.route');

//THIS IS WHERE YOU ARE CREATING A MONGOOSE CONNECTION STRING
const connection_string = config.database.buildConnectionString();
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology : true })
  .then(()=>{
    console.log('Database connection succesful.');
  })
  .catch((error)=> {
    console.log('An error occured connecting to the database. ', error);
  });


  // THIS IS THE SERVER SETUP, THIS IS REQUIRED!!
let app = express();
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//NOTE: API Routers set to intercept requests of middleware
app.use('/', indexRouter);
app.use('/articles', article_route);
app.use('/nodearticles', node_route);
app.use('/students', student_route);
app.use('/jsarticles', js_route);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

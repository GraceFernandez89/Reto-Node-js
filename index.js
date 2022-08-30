require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./config')
const db = require('./config')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
const connectDb = require('./db/mongodb')
const errorHandlers = require('./middlewares/error-handler');
const indexRouter = require('./routes/index');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));
app.use(errorHandlers.errorHandler);
app.use('/',indexRouter);
connectDb(db)
app.listen(config.app.port,()=>console.log(`listen on ${config.app.port}`));

module.exports = app;



const express = require('express');
const indexRouter = require('./Routes/index');
const path = require('path');
const db = require('./db/db');
const app = express();
const fs = require('fs');
const log = require('./middleware/log');
const person = require("./models/person");
const personRouter = require('./Routes/personCRUD')

fs.writeFileSync('./newLog.txt', 'The visitors log');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', log, indexRouter);
app.use('/person', personRouter);


app.listen(3001, ()=>{
    console.log('Server Started!');
});
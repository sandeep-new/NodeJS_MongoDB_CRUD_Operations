const express = require('express');
const bodyParser = require('body-parser');

const company = require('./routes/company.route'); 
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://127.0.0.1:27017/WowmediaCompany';

const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/company', company);

let port = 1234;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
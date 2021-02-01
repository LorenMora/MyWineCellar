//imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures variables in dotenv file
require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

// middleware and parse json
app.use(cors());
app.use(express.json());

//uri from mongoDB atlas where our database is stored
const uri = encodeURI(process.env.ATLAS_URI);

//start connection to database
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

//once the connection is open do this
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//importing the schema files
const winesRouter = require('./routes/wine');
const usersRouter = require('./routes/users');

//load router for http requests
app.use('/wines', winesRouter);
app.use('/users', usersRouter);

//starts the server on port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

 
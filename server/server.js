const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//  Middleware for the application
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection for storing data
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/AfroGroove', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//  Middleware for the application
app.use(cors());
app.use(bodyParser.json());

const songRoutes = require('./routes/songs');

//Use routes
app.use('/api/songs', songRoutes);

// MongoDB connection for storing data
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/AfroGroove')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log('Server running on port 5000');
});



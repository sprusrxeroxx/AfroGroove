const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    lyrics:{
        type: String,
        required: true
    },
    audioUrl:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('Song', songSchema);

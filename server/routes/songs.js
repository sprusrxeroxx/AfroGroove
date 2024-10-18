const express = require('express');
const router = express.Router();
const Song = require('../models/song');

//Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        console.log('Found songs:', songs); //Display all songs
        res.json(songs);
    } catch (err) {
        console.log('Error fetching songs:', err);
        res.status(500).json({ message: err.message});
    }
});

// Get single song
router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json( { message: 'Song not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// router.post('/', async (req, res) => {
//     const song = new Song({
//         title: req.body.title,
//         artist: req.body.artist,
//         lyrics: req.body.lyrics,
//         audioUrl: req.body.audioUrl,
//         duration: req.body.duration
//     })

//     try {
//         const newSong = await song.save();
//         res.status(201).json(newSong);
//     } catch (err) {
//         res.status(400).json({ message: err.message});
//     }
// });

module.exports = router;
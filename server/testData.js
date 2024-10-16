const mongoose = require('mongoose');
const Song = require('./models/song');

const testSongs = [
    {
        title: "Wonderwall",
        artist: "Oasis",
        lyrics: "Today is gonna be the day\nThat they're gonna throw it back to you\nBy now you should've somehow\nRealized what you goatta do",
        audioUrl: "https://example.com/wonderwall.mp3",
        duration: 258
    },
    {
        title: "Sweet Caroline",
        artist: "Neil Diamond",
        lyrics: "Today is gonna be the day\nThat they're gonna throw it back to you\nBy now you should've somehow\nRealized what you goatta do",
        audioUrl: "https://example.com/sweet-caroline.mp3",
        duration: 201
    }
];

//Connection to MongoDB
mongoose.connect('mongodb://localhost/AfroGroove')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Inserting test data
const seedDatabase = async () => {
    try {
        await Song.deleteMany({}); //Clears existing songs
        console.log('Cleared existing songs');
            
            //Insert new songs
        const insertedSongs = await Song.insertMany(testSongs);
        console.log('Test data inserted successfully:', insertedSongs);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close(); // Closes the session
    }
};

seedDatabase();
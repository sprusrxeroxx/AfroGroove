import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SongList() {
        const [songs, setSongs] = useState([]);

        useEffect(() => {
            const fetchSongs = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/songs');
                    setSongs(response.data)
                } catch (error) {
                    console.error('Error fetching songs:', error);
                }
            };
        fetchSongs();
    }, []);

    return (
        <div className='song-list'>
            <h2>Available Songs</h2>
            <ul>
                {songs.map(song => (
                    <li key={song._id}>
                        <Link to={'/play/${song._id}'}>
                            {song.title} - {song.artist}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongList;

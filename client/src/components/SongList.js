import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SongList() {
        const [songs, setSongs] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);



        useEffect(() => {
            const fetchSongs = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get('http://localhost:5000/api/songs');
                    console.log('API Response:', response.data);
                    setSongs(response.data);
                    setError(null);
                } catch (error) {
                    console.error('Error fetching songs:', error);
                    setError('Failed to load songs, Please try again later.');
                } finally {
                    setLoading(false);
                }
            };
        fetchSongs();
    }, []);

    if (loading) {
        return <div>Loading songs...</div>;
    }

    if (error) {
        return <div className='error-message'>{error}</div>;
    }

    return (
        <div className='song-list'>
            <h2>Available Songs</h2>
            {songs.length === 0 ? (
                <p>No songs available. Add some songs to get started!</p>
            ) : (
                <ul>
                    {songs.map(song => (
                        <li key={song._id}>
                            <Link to={'/play/${song._id}'}>
                                {song.title} - {song.artist}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SongList;

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

function KaraokePlayer() {
    const [song, setSong] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/songs/${id}');
                setSong(response.data);
            } catch (error) {
                console.error('Error fetching song:', error);
            }
        };
        fetchSong();
    }, [id]);
}

if (!song) return <div>Loading...</div>;

return (
    <div className='AfroGroove'>
        <h2>{song.title}</h2>
        <h3>{song.artist}</h3>
        <audio controls src={song.audioUrl}></audio>
        <div className='lyrics'>
            <pre>{song.lyrics}</pre>
        </div>
    </div>
);

export default KaraokePlayer;
import React, { useState } from 'react';
import axios from 'axios';
import { ClassNames } from '@emotion/react';

function AddSong() {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        lyrics: '',
        audioUrl: '',
        duration: 0
    });
    const [status, setStatus] = useState({ type: '', message: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get.post('http://localhost:5000/api/songs', formData);
            setStatus({ type: 'success', message: 'Song added successfully!'});
            setFormData({
                title: '',
                artist: '',
                lyrics: '',
                audioUrl: '',
                duration: 0
            });
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to add song. Please try again.' });
        }
    };

    return (
        <div className="add-song-form">
            <h2>Add New Song</h2>
            {status.message && (
                <div className={'status-message ${status.type}'}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Lyrics:</label>
                    <textarea 
                        name="lyrics"
                        value={formData.lyrics}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Audio:</label>
                    <textarea
                        type='url'
                        name="audioUrl"
                        value={formData.audioUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Duration (seconds):</label>
                    <textarea 
                        type='number'
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Add Song</button>
            </form>
        </div>
    );
}

export default AddSong;
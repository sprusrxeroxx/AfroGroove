import React, { useState } from 'react';
import axios from 'axios';
import { ClassNames } from '@emotion/react';
import {
    Box,
    VStack,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
} from '@chakra-ui/react'
import { Form } from 'react-router-dom';

function AddSong() {
    const toast = useToast();
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
                await axios.post('http://localhost:5000/api/songs', formData);
                toast({ 
                        title: 'Success', 
                        description: 'Song added successfully!',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                setFormData({
                    title: '',
                    artist: '',
                    lyrics: '',
                    audioUrl: '',
                    duration: 0
                });
            } catch (error) {
                toast({ 
                    title: 'Error',
                    description: 'Failed to add song. Please try again.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        };

        return (
            <Box maxW='container.md' mx='auto'>
                <Heading mb={6}>Add New Song</Heading>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Title:</FormLabel>
                            <input 
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </FormControl>
                    
                        <FormControl isRequired>
                            <FormLabel>Artist:</FormLabel>
                            <input 
                                name='artist'
                                value={formData.artist}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Lyrics</FormLabel>
                            <Textarea 
                                name='lyrics'
                                value={formData.lyrics}
                                onChange={handleChange}
                                rows={6}
                            />
                        </FormControl>
                    
                        <FormControl isRequired>
                            <FormLabel>Audio URL</FormLabel>
                            <input 
                                name='audioUrl'
                                value={formData.audioUrl}
                                onChange={handleChange}
                                type='url'
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Duration (seconds)</FormLabel>
                            <input 
                                name='duration'
                                value={formData.duration}
                                onChange={handleChange}
                                type='number'
                            />
                        </FormControl>

                    <Button type='submit' colorScheme='blue' size='1g' w='full'>
                        Add Song
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}

export default AddSong;
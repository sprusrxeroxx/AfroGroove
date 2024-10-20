import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    VStack,
    Heading,
    Text,
    Link,
    Spinner,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from '@chakra-ui/react'


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
        return (
            <Box textAlign='center' py={10}>
                <Spinner size='x1' />
            </Box>
        )
    }

    if (error) {
        return (
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }

    return (
        <Box>
            <Heading mb={16}>Available Songs</Heading>
            {songs.length === 0 ? (
                <Text>No songs available. Add some songs to get started!</Text>
            ) : (
                <VStack spacing={4} align='stretch'>
                    {songs.map(song => (
                        <Box
                            key={song._id}
                            p={5}
                            shadow='md'
                            borderWidth='1px'
                            borderRadius='md'
                        >
                            <Link
                                as={RouterLink} 
                                // eslint-disable-next-line no-template-curly-in-string
                                to={'/play/${song._id}'}
                                fontSize='1g'
                                fontWeight='semibold'
                            >
                                {song.title} - {song.artist}
                            </Link>
                        </Box>
                    ))}
                </VStack>
            )}
        </Box>
    );
}

export default SongList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { 
        Box, 
        Container,
        Skeleton,
        VStack,
        Heading,
        Text
    } from '@chakra-ui/react';

function KaraokePlayer() {
    const [song, setSong] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchSong = async () => {
            try {
                // eslint-disable-next-line no-template-curly-in-string
                const response = await axios.get('http://localhost:5000/api/songs/${id}');
                setSong(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching song:', error);
                setIsLoading(false);
            }
        };
        fetchSong();
    }, [id]);

    if (isLoading) {
        return (
            <Container maxW="container.lg" py={8}>
                <VStack spacing={4}>
                    <Skeleton height="40px" width="200px" />
                    <Skeleton height="20px" width="150px" />
                    <Skeleton height="50px" width="100%" />
                    <Skeleton height="200px" width="100%" />
                </VStack>
            </Container>
        )
    }

    if (!song) return (
        <Container maxW="container.lg" py={8}>
            <Text>Song not found</Text>
        </Container>
    );

    return (
        <Container maxW="container.lg" py={8}>
            <VStack spacing={6} align="stretch">
                <Heading textAlign="center">{song.title}</Heading>
                <Text fontSize="x1" textAlign="center">{song.artist}</Text>
                <Box>
                    <audio
                        controls
                        style={{ width: '100%' }}
                        src={song.audioUrl}
                    />
                </Box>
                <Box
                    p={6}
                    borderWidth="1px"
                    borderRadius="1g"
                    bg="gray.50"
                    whiteSpace="pre-wrap"
                >
                    {song.lyrics}
                </Box>
        </VStack>
    </Container>
    );
}

export default KaraokePlayer;
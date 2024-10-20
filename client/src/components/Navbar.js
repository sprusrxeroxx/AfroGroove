import React from 'react';
import { Link, Box, Flex, Heading, textDecoration, useColorModeValue, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Heading size='md'>
                <Link as={RouterLink} to='/' _hover={{ textDecoration: 'blue' }}>
                AfroGroove App
                </Link>
                </Heading>
                <Stack direction={'row'} spacing={7}>
                    <Link as={RouterLink} to='/' px={2}>
                        Songs
                    </Link>
                    <Link as={RouterLink} to='/add' px={2}>
                        Add Song
                    </Link>
                </Stack>
            </Flex>
        </Box>
    );
}

export default Navbar;
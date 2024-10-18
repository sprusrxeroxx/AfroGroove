import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Box bg="teal.500" px={4} py={3}>
            <Flex maxW="1200px" mx="auto" alignItems="center">
                <Link to="/">
                    <Heading size="md" color="white">AfroGroove</Heading>
                </Link>
                <Spacer />
            </Flex>
        </Box>
    );
}
export default Navbar;
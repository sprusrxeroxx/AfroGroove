import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import AddSong from './components/AddSong';
import KaraokePlayer from './components/KaraokePlayer';
import { Switch } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box minH='100vh'>
        <Navbar />
        <Container maxW='container.xl' py={8}>
        <Switch>
          <Routes>
            <Route path="/" element={<SongList />} />
            <Route path="/add" element={<AddSong />} />
            <Route path="/play/:id" element={<KaraokePlayer />} />
          </Routes>
        </Switch>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

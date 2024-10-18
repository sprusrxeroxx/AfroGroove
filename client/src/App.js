import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import SongList from './components/SongList';
// import KaraokePlayer from './components/KaraokePlayer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <Routes>
          <Route path='/' element={<SongList />}></Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;

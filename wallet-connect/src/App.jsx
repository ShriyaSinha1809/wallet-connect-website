import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Loading from '../src/Pages/Loading/Loading'; // Ensure this path is correct
import Trade from '../src/Pages/Swap/Trade'; // Import the new Trade page
import GameFooter from './components/GameFooter'; // Make sure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
      <GameFooter /> {/* Include the GameFooter component */}
    </Router>
  );
};

export default App;


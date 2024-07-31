import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Loading from '../src/Pages/Loading/Loading';
import Trade from '../src/Pages/Swap/Trade';
import Buy from '../src/Pages/Buy/Buy'; // Make sure to import the Buy component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/buy" element={<Buy />} /> {/* Add this line for the Buy page */}
        {/* You can add more Route components here for other URLs */}
      </Routes>
    </Router>
  );
};

export default App;

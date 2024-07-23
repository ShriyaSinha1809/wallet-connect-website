import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Loading from '../src/Pages/Loading/Loading'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        {/* You can add more Route components here for other URLs */}
      </Routes>
    </Router>
  );
};

export default App;

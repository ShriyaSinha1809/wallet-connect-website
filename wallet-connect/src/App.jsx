import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more Route components here for other URLs */}
      </Routes>
    </Router>
  );
};

export default App;

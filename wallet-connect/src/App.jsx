// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Loading from './Pages/Loading/Loading';
import Trade from './Pages/Swap/Trade';
import Buy from './Pages/Buy/Buy'; // Make sure to import the Buy component
import Logo from './components/Logo'; // Import the Logo component
import Blog from './Pages/Blog/Blog';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/buy" element={<Buy />} /> {/* Add this line for the Buy page */}
        <Route path="/blog" element={<Blog />} /> {/* Add your blog page route here */}
        {/* You can add more Route components here for other URLs */}
      </Routes>
      <Logo /> {/* Add the Logo component here */}
    </Router>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import ShowDetails from './components/ShowDeatails/ShowDetails';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/shows/:id" element={<ShowDetails/>} />
    </Routes>
    // <>
    //   <Home />
    // </>
  );
};

export default App;

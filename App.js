import React from 'react';

import HomePage from "./AllPages/HomePage";
import WhoAreWe from "./AllPages/WhoAreWe";
import Pictures from "./AllPages/Pictures";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path='*' element={<HomePage/>}/>
          <Route path='HomePage/WhoAreWe' element={<WhoAreWe/>}/>
          <Route path='HomePage/Pictures' element={<Pictures/>}/>

        </Routes>
      </div>
    </Router>
  );
}
export default App;
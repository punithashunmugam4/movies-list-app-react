import React from 'react';
import './App.css';
import Header from './components/Header';
import Seats from './components/Seats';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book-ticket' element={<Seats/>}/>
      <Route path='/customer-details' element={<Details/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

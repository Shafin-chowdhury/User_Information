import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import UsersDetails from './pages/UsersDetails';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/Users/:id' 
      element={<UsersDetails />}/>
      </Routes>
      
    </Router>
  </div>
};

export default App;

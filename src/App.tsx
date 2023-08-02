import React from 'react';
import './App.css';
import Login from './components/form/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PageWaiters from './components/pages/waiter/PageWaiters';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/mesero' element={<PageWaiters />}></Route>
        </Routes>
      </Router>


      {/* <PageWaiters /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './components/form/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PageWaiters from './components/pages/waiter/PageWaiters';
import PageAdmin from './components/pages/waiter/PageAdmin';
import PageChef from './components/pages/waiter/PageChef';
import Registered from './components/pages/waiter/Registered';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/mesero' element={<PageWaiters />} />
          <Route path='/orders' element={<PageAdmin />} />
          <Route path='/chef' element={<PageChef />} />
          <Route path='/register' element={<Registered />} />
        </Routes>
      </Router>


      {/* <PageWaiters /> */}
    </div>
  );
}

export default App;

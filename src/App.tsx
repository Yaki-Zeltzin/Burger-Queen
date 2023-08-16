import React from 'react';
import './App.css';
import Login from './components/form/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PageWaiters from './components/pages/waiter/PageWaiters';
import PageAdmin from './components/pages/waiter/PageAdmin';
import PageChef from './components/pages/waiter/PageChef';
import RegisterStaff from './components/pages/waiter/RegisterStaff';
import Workers from './components/pages/waiter/Workers';
import Products from './components/pages/waiter/Products';
import AddProduct from './components/pages/waiter/AddProduct';
import DeleteProduct from './components/pages/waiter/DeleteProduct';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/mesero' element={<PageWaiters />} />
          <Route path='/orders' element={<PageAdmin />} />
          <Route path='/chef' element={<PageChef />} />
          <Route path='/registerStaff' element={<RegisterStaff />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/products" element={<Products />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="deleteproduct" element={<DeleteProduct />} />
        </Routes>
      </Router>


      {/* <PageWaiters /> */}
    </div>
  );
}

export default App;

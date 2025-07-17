import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data);    
      console.log(response.data);
        
    });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />}></Route>
      <Route path='/checkout' element={<CheckoutPage cart={cart} />}>
      </Route>
      <Route path="/orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App

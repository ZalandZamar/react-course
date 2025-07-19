import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { HomePage } from './pages/home/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './pages/orders/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />}></Route>
      <Route path='/checkout' element={<CheckoutPage cart={cart} />}>
      </Route>
      <Route path="/orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />

      <Route path='*' element={<NotFound cart={cart} />}></Route>
    </Routes>
  );
}

export default App

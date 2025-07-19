import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrdersPage.css'
import { Header } from '../../components/header.jsx';
import { OrdersGrid } from './OrdersGrid.jsx';

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    
    fetchOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/png" href="orders-favicon.png" />
      <title>Orders</title>
      
      <Header cart={cart} />
      
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
          <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
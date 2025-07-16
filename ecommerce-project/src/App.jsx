import { Routes } from 'react-router';
import { Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/checkout' element={<CheckoutPage />}></Route>
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App

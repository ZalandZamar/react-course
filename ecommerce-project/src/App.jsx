import { Routes } from 'react-router';
import { Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckoutPage />}></Route>
    </Routes>
    
  );
}

export default App

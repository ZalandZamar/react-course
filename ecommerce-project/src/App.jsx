import { Routes } from 'react-router';
import { Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='checkout' element={<div>testing</div>}></Route>
    </Routes>
    
  );
}

export default App

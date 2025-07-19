import { NavLink } from 'react-router';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
//import { Link } from 'react-router';
import './header.css';

export function Header({ cart }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchText = searchParams.get('search');

  const [search, setSearch] = useState(searchText || '');

  let totalQuantity = 0;

  cart.forEach(cartItem => {
    totalQuantity += cartItem.quantity;
  });

  const updateSearchInput = (event) => {
    setSearch(event.target.value);
  }

  const searchProducts = () => {
    console.log(search);
    navigate(`/?search=${search}`);
    if (search.trim()) {
    navigate(`/?search=${encodeURIComponent(search.trim())}`);
  }
  }

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src="images/logo-white.png" />
            <img className="mobile-logo"
              src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" value={search} onChange={updateSearchInput} />

          <button className="search-button" onClick={searchProducts}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">

            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
import axios from "axios";
import { useState } from "react";
import './cartItemDetails.css';
import { formatMoney } from "../../utils/money.js";

export function CartItemsDetails({ cartItem, loadCart }) {
  const [isQuantityUpdated, setIsQuantityUpdated] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  const updateQuantity = async () => {
    if (isQuantityUpdated) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity)
      });
      await loadCart();
      setIsQuantityUpdated(false);
    } else {
      setIsQuantityUpdated(true);
    }
  }

  const updateQuantityInput = (event) => {
    setQuantity(Number(event.target.value));
  }

  const updateQuantityKey = (event) => {
    if (event.key === 'Enter') {
      updateQuantity();
    } else if(event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsQuantityUpdated(false);
    }
  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            {
              isQuantityUpdated ? <input type="text" className="quantity-input" value={quantity} onChange={updateQuantityInput} onKeyDown={updateQuantityKey} /> :
                <span className="quantity-label">{cartItem.quantity}</span>
            }
          </span>
          <span className="update-quantity-link link-primary" onClick={updateQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
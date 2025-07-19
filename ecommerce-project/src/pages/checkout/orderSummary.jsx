import { DeliveryOptions } from "./DelievryOptions.jsx";
import { CartItemsDetails } from "./CartItemDetails.jsx";
import { DeliveryDate } from "./DelieryDate.jsx";

export function OrderSummary({ deliveryOptions, cart, loadCart }) {
  return (
    <div className="order-summary">
      {
        deliveryOptions.length > 0 && cart.map(cartItem => {
          const selectedDeliveryOption = deliveryOptions.find(deliveryOption => {
            return deliveryOption.id === cartItem.deliveryOptionId
          });

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemsDetails cartItem={cartItem} loadCart={loadCart} />

                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
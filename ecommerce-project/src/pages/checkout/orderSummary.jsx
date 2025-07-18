import { DeliveryOptions } from "./DelievryOptions.jsx";
import { CartItemsDetails } from "./CartItemDetails.jsx";
import { DeliveryDate } from "./DelieryDate.jsx";

export function OrderSummary({ deliveryOptions, cart }) {
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
                <CartItemsDetails cartItem={cartItem} />

                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
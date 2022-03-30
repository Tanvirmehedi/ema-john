import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Review from "../Review/Review";

const Orders = () => {
  const [products, setproducts] = useProduct();
  const [cart, setCart] = useCart(products);

  const handelRemoveItem = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="order-container">
          {cart.map((item) => (
            <Review
              handelRemoveItem={handelRemoveItem}
              key={item.id}
              item={item}
            ></Review>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/">
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;

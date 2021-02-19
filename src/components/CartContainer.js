import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
//note that connect and provider are the two things from react-redux here 
import { CLEAR_CART, GET_TOTALS } from '../actions';

const CartContainer = ({ cart = [], total, tax, actualTotal, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS})
  })
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Subtotal <span>${total}</span>
          </h4>
          <h4>
            tax <span>${tax}</span>
          </h4>
          <h4>
            total <span>${actualTotal}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch({ type: CLEAR_CART })}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, total, tax, actualTotal } = state;
  return { cart, total, tax, actualTotal }
}
export default connect(mapStateToProps)(CartContainer);

import React, { useState } from 'react';
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import Products from './Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
  const [items, setItems] = useState(Products);

  const increaseAmount = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseAmount = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = items.reduce((total, curItem) => {
    const priceValue = parseFloat(curItem.price.replace('$', ''));
    return total + priceValue * curItem.amount;
  }, 0);

  return (
    <div>
      <header>
        <div className='continue-shopping'>
        
          <h2>Shopping site</h2>
        </div>
        <div className='cart-icon'>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <p>{items.length}</p>
        </div>
      </header>

      <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'>
          you have<span className='total-items-count'> {items.length} </span>items in your cart
        </p>

        <div className='cart-items'>
          <div className='cart-items-container'>
            <Scrollbars>
              {items.map((curItem) => (
                <Item
                  key={curItem.id}
                  {...curItem}
                  increaseAmount={increaseAmount}
                  decreaseAmount={decreaseAmount}
                  removeItem={removeItem} // Pass the removeItem function
                />
              ))}
            </Scrollbars>
          </div>
        </div>

        <div className='card-total'>
          <h3>Cart Total: <span>{totalPrice}$</span></h3>
          <button>Checkout</button>
        </div>
      </section>
    </div>
  );
}

export default Cart;

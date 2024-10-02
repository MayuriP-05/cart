import React from 'react';
import { AddCircleOutline, Close, Remove } from '@mui/icons-material';

const Item = ({ id, description, title, img, price, amount, increaseAmount, decreaseAmount, removeItem }) => {
  return (
    <div>
      <div className='item-info'>
        <div className='product-img'>
          <img src={img} height={150} width={130} alt='cart' />
        </div>
        <div className='title'>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
        <div className='add-minus-quantity'>
          <AddCircleOutline onClick={() => increaseAmount(id)} />
          <input type="text" value={amount} readOnly />
          <Remove onClick={() => decreaseAmount(id)} />
        </div>
        <div className='price'>
          <h3>{price}</h3>
        </div>
        <div className='remove_item'>
          <Close onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Item;

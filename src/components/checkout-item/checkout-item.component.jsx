import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem : { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove'>&#10005;</div>
  </div>
);

// const mapStateToProps = createStructuredSelector();

// export default connect(mapStateToProps)(CheckoutItem);
export default CheckoutItem;
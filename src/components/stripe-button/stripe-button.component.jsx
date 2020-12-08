import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_51Hw8QSCyWFc1Y9OvcjqNXQIlOo9qRtUE10PNHLdtKOi2MTGIbuPWTZYqSGwaiYTln42dYjE45M2BHPfh38BslCsn00h3xcqx1j';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!')
  } 

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
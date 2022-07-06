import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axiosInstance from './../../../axios/axiosInstance';
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

// const CheckoutForm = () => {
// const stripe = useStripe();
// const elements = useElements();
//   return (
//     <form >
//       <PaymentElement  />
//       <button type="submit">
//         Pay
//       </button>
//     </form>
//   );
// };
const FinalStep = () => {
  const [clientSecret, setClientSecret] = React.useState(false)
  
  React.useEffect(() => {
    if (!clientSecret)
    {
      axiosInstance.post("/checkout", {
        id: 1,
        type: "normal",
      }).then(data => { console.log(data.data); setClientSecret(data.data) })
      .catch(data => { console.log(data.data);});
      }
  },[])

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={clientSecret}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default FinalStep;

const CheckoutForm = () => {
 
}
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFormStripe from './CheckoutFormStripe';
import SSL_Payment from './SSL_Payment';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const stripe_promise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
   const [paymentOption, setPaymentOption] = useState('Stripe');
   const [searchParams] = useSearchParams();
   useEffect(() => {
      const status = searchParams.get('status');
      if (status === 'failed' || status === 'cancel') {
         Swal.fire({
            position: 'center',
            icon: 'error',
            title: `Payment Failed!`,
            text: 'Something went wrong!',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#C48C3A',
            background: '#fff',
            color: '#000',
            iconColor: '#FF0000',
            customClass: {
               popup: 'rounded-lg shadow-lg',
               title: 'text-lg font-semibold',
               text: 'text-md',
            },
         });
      }
   }, []);
   return (
      <section className=" px-2 md:px-5 lg:px-0">
         <Helmet>
            <title>Bistro Boss | Payment</title>
         </Helmet>
         <div className="my-52">
            <div>
               <h2 className="uppercase text-center mb-8 text-3xl px-2">
                  Payment
               </h2>
               <div>
                  {/* Select a payment option */}
                  <div className="max-w-2xl mx-auto mb-5">
                     <div>
                        <legend className="fieldset-legend mb-0.5">
                           Payment with
                        </legend>
                        <select
                           onChange={(e) => setPaymentOption(e.target.value)}
                           defaultValue="default"
                           className="select rounded-lg bg-[#f9fafb] border"
                        >
                           <option value="Stripe">Stripe</option>
                           <option value="SSLCOMMERZ">SSL COMMERZE</option>
                        </select>
                     </div>
                  </div>
                  {/* Stripe payment */}
                  {paymentOption === 'Stripe' && (
                     <Elements stripe={stripe_promise}>
                        <CheckoutFormStripe />
                     </Elements>
                  )}
                  {paymentOption === 'SSLCOMMERZ' && <SSL_Payment />}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Payment;

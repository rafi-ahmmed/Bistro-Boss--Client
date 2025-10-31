import toast from 'react-hot-toast';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCart from '../../../../Hooks/useCart';

const SSL_Payment = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const { cart } = useCart();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const payment = {
         email: user?.email,
         cartIds: cart.map((item) => item?._id),
         menuItemIds: cart.map((item) => item?.menuId),
         date: new Date(),
         status: 'pending',
      };

      try {
         const { data } = await axiosSecure.post(
            '/create-ssl-payment',
            payment
         );
         console.log(data);
         if (data.gatewayPageURL) {
            window.location.replace(data.gatewayPageURL);
         }
      } catch (err) {
         console.log(err);
         toast.error(err.message || 'Something went wrong');
      }
   };
   return (
      <div className="max-w-2xl mx-auto mt-10 border border-slate-200 bg-[#f9fafb] rounded-lg shadow-md p-8">
         {/* Heading */}
         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
            SSLCOMMERZ PAYMENT
         </h2>

         <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <legend className="fieldset-legend">E-mail</legend>
            <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                     className="w-4 h-4 text-gray-500"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 16"
                  >
                     <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                     <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
               </div>
               <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             block w-full ps-10 p-3.5 focus:ring-blue-500 focus:border-blue-500"
                  value={user?.email}
                  readOnly
                  disabled
               />
            </div>

            <button
               className="btn btn-wide bg-[#635bff] text-white mt-3 block mx-auto"
               type="submit"
               disabled={cart.length === 0}
            >
               Pay
            </button>
         </form>
      </div>
   );
};

export default SSL_Payment;

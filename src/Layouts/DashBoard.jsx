import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FaCalendarDays, FaBarsStaggered, FaList } from 'react-icons/fa6';
import { IoWalletSharp, IoCartSharp } from 'react-icons/io5';
import { MdReviews } from 'react-icons/md';
import { HiCalendarDays } from 'react-icons/hi2';
import { FaBars, FaUsers } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { TfiMenuAlt } from 'react-icons/tfi';
import { GiWhiteBook } from 'react-icons/gi';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Components/Spinner';
import useAuth from '../Hooks/useAuth';

const DashBoard = () => {
   const { user } = useAuth();
   const activeLinkStyle = ({ isActive }) =>
      isActive
         ? 'text-white bg-[#18181B] text-base font-medium'
         : 'text-[#151515] text-base font-medium';

   const { isAdmin, isPending, isError } = useAdmin();

   return (
      <div className=" font-inter">
         <div className="drawer lg:drawer-open">
            {isPending || isError ? (
               <>
                  <div className="flex justify-center items-center">
                     <Spinner />
                  </div>
               </>
            ) : (
               <>
                  <input
                     id="my-drawer-2"
                     type="checkbox"
                     className="drawer-toggle"
                  />
                  <div className="drawer-content bg-[#F6F6F6] min-h-screen">
                     <div className="sticky top-0">
                        {/* Page content here */}
                        <label
                           htmlFor="my-drawer-2"
                           className="btn btn-square bg-transparent border-none drawer-button lg:hidden"
                        >
                           <FaBars className="text-2xl text-[#D1A054]" />
                        </label>
                     </div>
                     {/* Outlet hear */}
                     <div>
                        <Outlet></Outlet>
                     </div>
                  </div>
                  <div className="drawer-side z-50 lg:z-0">
                     <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                     ></label>
                     <ul className="menu bg-[#D1A054] font-cinzel text-base-content min-h-full w-7/12 md:w-80 lg:w-80 lg:px-5 py-8">
                        {/* Sidebar content here */}

                        <p className="pl-2.5">
                           <NavLink
                              to={'/'}
                              className=" text-[#151515]  font-semibold md:font-bold lg:font-black text-lg md:text-lg lg:text-xl "
                           >
                              BISTRO BOSS
                           </NavLink>
                        </p>
                        <p className="pl-2.5  text-[#151515] lg:block font-semibold text-sm md:text-base lg:text-lg tracking-widest  mb-10">
                           RESTAURANT
                        </p>

                        {/* NavLinks */}

                        {isAdmin ? (
                           // Admin Links
                           <>
                              <li className="uppercase">
                                 <NavLink
                                    to={'/dashboard/adminHome'}
                                    className={activeLinkStyle}
                                 >
                                    <HiHome className="text-xl lg:text-2xl" />{' '}
                                    Admin Home
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/addItems'}
                                    className={activeLinkStyle}
                                 >
                                    <ImSpoonKnife className="text-xl lg:text-2xl" />
                                    add items
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    className={activeLinkStyle}
                                    to={'/dashboard/manageItems'}
                                 >
                                    <TfiMenuAlt className="text-xl lg:text-xl" />{' '}
                                    Manage items
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/cart'}
                                    className={activeLinkStyle}
                                 >
                                    <GiWhiteBook className="text-2xl lg:text-2xl" />
                                    Manage bookings
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    className={
                                       'text-[#151515] text-base font-medium '
                                    }
                                 >
                                    <MdReviews className="text-2xl lg:text-2xl" />{' '}
                                    add review
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/users'}
                                    className={activeLinkStyle}
                                 >
                                    <FaUsers className="text-2xl lg:text-2xl" />{' '}
                                    all users
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/payment'}
                                    className={activeLinkStyle}
                                 >
                                    <FaCalendarDays className="text-xl lg:text-xl" />{' '}
                                    Payment
                                 </NavLink>
                              </li>
                           </>
                        ) : (
                           // Users Links
                           <>
                              <li className="uppercase">
                                 <NavLink
                                    to={'/dashboard/userHome'}
                                    className={activeLinkStyle}
                                 >
                                    <HiHome className="text-xl lg:text-2xl" />{' '}
                                    User Home
                                 </NavLink>
                              </li>
                              
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/paymentHistory'}
                                    className={activeLinkStyle}
                                 >
                                    <IoWalletSharp className="text-xl lg:text-xl" />{' '}
                                    payment history
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    to={'/dashboard/cart'}
                                    className={activeLinkStyle}
                                 >
                                    <IoCartSharp className="text-2xl lg:text-2xl" />{' '}
                                    my cart
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    className={
                                       'text-[#151515] text-base font-medium '
                                    }
                                 >
                                    <MdReviews className="text-2xl lg:text-2xl" />{' '}
                                    add review
                                 </NavLink>
                              </li>
                              <li className="mt-2 lg:mt-3 uppercase">
                                 <NavLink
                                    className={
                                       'text-[#151515] text-base font-medium '
                                    }
                                 >
                                    <HiCalendarDays className="text-2xl lg:text-2xl" />{' '}
                                    my booking
                                 </NavLink>
                              </li>
                           </>
                        )}

                        {/* Shared Links */}
                        <hr className="my-8 font-extrabold  text-white" />
                        {/* <div className="divider my-8 bg-white"></div> */}

                        <li className="uppercase">
                           <NavLink to={'/'} className={activeLinkStyle}>
                              <HiHome className="text-xl lg:text-2xl" />
                              Home
                           </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-3 uppercase">
                           <NavLink to={'/menu'} className={activeLinkStyle}>
                              <FaList className="text-xl lg:text-xl" /> menu
                           </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-3 uppercase">
                           <NavLink to={'/order'} className={activeLinkStyle}>
                              <GiShoppingBag className="text-xl lg:text-xl" />{' '}
                              shop
                           </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-3 uppercase">
                           <NavLink to={'/contact'} className={activeLinkStyle}>
                              <MdEmail className="text-xl lg:text-2xl" />{' '}
                              contact
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default DashBoard;

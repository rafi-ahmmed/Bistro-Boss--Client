import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMenu from '../../Hooks/useMenu';
import ItemCard from '../../Components/ItemCard';
import { useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';
import axios from 'axios';
import { Button } from '@mui/material';
import Spinner from '../../Components/Spinner';
const tabStyles = {
   textTransform: 'uppercase',
   fontWeight: 700,
   fontSize: '16px',
   color: '#000',
   '&.Mui-selected': {
      color: '#D99904',
   },
   '&.Mui-selected::after': {
      content: '""',
      display: 'block',
      marginTop: '4px',
      width: '100%',
      height: '3px',
      backgroundColor: '#D99904',
   },
};

const TabMenu = ({ category }) => {
   const [loding, setLodding] = useState(true);
   const [categoryMenu, setCategoryMenu] = useState([]);
   const [value, setValue] = useState(category || 'salad');

   const [totalCount, setTotalCount] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const totalPage = Math.ceil(totalCount / 6);

   const buttonCount = [];
   for (let i = 1; i <= totalPage; i++) {
      buttonCount.push(i);
   }

   useEffect(() => {
      setCurrentPage(1);
   }, [value]);

   useEffect(() => {
      getCategoryData();
   }, [value, currentPage]);

   const getCategoryData = async () => {
      const { data } = await axios.get(
         `${import.meta.env.VITE_URL}/menu/category/${value}?page=${currentPage - 1}&limit=6`
      );
      setLodding(false);
      setCategoryMenu(data);
   };

   useEffect(() => {
      getTotalCount();
   }, [value]);
   const getTotalCount = async () => {
      const { data } = await axios.get(
         `${import.meta.env.VITE_URL}/totalMenuCount/${value}`
      );
      setTotalCount(data?.count);
   };

   useEffect(() => {
      if (category) {
         setValue(category);
         setCurrentPage(1);
      } else {
         setValue('salad');
         setCurrentPage(1);
      }
   }, [category]);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%' }}>
         <div className="flex justify-center items-center">
            <Tabs
               value={value}
               onChange={handleChange}
               textColor="inherit"
               TabIndicatorProps={{ style: { display: 'none' } }}
               variant="scrollable"
               scrollButtons="auto"
               allowScrollButtonsMobile
            >
               <Tab label="Salad" value="salad" sx={tabStyles} />
               <Tab label="Pizza" value="pizza" sx={tabStyles} />
               <Tab label="Soups" value="soup" sx={tabStyles} />
               <Tab label="Desserts" value="dessert" sx={tabStyles} />
               <Tab label="Drinks" value="drinks" sx={tabStyles} />
            </Tabs>
         </div>
         <div className="max-w-7xl mx-auto">
            {loding && (
               <div className="flex justify-center items-center">
                  <Spinner />
               </div>
            )}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center justify-items-center gap-5 px-3.5 md:px-0 lg:px-0">
               {categoryMenu.map((foodItem) => (
                  <ItemCard key={foodItem._id} foodItem={foodItem} />
               ))}
            </div>

            <div className="mt-10 flex justify-center items-center gap-4">
               {/* Previous Button */}
               <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="btn btn-circle bg-[#D1A054] border-2 border-[#414143] hover:bg-[#D8DADC] hover:border-[#D8DADC] disabled:border-[#D8DADC]"
               >
                  <MdArrowBack className="text-xl text-black" />
               </button>
               <div className="space-x-4">
                  {buttonCount.map((button) => (
                     <button
                        key={button}
                        onClick={() => setCurrentPage(button)}
                        className={`btn btn-sm btn-circle text-shadow-black ${currentPage === button ? 'bg-[#008000]' : ''}`}
                     >
                        {button}
                     </button>
                  ))}
               </div>
               {/* Next Button */}
               <button
                  disabled={currentPage === totalPage}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="btn btn-circle bg-[#D1A054] border-2 border-[#414143] hover:bg-[#D8DADC] hover:border-[#D8DADC] disabled:border-[#D8DADC]"
               >
                  <MdArrowForward className="text-xl text-black" />
               </button>
            </div>
         </div>
      </Box>
   );
};

export default TabMenu;

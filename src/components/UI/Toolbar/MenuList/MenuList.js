import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { DropDownIcon } from '../../Icons/Icons';

const MenuList = ({ title, links }) => {
   const [openMenuList, setOpenMenuList] = useState(false);

   const onLinkClickHandler = (event) => {
      setOpenMenuList(false);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   //  create menu links
   const menuLinks = links.map((link, index) => (
      <NavLink
         key={index}
         exact
         to={link.path}
         onClick={onLinkClickHandler}
         activeClassName='text-white font-semibold 
                          bg-gray-600 rounded px-2 mb-1'
         className='font-semibold text-right px-2 mb-1
                    hover:bg-gray-500 hover:text-white 
                    rounded-lg cursor-pointer'>
         {link.title}
      </NavLink>
   ));

   const onMenuOpenHandler = (event) => {
      event.preventDefault();
      setOpenMenuList((prev) => !prev);
      document.addEventListener('keydown', onKeyDownHandler);
   };

   const onMenuListCloseHandler = () => {
      setOpenMenuList(false);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         setOpenMenuList(false);
         document.removeEventListener('keydown', onKeyDownHandler);
      }
   };

   return (
      <div className='relative'>
         <a
            href='/'
            onClick={onMenuOpenHandler}
            onKeyUp={(e) => {
               // space = 32
               if (e.which === 32) {
                  // prevent space click the button
                  e.preventDefault();
               }
            }}
            className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1  h-8'>
            <div className='flex flex-row justify-center items-center'>
               <DropDownIcon />
               <span>{title}</span>
            </div>
         </a>

         {openMenuList ? (
            <button
               onClick={onMenuListCloseHandler}
               className='fixed inset-0 h-full w-full cursor-default'
               tabIndex='-1'></button>
         ) : null}

         <div
            className={
               openMenuList
                  ? `absolute flex flex-col bg-gray-200 w-40 p-1 right-0 
                     shadow-xl z-10 rounded-lg`
                  : 'hidden'
            }>
            {/* <ul>{menuLinks}</ul> */}
            {menuLinks}
         </div>
      </div>
   );
};

export default MenuList;

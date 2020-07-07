import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuIcon, XIcon } from '../../components/Icons/Icons';
import logo from '../../assets/br7_logo.png';

const Toolbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const onMenuClickHandler = () => {
      setMenuOpen((prevValue) => !prevValue);
   };

   return (
      <div className='mb-2'>
         <header className='px-4 bg-gray-800 sm:flex sm:justify-between'>
            <div
               className='flex 
                          justify-between
                          items-center
                          py-2'>
               <img className='' src={logo} alt='logo' />

               <div className='sm:hidden'>
                  <button
                     onClick={onMenuClickHandler}
                     type='button'
                     className='block text-gray-500 
                                   hover:text-white 
                                   focus:text-white focus:outline-none'>
                     {menuOpen ? <XIcon /> : <MenuIcon />}
                  </button>
               </div>
            </div>

            <div className={menuOpen ? 'py-2 block sm:hidden' : 'hidden'}>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1'>
                  component 1
               </a>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1 mt-1'>
                  component 2
               </a>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1 mt-1'>
                  component 3
               </a>
            </div>

            <div
               className={
                  'hidden px-2 py-2 sm:flex sm:flex-row sm:justify-center items-center'
               }>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1'>
                  component 1
               </a>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1'>
                  component 2
               </a>
               <a
                  href={'/'}
                  className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1'>
                  component 3
               </a>

               <NavLink
                  activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1'
                  exact
                  to='/'>
                  ראשי
               </NavLink>
            </div>
         </header>
      </div>
   );
};

export default Toolbar;

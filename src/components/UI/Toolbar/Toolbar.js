import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/br7_logo.png';
import { MenuIcon, XIcon } from '../Icons/Icons';
import MenuList from './MenuList/MenuList';

const linksData = [
   { title: 'ראשי', path: '/' },
   { title: 'Test 1', path: '/test1' },
   { title: 'טבלה', path: '/table' },
];

const Toolbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const onMenuClickHandler = () => {
      setMenuOpen((prevValue) => !prevValue);
   };

   return (
      <header className='px-4 bg-gray-800 sm:flex sm:justify-between'>
         <div
            className='flex justify-between
                       items-center  py-2'>
            <img className='' src={logo} alt='logo' />

            <div className='sm:hidden'>
               <button
                  onClick={onMenuClickHandler}
                  type='button'
                  className='block text-gray-500 
                             hover:text-white 
                             focus:text-white
                             focus:outline-none'>
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
            <MenuList title={'פעולות'} links={linksData} />
            <NavLink
               className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1  h-8'
               activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1  h-8'
               exact
               to='/ordersTable'>
               הזמנות
            </NavLink>
            <NavLink
               className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1  h-8'
               activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1  h-8'
               exact
               to='/tableWithPagination'>
               טבלה 2
            </NavLink>
            <NavLink
               className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1  h-8'
               activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1  h-8'
               exact
               to='/table'>
               טבלה
            </NavLink>
            <NavLink
               className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1  h-8'
               activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1  h-8'
               exact
               to='/test1'>
               Test 1
            </NavLink>

            <NavLink
               className='block text-white font-semibold hover:bg-gray-600 rounded px-2 py-1 h-8'
               activeClassName='text-white font-semibold bg-gray-600 rounded px-2 py-1  h-8'
               exact
               to='/'>
               ראשי
            </NavLink>
         </div>
      </header>
   );
};

export default Toolbar;

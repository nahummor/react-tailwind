import React, { useState } from 'react';

import './styles/app.css';
import Card from './components/Card/Card';
import ImageCard from './components/ImageCard/ImageCard';
import {
   CameraIcon,
   EditPencilIcon,
   MenuIcon,
   XIcon,
} from './components/Icons/Icons';
import logo from './assets/br7_logo.png';
import DropList from './components/DropList/DropList';

function App() {
   const [menuOpen, setMenuOpen] = useState(false);

   const onClickHandler = (event) => {
      console.log('Button Clicked... id: ', event.target.id);
      console.log('Button Clicked... innerText: ', event.target.innerText);
   };

   const onMenuClickHandler = () => {
      setMenuOpen((prevValue) => !prevValue);
   };

   const onListValueChange = (value) => {
      console.log('List value: ', value);
   };

   return (
      <div className='flex flex-col'>
         <div className='mb-2'>
            <header className='px-4 bg-gray-800 sm:flex sm:justify-between'>
               <div
                  className='flex 
                             justify-between
                             items-center
                             py-2'>
                  <div>
                     <img className='' src={logo} alt='logo' />
                  </div>

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
               </div>
            </header>
         </div>
         <div
            dir='rtl'
            className='flex flex-col justify-around  
                    items-center bg-gray-100 sm:flex-row'>
            <Card title='Main Title' subtitle='sub title'>
               <div className='flex flex-col'>
                  <button
                     id='btn-1'
                     onClick={onClickHandler}
                     className='bg-facebook-blue hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md'>
                     Button 1
                  </button>

                  <button
                     id='btn-2'
                     onClick={onClickHandler}
                     className='bg-ios-green hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md'>
                     Button 2
                  </button>

                  <button
                     id='btn-3'
                     onClick={onClickHandler}
                     className='app-button'>
                     <div className='flex flex-row justify-center items-center'>
                        <EditPencilIcon />
                        <span className='mx-2'> Button 3</span>
                     </div>
                  </button>
               </div>
            </Card>

            <Card title='פרטי עובד' subtitle='add new data'>
               <label className='form-label' htmlFor='firstName'>
                  שם פרטי
               </label>
               <input
                  className='shadow appearance-none border rounded 
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
                  id='firstName'
                  type='text'
                  placeholder='שם פרטי'
               />

               <label className='form-label' htmlFor='lastName'>
                  שם משפחה
               </label>
               <input
                  className='shadow appearance-none border rounded
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
                  id='lastName'
                  type='text'
                  placeholder='שם משפחה'
               />

               <DropList
                  title={'עיר'}
                  placeHolder='נא לבחור עיר'
                  defaultValue={'באר שבע'}
                  data={['באר שבע', 'תל אביב', 'ירושלים']}
                  onValueChange={onListValueChange}
               />

               <DropList
                  title={'סטטוס'}
                  placeHolder='נא לבחור סטטוס'
                  defaultValue={''}
                  data={['נותק', 'נעול', 'פעיל']}
                  onValueChange={onListValueChange}
               />

               <button className='app-button'>
                  <span>שמירה</span> 😄
               </button>
            </Card>

            <ImageCard
               title={'Test 1234'}
               imageUrl={
                  'https://images.unsplash.com/photo-1585128903994-9788298932a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
               }>
               <p className='text-gray-700 text-center antialiased'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam, deleniti sunt. Neque culpa, quas cupiditate laborum
                  minus facilis
               </p>
               <button className='app-button'>
                  <div className='flex flex-row justify-center items-center'>
                     <CameraIcon />
                     <span className='mx-2'>שמירה</span>
                  </div>
               </button>
            </ImageCard>
         </div>
      </div>
   );
}

export default App;

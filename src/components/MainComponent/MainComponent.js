import React from 'react';

import Card from '../UI/Card/Card';
import ImageCard from '../UI/ImageCard/ImageCard';
import { CameraIcon, EditPencilIcon } from '../UI/Icons/Icons';
import DropList from '../UI/DropList/DropList';
import Tooltip from '../UI/Tooltip/Tooltip';

const MainComponent = () => {
   const onClickHandler = (event) => {
      console.log('Button Clicked... id: ', event.target.id);
      console.log('Button Clicked... innerText: ', event.target.innerText);
   };

   const onListValueChange = (value) => {
      console.log('List value: ', value);
   };

   return (
      <div
         dir='rtl'
         className='flex flex-col justify-around  
                    items-center sm:flex-row p-2'>
         <Card title='Main Title' subtitle='sub title'>
            <div className='flex flex-col'>
               <button
                  id='btn-1'
                  onClick={onClickHandler}
                  className='bg-facebook-blue hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md'>
                  Button 1
               </button>

               <Tooltip title='הוספה של פריט חדש'>
                  <button
                     id='btn-2'
                     onClick={onClickHandler}
                     className='bg-ios-green hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md w-full'>
                     Button 2
                  </button>
               </Tooltip>

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
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
               deleniti sunt. Neque culpa, quas cupiditate laborum minus facilis
            </p>
            <button className='app-button'>
               <div className='flex flex-row justify-center items-center'>
                  <CameraIcon />
                  <span className='mx-2'>שמירה</span>
               </div>
            </button>
         </ImageCard>
      </div>
   );
};
export default MainComponent;

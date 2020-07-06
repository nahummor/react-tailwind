import React from 'react';
import '../../styles/app.css';
import { CameraIcon } from '../Icons/Icons';

const ImageCard = ({ title, imageUrl, children }) => {
   return (
      <div
         dir='ltr'
         className='bg-white w-5/6 sm:w-1/3 md:w-1/4 
         border-solid border rounded-lg shadow-2xl overflow-hidden'>
         <img
            src={imageUrl}
            alt={'new place'}
            className='h-72 w-full object-cover'
         />
         <div className='p-2'>
            <h4 className='text-lg text-center text-gray-900 font-semibold bg-gray-200 border rounded-lg'>
               {title}
            </h4>
            <div className='flex flex-row'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'>
                  <path d='M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z' />
               </svg>
               <CameraIcon />
            </div>
            {children}
         </div>
      </div>
   );
};

export default ImageCard;

import React from 'react';
// import '../../styles/app.css';
import { CameraIcon, EditPencilIcon } from '../Icons/Icons';

const ImageCard = ({ title, imageUrl, children }) => {
   return (
      <div
         dir='ltr'
         className='w-5/6 sm:w-1/5
                    rounded-lg 
                    shadow-2xl overflow-hidden'>
         <div className='relative pb-1/1'>
            <img
               src={imageUrl}
               alt={'new place'}
               className='absolute h-full w-full object-cover'
            />
            {/* transform -rotate-45  w-2/5
            
            */}
            <div
               className='absolute font-bold px-10 badge top-0 left-0'
               style={{
                  transform:
                     'rotateZ(-45deg) translateX(-2.5rem) translateY(-0.5rem)',
                  transformOrigin: 'center',
               }}>
               Hot Deal
            </div>
         </div>

         <div className='p-2 bg-white'>
            <h4 className='mb-1 text-lg text-center text-gray-900 font-semibold bg-gray-200 border rounded-lg'>
               {title}
            </h4>

            <div className='flex flex-row justify-center items-center'>
               <EditPencilIcon />
               <CameraIcon />
               <span className='ml-2 rounded-badge'>מקום חדש</span>
            </div>
            {children}
         </div>
      </div>
   );
};

export default ImageCard;

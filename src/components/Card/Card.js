import React from 'react';
import '../../styles/app.css';

const Card = ({ title, subtitle, children }) => {
   return (
      <div
         dir='rtl'
         className='text-center bg-gray-300 rounded shadow-2xl 
                    w-5/6 sm:w-1/3 md:w-1/4
                    border-solid border-2 border-gray-600 p-2'>
         <p className='text-blue-400 text-lg font-bold text-right'>{title}</p>
         <p className='text-gray-800 text-lg font-light'>{subtitle}</p>
         {children}
      </div>
   );
};

export default Card;

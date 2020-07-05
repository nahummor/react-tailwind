import React from 'react';

const Card = ({ title, subtitle, children }) => {
   return (
      <div
         dir='rtl'
         className='text-center bg-gray-300 h-64 rounded shadow-2xl
                    border-solid border-2 border-gray-600 w-90 p-2'>
         <p className='text-blue-400 text-lg font-bold'>{title}</p>
         <p className='text-gray-800 text-lg font-light'>{subtitle}</p>
         {children}
      </div>
   );
};

export default Card;

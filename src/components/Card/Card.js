import React from 'react';

const Card = ({ title, subtitle, children }) => {
   return (
      <div
         dir='rtl'
         className='container mx-auto flex flex-row justify-center h-screen items-center'>
         <div className='text-center bg-gray-300 h-64 rounded shadow-2xl border-solid border-2 border-gray-600 w-56 p-2'>
            <p className='text-blue-300 text-lg font-bold'>{title}</p>
            <p className='text-black-300 text-lg'>{subtitle}</p>
            {children}
         </div>
      </div>
   );
};

export default Card;

import React from 'react';

const Modal = ({ open }) => {
   return (
      <div className='fixed inset-0 h-full w-full'>
         <div className='fixed inset-0 bg-gray-600 opacity-50 h-full'></div>
         <div
            className='fixed bg-white w-64 h-76'
            style={{ top: '30vh', left: '45vw' }}>
            Modal Test
         </div>
      </div>
   );
};

export default Modal;

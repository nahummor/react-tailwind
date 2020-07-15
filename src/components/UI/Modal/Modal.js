import React, { useEffect } from 'react';

const Modal = ({ show, onClose, onYes }) => {
   const onYesHandler = () => {
      onYes();
      onClose();
   };

   const onCloseModal = () => {
      onClose();
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         onClose();
         document.removeEventListener('keydown', onKeyDownHandler);
      }
   };

   document.addEventListener('keydown', onKeyDownHandler);

   useEffect(() => {
      return () => {
         document.removeEventListener('keydown', onKeyDownHandler);
         console.log('remove keydown event');
      };
      // eslint-disable-next-line
   }, []);

   return show ? (
      <div className='fixed inset-0 h-full w-full z-50 flex flex-row justify-center'>
         <div
            onClick={onCloseModal}
            className='fixed inset-0 bg-black opacity-75'></div>
         <div className='fixed p-2 bg-white w-10/12 md:w-3/12 h-48 top-1/3 rounded-lg'>
            <p className='text-center font-semibold text-xl'>הודעת מערכת</p>
            <p className='text-center font-medium text-xl mt-4'>
               ? האם לבצע את הפעולה
            </p>
            <div className='flex flex-row justify-around mt-10'>
               <button
                  onClick={onYesHandler}
                  className='bg-facebook-blue hover:bg-blue-700 text-white 
                             font-bold w-32 h-10 rounded  shadow-md'>
                  כן
               </button>
               <button
                  onClick={onCloseModal}
                  className='bg-facebook-blue hover:bg-blue-700 text-white 
                             font-bold w-32 h-10 rounded  shadow-md'>
                  לא
               </button>
            </div>
         </div>
      </div>
   ) : null;
};

export default Modal;

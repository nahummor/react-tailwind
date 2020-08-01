import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
// import Classes from './Modal.module.css';

const Modal = ({ show, onClose, onYes }) => {
   const [openModal, setOpenModal] = useState(false);

   const onYesHandler = () => {
      setOpenModal(false);

      setTimeout(() => {
         onYes();
         onClose();
      }, 300);
   };

   const onCloseModal = () => {
      setOpenModal(false);

      setTimeout(() => {
         onClose();
         document.removeEventListener('keydown', onKeyDownHandler);
      }, 300);
   };

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         setOpenModal(false);

         setTimeout(() => {
            onClose();
            document.removeEventListener('keydown', onKeyDownHandler);
         }, 300);
      }
   };

   document.addEventListener('keydown', onKeyDownHandler);

   useEffect(() => {
      setTimeout(() => {
         setOpenModal(show);
         console.log('show modal....');
      }, 10);
   }, [show]);

   useEffect(() => {
      return () => {
         document.removeEventListener('keydown', onKeyDownHandler);
         console.log('remove keydown event');
      };
      // eslint-disable-next-line
   }, []);

   return (
      <div
         className={classnames(
            'fixed inset-0 h-full w-full z-50 flex flex-row justify-center',
            { hidden: !show, block: show }
         )}>
         {/* <div
            onClick={onCloseModal}
            className='fixed inset-0 bg-black opacity-75'></div> */}

         <div
            onClick={onCloseModal}
            className={
               'fixed inset-0 bg-black transition-opacity duration-300 ease-linear'
            }
            style={openModal ? { opacity: 0.75 } : { opacity: 0 }}></div>
         <div
            className='fixed p-2 bg-white w-10/12 md:w-3/12 h-48 top-1/3 rounded-lg 
                       transition-opacity duration-300 ease-linear'
            style={openModal ? { opacity: 1 } : { opacity: 0 }}>
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
   );
};

export default Modal;

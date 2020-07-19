import React, { useEffect, useState } from 'react';
import { XIcon } from '../Icons/Icons';

// position top  => 90vh , center  => 50vh bottom  => 2vh
// time param in milliseconds

// type param info, warning, error

const Snackbar = ({ message, position, show, time, onClose }) => {
   const [showSnackbar, setShowSnackbar] = useState(show);

   useEffect(() => {
      let timeoutID;
      setShowSnackbar(show);
      if (show) {
         timeoutID = setTimeout(() => {
            setShowSnackbar(false);
            onClose();
         }, time);
      }
      return () => {
         window.clearTimeout(timeoutID);
      };
   }, [show, time, onClose]);

   const onCloseHandel = () => {
      setShowSnackbar(false);
   };

   const component = (
      <div
         dir='ltr'
         className='fixed bg-green-500 h-12 w-64 
                    border border-blue-300
                    font-semibold z-50 shadow-2xl 
                    text-right inset-x-center
                    text-white text-lg rounded-lg py-2 pr-3
                    flex flex-row justify-between items-center'
         style={{
            bottom:
               position === 'top'
                  ? '90vh'
                  : position === 'center'
                  ? '50vh'
                  : '2vh',
         }}>
         <button onClick={onCloseHandel}>
            <XIcon />
         </button>
         <p>{message}</p>
      </div>
   );
   return <>{showSnackbar ? component : null}</>;
};

export default React.memo(Snackbar);

import React, { useState } from 'react';
import classnames from 'classnames';
import { useEffect } from 'react';

const left = { right: '105%', top: '-5px' };
const right = { right: '-25%', top: '-5px' };
const top = { top: '-100%', left: '30%' };
const bottom = { bottom: '-100%', left: '30%' };

export default function Tooltip({ title, placement, children }) {
   const [showTooltip, setShowTooltip] = useState(false);
   const [showText, setShowText] = useState(false);

   let position = { opacity: 0 };

   switch (placement) {
      case 'left':
         position = { ...left };
         break;
      case 'right':
         position = { ...right };
         break;
      case 'top':
         position = { ...top };
         break;
      default:
         position = { ...bottom };
   }

   useEffect(() => {
      setTimeout(() => {
         setShowText(showTooltip);
      }, 200);
   }, [showTooltip]);

   const onHideTooltip = () => {
      setShowText(false);

      setTimeout(() => {
         setShowTooltip(false);
      }, 200);
   };

   return (
      <div
         className='relative'
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={onHideTooltip}>
         <span
            className={classnames(
               `absolute bg-gray-500 rounded-lg p-2 text-white text-center font-semibold 
                 shadow-lg w-32 z-50 transition-opacity duration-200 ease-linear`,
               { block: showTooltip },
               { hidden: !showTooltip }
            )}
            style={{ ...position, opacity: showText ? 1 : 0 }}>
            {title}
         </span>
         {children}
      </div>
   );
}

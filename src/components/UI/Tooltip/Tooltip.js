import React, { useState } from 'react';
import classnames from 'classnames';

const left = { right: '105%', top: '-5px' };
const right = { right: '-25%', top: '-5px' };
const top = { top: '-100%', left: '30%' };
const bottom = { bottom: '-100%', left: '30%' };

export default function Tooltip({ title, placement, children }) {
   const [showTooltip, setShowTooltip] = useState(false);
   let position;

   switch (placement) {
      case 'left':
         position = left;
         break;
      case 'right':
         position = right;
         break;
      case 'top':
         position = top;
         break;
      default:
         position = bottom;
   }

   return (
      <div
         className='relative'
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}>
         <span
            className={classnames(
               'absolute bg-gray-500 rounded-lg p-2 text-white text-center font-semibold shadow-lg w-32 z-50',
               { block: showTooltip },
               { hidden: !showTooltip }
            )}
            style={position}>
            {title}
         </span>
         {children}
      </div>
   );
}

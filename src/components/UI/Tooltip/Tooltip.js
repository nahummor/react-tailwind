import React, { useState } from 'react';
import classnames from 'classnames';

const left = { left: '-30%', top: '-5px' };
const right = { right: '-25%', top: '-5px' };
const top = { bottom: '100%', left: '30%' };
const bottom = { top: '105%', left: '30%' };

export default function Tooltip({ title, children }) {
   const [showTooltip, setShowTooltip] = useState(false);

   return (
      <div
         className='relative'
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}>
         {children}
         <span
            className={classnames(
               'absolute bg-gray-500 rounded-lg p-2 text-white font-semibold shadow-lg ',
               { inline: showTooltip },
               { hidden: !showTooltip }
            )}
            style={{ top: '105%', left: '30%' }}>
            {title}
         </span>
      </div>
   );
}

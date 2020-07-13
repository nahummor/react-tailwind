import React, { useState } from 'react';

const ToggleButton = ({ onValueChange, title }) => {
   const [done, setDone] = useState(false);

   const onDoneChangeHandler = (event) => {
      setDone(event.target.checked);
      onValueChange(event.target.checked);
   };

   return (
      <div className='w-3/12 border-b-2 border-blue-900'>
         {/* Toggle Button */}
         <p className='text-sm font-semibold'>{title}</p>
         <label htmlFor='toggle' className='flex items-center cursor-pointer'>
            <div className='mr-3 text-gray-700 font-medium'>לא</div>
            {/* toggle */}
            <div className='relative'>
               {/* input */}
               <input
                  id='toggle'
                  type='checkbox'
                  checked={done}
                  onChange={onDoneChangeHandler}
                  className='hidden'
               />

               {/* line */}
               <div className='w-10 h-4 bg-gray-500 rounded-lg shadow-inner'></div>
               {/* dot */}
               <div className='toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0'></div>
            </div>

            {/* label */}
            <div className='ml-3 text-gray-700 font-medium'>כן</div>
         </label>
      </div>
   );
};

export default ToggleButton;
// export default React.memo(ToggleButton);

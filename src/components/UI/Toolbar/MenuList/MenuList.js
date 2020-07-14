import React from 'react';
import { DropDownIcon } from '../../Icons/Icons';

function MenuList() {
   return (
      <div className=''>
         <button
            className='text-white font-semibold 
                       focus:bg-gray-600
                       hover:bg-gray-600
                       rounded px-2 py-1'>
            <div className='flex flex-row justify-center items-center'>
               <DropDownIcon />
               <span>פעולות</span>
            </div>
         </button>
      </div>
   );
}

export default MenuList;

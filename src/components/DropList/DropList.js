import React, { useState } from 'react';
import { DropDownIcon } from '../Icons/Icons';

const DropList = ({ data }) => {
   const [openList, setOpenList] = useState(false);
   const [value, setValue] = useState('');

   const links = data.map((item) => (
      <li
         className='my-1 font-semibold hover:bg-gray-500 hover:text-white rounded-lg cursor-pointer'
         key={item}>
         {item}
      </li>
   ));

   const onMenuClickHandler = () => {
      setOpenList((prevValue) => !prevValue);
   };

   const onItemClickHandler = (event) => {
      console.log(event.target.innerText);
      setValue(event.target.innerText);
      setOpenList(false);
   };

   return (
      <div className='relative'>
         <div className='flex mt-2'>
            <button
               onClick={onMenuClickHandler}
               className='bg-green-300 rounded-lg w-1/3 h-full p-2'>
               <div className='flex flex-row justify-center items-center'>
                  <span className='text-md font-semibold text-gray-800'>
                     עיר
                  </span>
                  <DropDownIcon />
               </div>
            </button>
            <input
               value={value}
               onChange={(e) => setValue(e.target.value)}
               type='text'
               readOnly
               placeholder='נא לבחור עיר'
               className='mr-1 shadow appearance-none border rounded
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
            />
         </div>

         <div
            onMouseLeave={() => setOpenList(false)}
            className={
               openList
                  ? 'absolute right-0 bg-white w-40 rounded-lg p-1 shadow-xl'
                  : 'hidden'
            }>
            <ul onClick={onItemClickHandler}>{links}</ul>
         </div>
      </div>
   );
};

export default DropList;

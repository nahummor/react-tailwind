import React, { useState } from 'react';
import { DropDownIcon } from '../Icons/Icons';

const DropList = ({
   data,
   defaultValue,
   title,
   placeHolder,
   onValueChange,
}) => {
   const [openList, setOpenList] = useState(false);
   const [value, setValue] = useState(defaultValue);

   const links = data.map((item, index) => (
      <li
         className='my-1 font-semibold 
                    hover:bg-gray-500 hover:text-white 
                    rounded-lg cursor-pointer'
         key={index}>
         {item}
      </li>
   ));

   const onMenuClickHandler = () => {
      setOpenList((prevValue) => !prevValue);
      document.addEventListener('keydown', onKeyDownHandler);
   };

   const onCancelMenuHandler = () => {
      setOpenList(false);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   const onItemClickHandler = (event) => {
      setValue(event.target.innerText);
      onValueChange(event.target.innerText);
      setOpenList(false);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         setOpenList(false);
         document.removeEventListener('keydown', onKeyDownHandler);
      }
   };

   return (
      <div className='relative'>
         <div className='flex mt-2'>
            <button
               onClick={onMenuClickHandler}
               onKeyUp={(e) => {
                  // space = 32
                  if (e.which === 32) {
                     // prevent space click the button
                     e.preventDefault();
                  }
               }}
               className='relative bg-green-300 rounded-lg w-1/3 h-full p-2'>
               <div className='flex flex-row justify-center items-center'>
                  <span className='text-md font-semibold text-gray-800'>
                     {title}
                  </span>
                  <DropDownIcon />
               </div>
            </button>

            <input
               value={value}
               type='text'
               readOnly
               placeholder={placeHolder}
               className='mr-1 shadow appearance-none border rounded
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
            />
         </div>

         {openList ? (
            <button
               onClick={onCancelMenuHandler}
               tabIndex='-1'
               className='fixed inset-0
                          h-full w-full
                          cursor-default'></button>
         ) : null}

         <div
            className={
               openList
                  ? 'absolute right-0 bg-white w-40 rounded-lg p-1 shadow-xl z-10'
                  : 'hidden'
            }>
            <ul onClick={onItemClickHandler}>{links}</ul>
         </div>
      </div>
   );
};

export default DropList;

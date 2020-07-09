import React, { useEffect, useState } from 'react';
import { LeftIcon, RightIcon } from '../Icons/Icons';

const calendarButtons = (
   <>
      <div className='flex flex-row justify-around'>
         <button className='w-12 m-2 p-1 bg-gray-500'>1</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>2</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>3</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>4</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>5</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>6</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>7</button>
      </div>

      <div className='flex flex-row justify-around'>
         <button className='w-12 m-2 p-1 bg-gray-500'>8</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>9</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>10</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>11</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>12</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>13</button>
         <button className='w-12 m-2 p-1 bg-gray-500'>14</button>
      </div>
   </>
);

const Calendar = () => {
   const [lines, setLines] = useState(null);

   const createButtons = () => {
      let lineIndex = 0;
      let dayNumber = 1;
      let buttonsArray = [];
      const lines = [];

      for (let line = 0; line <= 5; line++) {
         for (let i = 0; i <= 6; i++) {
            let button;
            if (dayNumber > 37) {
               button = null;
            } else {
               button = (
                  <button
                     id={'btn-' + dayNumber}
                     key={dayNumber}
                     className='w-12 m-2 p-1 bg-gray-500'>
                     {dayNumber}
                  </button>
               );
            }
            buttonsArray.push(button);
            dayNumber++;
         }

         let week = (
            <div key={lineIndex} className='flex flex-row justify-around'>
               {buttonsArray}
            </div>
         );

         lines.push(week);

         buttonsArray = [];
         lineIndex++;
      }

      setLines(lines);
   };

   useEffect(() => {
      createButtons();
   }, []);

   return (
      <div className='bg-white'>
         <div className='flex flex-row justify-center items-center p-1'>
            <button
               className='mr-2 bg-indigo-500 text-gray-400 h-10
                                      font-medium rounded-md shadow-md w-6'>
               <LeftIcon />
            </button>
            <p className='bg-gray-500 p-2 rounded-lg text-lg font-medium'>
               1/10/2020
            </p>
            <button
               className='ml-2 bg-indigo-500 text-gray-400 h-10
                                  font-medium rounded-md shadow-md w-6'>
               <RightIcon />
            </button>
         </div>
         <div className='flex flex-row justify-around text-lg font-bold'>
            <div>א</div>
            <div>ב</div>
            <div>ג</div>
            <div>ד</div>
            <div>ה</div>
            <div>ו</div>
            <div>ש</div>
         </div>
         {lines}
      </div>
   );
};

export default Calendar;

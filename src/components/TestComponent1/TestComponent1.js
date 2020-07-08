import React, { useState } from 'react';
import './TestComponent1.css';

const TestComponent1 = () => {
   const [bikeSelected, setBikeSelected] = useState(false);
   const [likeRun, setLikeRun] = useState(false);

   return (
      <div className='flex flex-col p-2 h-full'>
         <div className='flex flex-col h-full sm:flex-row justify-around'>
            <div
               className='p-2 bg-gray-500  h-full sm:h-screen/2
                           w-full rounded-lg text-center'>
               <p className='text-6xl bg-blue-100 rounded-lg'>
                  Test component 1234
               </p>
               <p className='text-4xl bg-blue-200 rounded-lg my-2'>
                  Test component 1234
               </p>
               <p className='text-xs bg-blue-300 rounded-lg'>
                  Test component 1234
               </p>
            </div>

            <div className='h-2 sm:w-2'></div>

            <div
               className='p-2 bg-gray-600  h-full sm:h-screen/2 
                       w-full rounded-lg'>
               <form className='flex flex-col'>
                  <label htmlFor='vehicle1'>
                     <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        checked={bikeSelected}
                        onChange={(e) => {
                           console.log(e.target.checked);
                           setBikeSelected(e.target.checked);
                        }}
                     />
                     <span>I have a bike</span>
                  </label>

                  <label htmlFor='vehicle2'>
                     <input
                        type='checkbox'
                        id='vehicle2'
                        name='vehicle2'
                        value='Car'
                     />
                     <span>I have a car</span>
                  </label>

                  <label htmlFor='vehicle3'>
                     <input
                        type='checkbox'
                        id='vehicle3'
                        name='vehicle3'
                        value='Boat'
                     />
                     <span>I have a boat</span>
                  </label>

                  <label className='flex justify-start items-start'>
                     <div
                        className='bg-white rounded
                                    border-2 border-gray-400 
                                    w-5 h-5
                                    flex flex-shrink-0 
                                    justify-center items-center
                                    mr-2 focus-within:border-blue-500'>
                        <input
                           type='checkbox'
                           className='opacity-0 absolute'
                           checked={likeRun}
                           onChange={(e) => {
                              console.log(e.target.checked);
                              setLikeRun(e.target.checked);
                           }}
                        />
                        <svg
                           className='fill-current hidden w-4 h-4 text-green-900 pointer-events-none'
                           viewBox='0 0 20 20'>
                           <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                        </svg>
                     </div>
                     <div className='select-none'>Like Run ?</div>
                  </label>
               </form>
            </div>
         </div>

         <div className='h-2'></div>

         <div
            className='flex flex-col 
                       sm:flex-row justify-center items-center
                       px-2 bg-gray-400 h-full rounded-lg'>
            <div className='bg-red-400 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               1111111
            </div>
            <div className='bg-red-400 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               2222222
            </div>
            <div className='bg-red-400 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               3333333
            </div>
         </div>
      </div>
   );
};

export default TestComponent1;

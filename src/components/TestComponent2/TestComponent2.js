import React from 'react';

export default function TestComponent2() {
   return (
      <div className='p-2 flex flex-row justify-center'>
         <div
            className='w-76 h-72 p-2 border-2 border-black rounded-lg
                       transform rotate-0 origin-top-left hover:rotate-90'
            style={{ transition: 'transform 600ms' }}>
            Test Component 2
         </div>
         <div className='w-76 h-72 p-2 border-2 border-black rounded-lg '>
            <div className='w-24 h-full bg-gray-400 p-2 rounded-lg animate-spin'>
               {/* style={{ transform: 'rotate(15deg)' }} */}
               Test 1
            </div>
         </div>
      </div>
   );
}

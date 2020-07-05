import React from 'react';

import './styles/app.css';
import Card from './components/Card/Card';

function App() {
   const onClickHandler = (event) => {
      console.log('Button Clicked... id: ', event.target.id);
      console.log('Button Clicked... innerText: ', event.target.innerText);
   };

   return (
      <div className='flex flex-row'>
         <Card title='Main title' subtitle='sub title'>
            <div className='flex flex-col'>
               <button
                  id='btn-1'
                  onClick={onClickHandler}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                  Button 1
               </button>

               <button
                  id='btn-2'
                  onClick={onClickHandler}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                  Button 2
               </button>

               <button
                  id='btn-3'
                  onClick={onClickHandler}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                  Button 3
               </button>
            </div>
         </Card>
         <Card title='form 1' subtitle='add new data'>
            <label
               className='block text-gray-700 text-sm font-bold mb-2 text-right'
               htmlFor='username'>
               שם משתמש
            </label>
            <input
               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               id='username'
               type='text'
               placeholder='שם משתמש'
            />
         </Card>
      </div>
   );
}

export default App;

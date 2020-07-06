import React from 'react';

import './styles/app.css';
import Card from './components/Card/Card';

function App() {
   const onClickHandler = (event) => {
      console.log('Button Clicked... id: ', event.target.id);
      console.log('Button Clicked... innerText: ', event.target.innerText);
   };

   return (
      <div
         dir='rtl'
         className='flex flex-col justify-around h-screen 
                    items-center bg-gray-100 sm:flex-row'>
         <Card title='Main Title' subtitle='sub title'>
            <div className='flex flex-col'>
               <button
                  id='btn-1'
                  onClick={onClickHandler}
                  className='bg-facebook-blue hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md'>
                  Button 1
               </button>

               <button
                  id='btn-2'
                  onClick={onClickHandler}
                  className='bg-ios-green hover:bg-blue-700 text-white 
                             font-bold py-2 px-4 rounded mt-4 shadow-md'>
                  Button 2
               </button>

               <button
                  id='btn-3'
                  onClick={onClickHandler}
                  className='app-button'>
                  Button 3
               </button>
            </div>
         </Card>
         <Card title='פרטי עובד' subtitle='add new data'>
            <label className='form-label' htmlFor='firstName'>
               שם פרטי
            </label>
            <input
               className='shadow appearance-none border rounded 
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
               id='firstName'
               type='text'
               placeholder='שם פרטי'
            />

            <label className='form-label' htmlFor='lastName'>
               שם משפחה
            </label>
            <input
               className='shadow appearance-none border rounded
                          w-full py-2 px-3 mb-2 text-gray-700 leading-tight 
                          focus:outline-none focus:shadow-outline'
               id='lastName'
               type='text'
               placeholder='שם משפחה'
            />
            <button className='app-button'>שמירה</button>
         </Card>
      </div>
   );
}

export default App;

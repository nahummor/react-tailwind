import React, { useState, useCallback } from 'react';
import './TestComponent1.css';
import Calendar from '../UI/Calendar/Calendar';
import ToggleButton from '../UI/ToggleButton/ToggleButton';
import Tab from '../UI/Tab/Tab';
import Modal from '../UI/Modal/Modal';
import AddWorker from '../AddWorker/AddWorker';
import List from '../UI/List/List';

import Person from '../../models/Student';
import Worker from '../../models/Worker';

const listData = [
   { itemTitle: 'item 0', value: 0 },
   { itemTitle: 'item 1', value: 1 },
   { itemTitle: 'item 2', value: 2 },
   { itemTitle: 'item 3', value: 3 },
];

const TestComponent1 = () => {
   const [bikeSelected, setBikeSelected] = useState(false);
   const [likeRun, setLikeRun] = useState(false);
   const [age, setAge] = useState('30');
   const [openModal, setOpenModal] = useState(false);

   const worker = new Worker();
   worker.firstName = 'nahum';
   worker.lastName = 'Mor';
   worker.title = 'IT';
   worker.display();
   console.log(worker);

   const person = new Person('', '', ['sub 1', 'sub 2']);
   person.firstName = 'nahum';
   person.lastName = 'Mor';
   person.display();

   const onAgeChangeHandler = (event) => {
      setAge(event.target.value);
      console.log('Age: ', event.target.value);
   };

   const onMainDivClick = (event) => {
      console.log(event.target.id);
      console.log(event.target.innerText);
   };

   const onCalendarDateChange = useCallback((date) => {
      console.log(date);
   }, []);

   const onToggleValueChange = (value) => {
      console.log(value);
   };

   const onListItemChangeHandler = (itemValue) => {
      console.log('Item value selected: ', itemValue);
   };

   return (
      <div className='flex flex-col p-2 h-full'>
         <div className='flex flex-col h-full sm:flex-row justify-around'>
            <div
               id='main-div'
               onClick={onMainDivClick}
               className='p-2 bg-gray-500  h-full sm:h-screen/2
                           w-full rounded-lg text-center'>
               <p id='p1' className='text-6xl bg-blue-100 rounded-lg'>
                  Test component 1234 Text 6xl
               </p>
               <p id='p2' className='text-4xl bg-blue-200 rounded-lg my-2'>
                  Test component 1234 Text 4xl
               </p>
               <p id='p3' className='text-xs bg-blue-300 rounded-lg'>
                  Test component 1234 Text xs
               </p>
            </div>

            <div className='h-full sm:w-2'></div>

            <div
               className='p-2 bg-gray-600  h-full sm:h-screen/2 
                       w-full rounded-lg'>
               <form>
                  <div className='w-3/12 flex flex-col border-b border-blue-900'>
                     <p className='text-sm font-semibold'>check box</p>

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
                  </div>

                  <div
                     dir='rtl'
                     className='w-3/12 flex flex-col border-b-2 border-blue-900'>
                     <p className='text-xl font-semibold'>בחר גיל</p>
                     <span className='text-sm'>(radio buttons group)</span>

                     <label className='font-semibold flex justify-start items-center'>
                        <div
                           className='ml-2  bg-white rounded-full
                                    border-2 border-gray-400 
                                    w-5 h-5
                                    flex flex-shrink-0 
                                    justify-center items-center
                                    focus-within:border-blue-500'>
                           <input
                              className='opacity-0 absolute'
                              id='age1'
                              type='radio'
                              name='age'
                              value='30'
                              checked={age === '30'}
                              onChange={onAgeChangeHandler}
                           />
                           <svg
                              className='fill-current hidden w-3 h-3 text-green-900 pointer-events-none'
                              height='487.59'
                              viewBox='0 0 365.7 365.7'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path d='M243.19 182.86L356.32 69.73a31.98 31.98 0 000-45.25L341.24 9.4a31.98 31.98 0 00-45.25 0L182.86 122.53 69.73 9.37a31.98 31.98 0 00-45.25 0L9.38 24.46a31.99 31.99 0 000 45.25l113.15 113.15L9.4 295.99a31.98 31.98 0 000 45.25l15.08 15.08a31.98 31.98 0 0045.25 0l113.13-113.13 113.13 113.13a31.99 31.99 0 0045.25 0l15.08-15.08a31.99 31.99 0 000-45.25zm0 0' />
                           </svg>
                        </div>
                        <span>0 - 30</span>
                     </label>

                     <div>
                        <input
                           id='age2'
                           type='radio'
                           name='age'
                           value='60'
                           checked={age === '60'}
                           onChange={onAgeChangeHandler}
                        />
                        <label className='mr-2 font-semibold' htmlFor='age2'>
                           31 - 60
                        </label>
                     </div>
                     <div>
                        <input
                           id='age3'
                           type='radio'
                           name='age'
                           value='100'
                           checked={age === '100'}
                           onChange={onAgeChangeHandler}
                        />
                        <label className='mr-2 font-semibold' htmlFor='age3'>
                           61 - 100
                        </label>
                     </div>
                  </div>
                  <ToggleButton
                     title={'האם לבצע'}
                     onValueChange={onToggleValueChange}
                  />
                  <Calendar
                     onDateChange={onCalendarDateChange}
                     value={'10/9/2020'}
                  />
               </form>
            </div>
         </div>

         <div className='h-2'></div>

         <div
            className='flex flex-col 
                       sm:flex-row justify-center items-center
                       px-2 bg-gray-400 h-full rounded-lg'>
            <div className='bg-red-400 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               <Calendar
                  onDateChange={onCalendarDateChange}
                  value={'13/5/2019'}
               />
            </div>
            <div className='bg-red-400 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               <Tab tabsTitle={['פעולה 1', 'פעולה 2', 'פעולה 3', 'פעולה 4']}>
                  <div id='tab1'>
                     <p>content 1</p>
                     <button
                        onClick={() => setOpenModal(true)}
                        className='app-button'>
                        open modal
                     </button>
                  </div>
                  <div id='tab2'>
                     <Calendar
                        onDateChange={onCalendarDateChange}
                        value={'12/8/2019'}
                     />
                  </div>
                  <div id='tab3'>
                     <List
                        listData={listData}
                        selectedItemIndex={2}
                        onItemChange={onListItemChangeHandler}
                     />
                  </div>
                  <div id='tab4'>
                     content 4 Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Earum minus tenetur quis adipisci iste
                     quisquam unde voluptatem distinctio nesciunt beatae aliquid
                     illum fuga error eligendi, expedita, est nemo magni odio?
                  </div>
               </Tab>
            </div>
            <div className='bg-blue-200 m-1 rounded-lg p-1 w-full sm:w-1/3 h-full'>
               <AddWorker />
            </div>
         </div>
         <Modal
            show={openModal}
            onClose={() => setOpenModal(false)}
            onYes={() => console.log('YES')}
         />
      </div>
   );
};

export default TestComponent1;

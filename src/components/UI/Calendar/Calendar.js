import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import localHe from 'moment/locale/he';

import {
   LeftIcon,
   RightIcon,
   PlusIcon,
   MinusIcon,
   DropDownIcon,
} from '../Icons/Icons';

const Calendar = ({ onDateChange }) => {
   const [lines, setLines] = useState(null);
   const [today, setToday] = useState(moment(new Date()));
   const [selectedYear, setSelectedYear] = useState(moment().year());

   //    console.log('Init Calendar....');

   useEffect(() => {
      moment.updateLocale('he', localHe);
      //   let a = moment.duration(1, 'days').humanize();
      //   let b = moment.duration(1, 'week').humanize();
      //   console.log(moment.months());
      //   console.log(moment.weekdays());

      //   console.log(a);
      //   console.log(b);
   }, []);

   const createButtons = useCallback(
      (date) => {
         // היום בשבוע שהחודש מתחיל
         const temp = `1-${date.month() + 1}-${date.year()}`;
         const dayOfWeek = moment(temp, 'DD-MM-YYYY').day(); // sunday = 0

         // מספר ימים בחודש
         const daysInMonth = moment(date, 'DD-MM-YYYY').daysInMonth();

         let lineIndex = 0;
         let dayNumber = 0;
         let buttonsArray = [];
         const month = [];
         let dayIndex = 1; // מספר היום בחודש מודפס על הכפתורים

         const onDateChangeHandler = (event) => {
            if (event.target.id.indexOf('btn-') === 0) {
               const newDate = moment(
                  `${event.target.innerText}-${
                     today.month() + 1
                  }-${today.year()}`,
                  'DD-MM-YYYY'
               );
               setToday(newDate);
            }
         };

         // 6 lines
         for (let line = 0; line <= 5; line++) {
            // 7 buttons (days)
            for (let i = 0; i <= 6; i++) {
               let button;

               if (dayNumber < dayOfWeek || dayIndex > daysInMonth) {
                  button = (
                     <div
                        key={dayNumber}
                        className='w-10 mx-2 mt-1 px-1 opacity-0'>
                        xx
                     </div>
                  );
               } else {
                  button = (
                     <button
                        id={'btn-' + dayNumber}
                        key={dayNumber}
                        className='w-10 mx-2 mt-1 px-1 bg-gray-500'>
                        {dayIndex}
                     </button>
                  );
                  dayIndex++;
               }

               dayNumber++;
               buttonsArray.push(button);
            }

            let week = (
               <div
                  key={lineIndex}
                  onClick={onDateChangeHandler}
                  className='flex flex-row justify-around'>
                  {buttonsArray}
               </div>
            );

            month.push(week);

            buttonsArray = [];
            lineIndex++;
         }

         setLines(month);
      },
      [today]
   );

   useEffect(() => {
      onDateChange(today.format('DD/MM/yyyy'));
   }, [today, onDateChange]);

   useEffect(() => {
      createButtons(today);
   }, [createButtons, today]);

   const onNextMonthHandler = () => {
      setToday(moment(today).add(1, 'M'));
   };

   const onPreviousMonthHandler = () => {
      setToday(moment(today).subtract(1, 'M'));
   };

   const onTodayClickHandler = () => {
      setToday(moment());
      // set month drop list with the today month
   };

   const onInputYearChange = (event) => {
      if (event.target.value.length > 3) {
         setToday(
            moment(
               `${+event.target.value}-${today.month() + 1}-${today.date()}`,
               'yyyy-MM-DD'
            )
         );
      }
      setSelectedYear(event.target.value);
   };

   const onYearPlusHandler = () => {
      setToday(moment(today).add(1, 'Y'));
      setSelectedYear((prev) => ++prev);
   };

   const onYearMinusHandler = () => {
      setToday(moment(today).subtract(1, 'Y'));
      setSelectedYear((prev) => --prev);
   };

   const onMonthChange = (event) => {
      setToday(
         moment(
            `${today.date()}-${+event.target.value + 1}-${today.year()}`,
            'DD-MM-yyyy'
         )
      );
   };

   return (
      <div className='bg-white rounded-lg p-1'>
         <div className='flex flex-row justify-center items-center p-1'>
            <button
               onClick={onPreviousMonthHandler}
               title='חודש קודם'
               className='mr-2 bg-indigo-500 text-gray-400 h-10
                                      font-medium rounded-md shadow-md w-6'>
               <LeftIcon />
            </button>
            <p className='bg-gray-500 p-2 rounded-lg text-lg font-medium'>
               {moment(today).format('DD/MM/YYYY')}
            </p>
            <button
               onClick={onNextMonthHandler}
               title='חודש הבא'
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

         <div className='flex flex-row justify-evenly items-center'>
            <button
               onClick={onTodayClickHandler}
               className='bg-indigo-500 text-gray-400 h-7 mx-1 mt-1
                          font-medium rounded-md shadow-md w-24'>
               היום
            </button>
            <div className='flex flex-row justify-end items-center'>
               <button
                  onClick={onYearMinusHandler}
                  title='חיסור שנה'
                  className='ml-2 bg-indigo-500 text-gray-400 h-7
                         font-medium rounded-md shadow-md w-6'>
                  <MinusIcon />
               </button>
               <button
                  onClick={onYearPlusHandler}
                  title='הוספת שנה'
                  className='ml-2 mr-1 bg-indigo-500 text-gray-400 h-7
                         font-medium rounded-md shadow-md w-6'>
                  <PlusIcon />
               </button>
               <input
                  type='number'
                  placeholder='שנה'
                  value={selectedYear}
                  onChange={onInputYearChange}
                  className='border border-gray-400 rounded shadow 
                             h-8 text-right pr-2
                             focus:outline-none focus:border-gray-600 
                             w-16 text-gray-700 font-semibold'
               />
            </div>
            <div className='inline-block relative w-40'>
               <div
                  className='pointer-events-none absolute inset-y-0 
                             flex items-center px-2 text-gray-700'>
                  <DropDownIcon />
               </div>
               <select
                  onChange={onMonthChange}
                  dir='rtl'
                  value={today.month()}
                  className='block appearance-none w-full bg-white border border-gray-400 h-8
                             hover:border-gray-500 px-2 rounded shadow leading-tight
                             focus:outline-none focus:shadow-outline cursor-pointer'>
                  {moment.months().map((month, index) => (
                     <option key={index} value={index}>
                        {month}
                     </option>
                  ))}
               </select>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Calendar);

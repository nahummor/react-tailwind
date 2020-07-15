import React, { useState } from 'react';

const Tab = ({ tabsTitle, children }) => {
   const [tabIndex, setTabIndex] = useState(1);

   let elements = React.Children.toArray(children);

   const onSelectTabHandler = (index) => (event) => {
      setTabIndex(index);
   };

   // create dynamic buttons
   const buttons = elements.map((element, index) => {
      return (
         <button
            key={index + 1}
            id={'btn-' + index + 1}
            onClick={onSelectTabHandler(index + 1)}
            className='w-full bg-gray-400 focus:bg-gray-600 focus:text-white focus:font-semibold'
            autoFocus={index === 0 ? true : false}>
            {tabsTitle[index]}
         </button>
      );
   });

   // create dynamic tabs
   const tabs = elements.map((element, index) => {
      return React.cloneElement(element, {
         className: tabIndex === index + 1 ? 'p-1' : 'hidden',
      });
   });

   return (
      <div className='bg-gray-100 h-full'>
         <div className='flex flex-row border-b border-solid border-gray-600'>
            {buttons}
         </div>
         {tabs}
      </div>
   );
};

export default Tab;

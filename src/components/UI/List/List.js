import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

const List = ({ listData, selectedItemIndex, onItemChange }) => {
   const [listItems, setListItems] = useState([]);
   const [selectedItem, setSelectedItem] = useState(selectedItemIndex);

   const onClickItem = (event) => {
      //   console.log(event.target.value);
      //   console.log(event.target.innerText);
      //   console.log(event.target);
      setSelectedItem(+event.target.value);
      onItemChange(+event.target.value);
   };

   useEffect(() => {
      const items = listData.map((item, index) => {
         return (
            <li
               key={index}
               value={item.value}
               className={classnames(
                  'p-2 font-semibold rounded-lg cursor-pointer hover:bg-gray-400',
                  { 'bg-gray-400': index === selectedItem }
               )}>
               {item.itemTitle}
            </li>
         );
      });
      setListItems(items);
      // eslint-disable-next-line
   }, [selectedItem]);

   return (
      <div dir='rtl' className='flex flex-row justify-center'>
         <div className='w-48'>
            <p className='text-center font-semibold text-xl'>כותרת</p>
            <ul
               className='bg-gray-200 rounded-lg shadow-lg'
               onClick={onClickItem}>
               {listItems}
            </ul>
         </div>
      </div>
   );
};

export default List;

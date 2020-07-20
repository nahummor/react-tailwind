import React from 'react';
import { useAsyncDebounce } from 'react-table';

// Define a default UI for filtering
function GlobalFilter({
   preGlobalFilteredRows,
   globalFilter,
   setGlobalFilter,
}) {
   const count = preGlobalFilteredRows.length;
   const [value, setValue] = React.useState(globalFilter);

   const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
   }, 200);

   return (
      <span className='flex flex-row'>
         <span className='text-gray-700 mr-1 ml-2'>חיפוש:</span>
         <input
            value={value || ''}
            onChange={(e) => {
               setValue(e.target.value);
               onChange(e.target.value);
            }}
            placeholder={`${count} רשומות...`}
            className='outline-none focus:bg-gray-200 
                       w-full font-semibold text-gray-900'
         />
      </span>
   );
}

export default GlobalFilter;

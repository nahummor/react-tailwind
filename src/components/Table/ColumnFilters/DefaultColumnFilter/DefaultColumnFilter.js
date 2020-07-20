import React from 'react';

// Define a default UI for filtering
function DefaultColumnFilter({
   column: { filterValue, preFilteredRows, setFilter },
}) {
   const count = preFilteredRows.length;

   return (
      <input
         value={filterValue || ''}
         onChange={(e) => {
            setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
         }}
         placeholder={`חיפוש ${count} רשומות...`}
      />
   );
}

export default DefaultColumnFilter;

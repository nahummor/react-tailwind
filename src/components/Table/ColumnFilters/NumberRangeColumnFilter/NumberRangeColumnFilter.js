import React from 'react';

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
   column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
   const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;

      preFilteredRows.forEach((row) => {
         min = Math.min(row.values[id], min);
         max = Math.max(row.values[id], max);
      });
      return [min, max];
   }, [id, preFilteredRows]);

   return (
      <div
         style={{
            display: 'flex',
         }}>
         <input
            value={filterValue[0] || ''}
            type='number'
            onChange={(e) => {
               const val = e.target.value;
               setFilter((old = []) => [
                  val ? parseInt(val, 10) : undefined,
                  old[1],
               ]);
            }}
            placeholder={`מינ' (${min})`}
            style={{
               width: '70px',
               marginRight: '0.5rem',
            }}
         />
         <span className='font-semibold mx-1'>עד</span>
         <input
            value={filterValue[1] || ''}
            type='number'
            onChange={(e) => {
               const val = e.target.value;
               setFilter((old = []) => [
                  old[0],
                  val ? parseInt(val, 10) : undefined,
               ]);
            }}
            placeholder={`מקס' (${max})`}
            style={{
               width: '70px',
               marginLeft: '0.5rem',
            }}
         />
      </div>
   );
}

export default NumberRangeColumnFilter;

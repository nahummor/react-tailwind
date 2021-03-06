import React from 'react';

const TablePagination = ({
   gotoPage,
   previousPage,
   nextPage,
   canPreviousPage,
   canNextPage,
   pageCount,
   pageIndex,
   pageOptions,
   pageSize,
   setPageSize,
}) => {
   //
   //     Pagination can be built however you'd like.
   //     This is just a very basic UI implementation:
   //
   return (
      <div className='text-center bg-gray-200 p-2'>
         <div className='mx-2'>
            <button
               className={
                  canPreviousPage
                     ? 'button-pagination'
                     : 'button-pagination-disable'
               }
               onClick={() => gotoPage(0)}
               disabled={!canPreviousPage}>
               {'התחלה'}
            </button>
            <button
               className={
                  canPreviousPage
                     ? 'button-pagination'
                     : 'button-pagination-disable'
               }
               onClick={() => previousPage()}
               disabled={!canPreviousPage}>
               {'הקודם'}
            </button>
            <button
               className={
                  canNextPage
                     ? 'button-pagination'
                     : 'button-pagination-disable'
               }
               onClick={() => nextPage()}
               disabled={!canNextPage}>
               {'הבא'}
            </button>
            <button
               className={
                  canNextPage
                     ? 'button-pagination'
                     : 'button-pagination-disable'
               }
               onClick={() => gotoPage(pageCount - 1)}
               disabled={!canNextPage}>
               {'סוף'}
            </button>
         </div>

         <div className='font-semibold'>
            <span className='ml-1'>עמוד</span>
            <span>
               {pageIndex + 1} מתוך {pageOptions.length}
            </span>
         </div>

         <div className=''>
            <span className='ml-2 font-semibold'>מעבר לעמוד:</span>
            <input
               type='number'
               defaultValue={pageIndex + 1}
               onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
               }}
               className='w-12 border-b-2 border-solid 
                          border-teal-900 outline-none focus:bg-gray-200'
            />
            <select
               value={pageSize}
               onChange={(e) => {
                  setPageSize(Number(e.target.value));
               }}>
               {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                     {pageSize}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
};

export default TablePagination;

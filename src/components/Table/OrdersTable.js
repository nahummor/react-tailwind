import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import TablePagination from './TablePagination/TablePagination';

const OrdersTable = () => {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);
   const [totalOrdersNumber, setTotalOrdersNumber] = useState(0);

   const columns = useMemo(
      () => [
         {
            Header: 'תאריך הזמנה',
            accessor: 'orderDate',
         },
         {
            Header: 'מספר הזמנה',
            accessor: 'orderNumber',
         },
         {
            Header: 'תיאור העבודה',
            accessor: 'job',
         },
         {
            Header: 'מספר חוזה',
            accessor: 'contractNumber',
         },
         {
            Header: 'סעיף תקציבי',
            accessor: 'budgetItem',
         },
         {
            Header: 'קבלן מבצע',
            accessor: 'doneByConstructor',
         },
      ],
      []
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      footerGroups,
      page,
      visibleColumns,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize, sortBy },
   } = useTable(
      {
         columns,
         data,
         disableSortRemove: true,
         manualPagination: true,
         manualFilters: true,
         manualSortBy: true,
      },
      useSortBy,
      usePagination
   );

   const fetchData = useCallback(
      (pageIndex, pageSize, sortBy, sortDirection, searchText) => {
         // This will get called when the table needs new data
         const sortType = sortDirection ? 'desc' : 'asc';

         setLoading(true);
         fetch(
            `http://localhost:4000/api/orders/perPage/${pageIndex}/${pageSize}/${sortBy}/${sortType}/?searchText=${searchText}`
         )
            .then((response) => response.json())
            .then((jsonData) => {
               console.log(jsonData);
               setData([...jsonData.orders]);
               setTotalOrdersNumber(jsonData.totalOrdersNumber);
               setLoading(false);
            });
      },
      []
   );

   useEffect(() => {
      fetchData(pageIndex, pageSize, sortBy[0].id, sortBy[0].desc, '');
      // eslint-disable-next-line
   }, [fetchData, pageIndex, pageSize, sortBy]);

   return (
      <div className='p-2 flex flex-col justify-center items-center'>
         <p className='font-semibold text-xl'>הזמנות</p>
         <table
            dir='rtl'
            {...getTableProps()}
            className='shadow-2xl border-2 border-teal-500 w-5/6'>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th
                           {...column.getHeaderProps(
                              column.getSortByToggleProps()
                           )}
                           style={{ width: column.width }}
                           className='border-b-2 border-red-500 
                                      bg-blue-200 text-gray-700
                                      font-semibold text-right
                                      hover:bg-gray-500'>
                           {column.render('Header')}
                           {/* Add a sort direction indicator */}
                           <span>
                              {column.isSorted
                                 ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                 : ''}
                           </span>
                           {/* Render the columns filter UI */}
                           <div className={column.canFilter ? '' : 'w-0'}>
                              {column.canFilter
                                 ? column.render('Filter')
                                 : null}
                           </div>
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row) => {
                  prepareRow(row);
                  return (
                     <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                           return (
                              <td
                                 {...cell.getCellProps()}
                                 className='p-1 border border-solid 
                                                  border-gray-400 text-right'>
                                 {cell.render('Cell')}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={columns?.length}>
                     <TablePagination
                        gotoPage={gotoPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        canPreviousPage={canPreviousPage}
                        canNextPage={canNextPage}
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                        pageOptions={pageOptions}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                     />
                  </td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};

export default OrdersTable;

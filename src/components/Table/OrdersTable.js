import React, { useMemo, useCallback, useState, useEffect } from 'react';
import moment from 'moment';
import {
   useTable,
   usePagination,
   useSortBy,
   useGlobalFilter,
} from 'react-table';
import TablePagination from './TablePagination/TablePagination';
import GlobalFilter from './GlobalFilter/GlobalFilter';

const OrdersTable = () => {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);
   const [controlledPageCount, setControlledPageCount] = useState(0);

   const columns = useMemo(
      () => [
         {
            Header: 'תאריך הזמנה',
            accessor: 'orderDate',
            width: '10%',
            Cell: (orderDate) => {
               return moment(orderDate.value).format('DD/MM/yyyy');
            },
         },
         {
            Header: 'מספר הזמנה',
            accessor: 'orderNumber',
            width: '10%',
         },
         {
            Header: 'תיאור העבודה',
            accessor: 'job',
         },
         {
            Header: 'מספר חוזה',
            accessor: 'contractNumber',
            width: '10%',
         },
         {
            Header: 'סעיף תקציבי',
            accessor: 'budgetItem',
            width: '10%',
         },
         {
            Header: 'קבלן מבצע',
            accessor: 'doneByConstructor',
            width: '15%',
         },
      ],
      []
   );

   const initState = useMemo(
      () => ({
         sortBy: [
            {
               id: 'orderNumber',
               desc: false,
            },
         ],
         pageIndex: 0,
      }),
      []
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      preGlobalFilteredRows,
      setGlobalFilter,

      visibleColumns,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize, sortBy, globalFilter },
   } = useTable(
      {
         columns,
         data,
         initialState: initState,
         disableSortRemove: true,
         manualPagination: true,
         manualGlobalFilter: true,
         manualFilters: true,
         manualSortBy: true,
         pageCount: controlledPageCount,
      },
      useGlobalFilter,
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
               setData([...jsonData.orders]);
               setControlledPageCount(
                  Math.ceil(jsonData.totalOrdersNumber / pageSize)
               );
               setLoading(false);
            });
      },
      []
   );

   useEffect(() => {
      let filter = '';

      if (globalFilter) {
         filter = globalFilter;
      }

      fetchData(pageIndex, pageSize, sortBy[0].id, sortBy[0].desc, filter);
      // eslint-disable-next-line
   }, [fetchData, pageIndex, pageSize, sortBy, globalFilter]);

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
               <tr>
                  <th colSpan={visibleColumns.length}>
                     <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                     />
                  </th>
               </tr>
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
               <tr>
                  {loading ? (
                     <td colSpan={visibleColumns.length}>טוען.....</td>
                  ) : (
                     <td colSpan={visibleColumns.length}>
                        <span className='font-semibold'>
                           מציג {page.length} מתוך{' '}
                           {controlledPageCount * pageSize} תוצאות
                        </span>
                     </td>
                  )}
               </tr>
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

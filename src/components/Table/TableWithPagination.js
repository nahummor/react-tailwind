import React, { useMemo, useState } from 'react';

import {
   useTable,
   useSortBy,
   useGlobalFilter,
   useFilters,
   usePagination,
} from 'react-table';
import GlobalFilter from './GlobalFilter/GlobalFilter';
import DefaultColumnFilter from './ColumnFilters/DefaultColumnFilter/DefaultColumnFilter';
import SelectColumnFilter from './ColumnFilters/SelectColumnFilter/SelectColumnFilter';
import NumberRangeColumnFilter from './ColumnFilters/NumberRangeColumnFilter/NumberRangeColumnFilter';
import TablePagination from './TablePagination/TablePagination';

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
   return rows.filter((row) => {
      const rowValue = row.values[id];
      return rowValue >= filterValue;
   });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

export const TableWithPagination = () => {
   const [tableData, setTableDate] = useState([]);

   useMemo(() => {
      const todos = [];
      const cities = [
         'באר שבע',
         'תל אביב',
         'ירושלים',
         'ערד',
         'חיפה',
         'טבריה',
         'מודיעין',
         'אשדוד',
         'אשקלון',
         'גן יבנה',
      ];
      let x;

      fetch('https://jsonplaceholder.typicode.com/todos')
         .then((response) => response.json())
         .then((jsonData) => {
            jsonData.forEach((todo) => {
               todo.cost = Math.floor(Math.random() * 1000) + 1; // random number from 1 to 1000
               x = Math.floor(Math.random() * 9);
               todo.city = cities[x];
               todo.completed = todo.completed ? 'כן' : 'לא';
               todos.push(todo);
            });
            console.log(todos[0]);
            setTableDate([...todos]);
         });
   }, []);

   const columns = useMemo(
      () => [
         {
            Header: 'מסד',
            accessor: 'id', // accessor is the "key" in the data
            disableFilters: true,
            disableSortBy: true,
            Footer: (info) => {
               const count = useMemo(() => {
                  return info.rows.length;
               }, [info.rows]);
               return (
                  <>
                     כמות משתמשים: <span>{count}</span>{' '}
                  </>
               );
            },
         },
         {
            Header: 'מסד משתמש',
            accessor: 'userId',
            Filter: SelectColumnFilter,
            filter: 'equal',
         },
         {
            Header: 'תיאור',
            accessor: 'title',
         },
         {
            Header: 'מחיר',
            accessor: 'cost',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
            Footer: (info) => {
               const total = useMemo(() => {
                  return info.rows.reduce(
                     (sum, row) => row.values.cost + sum,
                     0
                  );
               }, [info.rows]);
               return (
                  <>
                     סה"כ:
                     <span className='font-bold underline mr-1'>
                        &#8362;{total}
                     </span>
                  </>
               );
            },
         },
         {
            Header: 'עיר',
            accessor: 'city',
            Filter: SelectColumnFilter,
            filter: 'equal',
         },
         {
            Header: 'הושלם',
            accessor: 'completed',
            Filter: SelectColumnFilter,
            filter: 'includes',
         },
      ],
      []
   );

   const initState = useMemo(
      () => ({
         sortBy: [
            {
               id: 'col1',
               desc: false,
            },
         ],
         pageIndex: 0,
      }),
      []
   );

   const defaultColumn = useMemo(
      () => ({
         // Let's set up our default Filter UI
         Filter: DefaultColumnFilter,
      }),
      []
   );

   const filterTypes = useMemo(
      () => ({
         // Or, override the default text filter to use
         // "startWith"
         startWith: (rows, id, filterValue) => {
            return rows.filter((row) => {
               const rowValue = row.values[id];
               return rowValue !== undefined
                  ? String(rowValue)
                       .toLowerCase()
                       .startsWith(String(filterValue).toLowerCase())
                  : true;
            });
         },
      }),
      []
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      footerGroups,
      //    rows,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
      preGlobalFilteredRows,
      state,
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
      state: { pageIndex, pageSize },
   } = useTable(
      {
         columns,
         data: tableData,
         defaultColumn, // Be sure to pass the defaultColumn option
         filterTypes,
         initialState: initState,
         disableSortRemove: true,
      },
      useFilters, // useFilters!
      useGlobalFilter,
      useSortBy,
      usePagination
   );

   return (
      <div className='p-2 flex flex-row justify-center'>
         <table
            dir='rtl'
            {...getTableProps()}
            className='shadow-2xl border-2 border-teal-500'>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th
                           {...column.getHeaderProps(
                              column.getSortByToggleProps()
                           )}
                           className='border-b-2 border-red-500 
                                      bg-blue-200 text-gray-700
                                      font-semibold w-32 text-right
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
                           <div>
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
                        globalFilter={state.globalFilter}
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
            </tbody>

            <tfoot>
               {footerGroups.map((group) => (
                  <tr {...group.getFooterGroupProps()}>
                     {group.headers.map((column) => (
                        <td
                           {...column.getFooterProps()}
                           className='border-b-2 border-red-500 
                                            bg-blue-200 text-gray-700
                                            font-semibold text-right'>
                           {column.render('Footer')}
                        </td>
                     ))}
                  </tr>
               ))}
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

export default TableWithPagination;

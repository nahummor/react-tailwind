import React, { useMemo, useEffect } from 'react';

import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import GlobalFilter from './GlobalFilter/GlobalFilter';
import DefaultColumnFilter from './ColumnFilters/DefaultColumnFilter/DefaultColumnFilter';
import SelectColumnFilter from './ColumnFilters/SelectColumnFilter/SelectColumnFilter';
import NumberRangeColumnFilter from './ColumnFilters/NumberRangeColumnFilter/NumberRangeColumnFilter';
import SliderColumnFilter from './ColumnFilters/SliderColumnFilter/SliderColumnFilter';

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

const Table = () => {
   const data = useMemo(
      () => [
         {
            col1: 'שלום',
            col2: 'דדון',
            age: 22,
            cost: 15,
            city: 'באר שבע',
            remark: 'fgfhh',
         },
         {
            col1: 'אבי',
            col2: 'כהן',
            age: 47,
            cost: 27,
            city: 'ירושלים',
            remark: 'ffgjgj',
         },
         {
            col1: 'דני',
            col2: 'שמש',
            age: 52,
            cost: 130,
            city: 'תל אביב',
            remark: 'fgjfgj',
         },
         {
            col1: 'יורם',
            col2: 'ששון',
            age: 33,
            cost: 12,
            city: 'באר שבע',
            remark: 'fgjgfj',
         },
         {
            col1: 'שמשון',
            col2: 'לוי',
            age: 68,
            cost: 45,
            city: 'אשקלון',
            remark: 'dfgjdgjdfgj',
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: 'פרטים',
            Footer: 'פרטים',
            columns: [
               {
                  Header: 'שם פרטי',
                  accessor: 'col1', // accessor is the "key" in the data
                  Footer: 'שם פרטי',
                  filter: 'startWith',
               },
               {
                  Header: 'שם משפחה',
                  accessor: 'col2',
                  Footer: 'שם משפחה',
               },
               {
                  Header: 'גיל',
                  accessor: 'age',
                  Footer: 'גיל',
                  Filter: SliderColumnFilter,
                  //   filter: 'equals',
                  filter: filterGreaterThan,
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
                  Footer: 'עיר',
                  Filter: SelectColumnFilter,
                  filter: 'includes',
               },
               {
                  Header: 'הערה',
                  accessor: 'remark',
                  disableFilters: true,
                  disableSortBy: true,
               },
            ],
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
      footerGroups,
      rows,
      prepareRow,
      preGlobalFilteredRows,
      state,
      setGlobalFilter,
      visibleColumns,
   } = useTable(
      {
         columns,
         data,
         defaultColumn, // Be sure to pass the defaultColumn option
         filterTypes,
         initialState: initState,
         disableSortRemove: true,
      },
      useFilters, // useFilters!
      useGlobalFilter,
      useSortBy
   );

   useEffect(() => {
      console.log('Filter: ', state.filters);
      console.log('state: ', state);
   }, [state.filters, state]);

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
                  <th colSpan={visibleColumns.length} className='text-right'>
                     <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                     />
                  </th>
               </tr>
            </thead>

            <tbody {...getTableBodyProps()}>
               {rows.map((row) => {
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
            </tfoot>
         </table>
      </div>
   );
};

export default Table;

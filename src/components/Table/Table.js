import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const Table = () => {
   const data = useMemo(
      () => [
         {
            col1: 'שלום',
            col2: 'דדון',
            col3: 15,
            city: 'באר שבע',
         },
         {
            col1: 'אבי',
            col2: 'כהן',
            col3: 27,
            city: 'ירושלים',
         },
         {
            col1: 'דני',
            col2: 'שמש',
            col3: 130,
            city: 'תל אביב',
         },
         {
            col1: 'יורם',
            col2: 'ששון',
            col3: 12,
            city: 'באר שבע',
         },
         {
            col1: 'שמשון',
            col2: 'לוי',
            col3: 45,
            city: 'אשקלון',
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
               },
               {
                  Header: 'שם משפחה',
                  accessor: 'col2',
                  Footer: 'שם משפחה',
               },
               {
                  Header: 'מחיר',
                  accessor: 'col3',
                  Footer: (info) => {
                     const total = useMemo(() => {
                        return info.rows.reduce(
                           (sum, row) => row.values.col3 + sum,
                           0
                        );
                     }, [info.rows]);
                     return <>סה"כ: {total} </>;
                  },
               },
               {
                  Header: 'עיר',
                  accessor: 'city',
                  Footer: 'עיר',
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

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
   } = useTable(
      {
         columns,
         data,
         initialState: initState,
         disableSortRemove: true,
      },
      useSortBy
   );

   return (
      <div className='p-2  flex flex-row justify-center'>
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
                           {/* Add a sort direction indicator */}
                           {column.render('Header')}
                           <span>
                              {column.isSorted
                                 ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                 : ''}
                           </span>
                        </th>
                     ))}
                  </tr>
               ))}
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
                                      font-semibold text-center'>
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

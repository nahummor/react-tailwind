import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const Table = () => {
   const data = useMemo(
      () => [
         {
            col1: 'Hello',
            col2: 'World',
         },
         {
            col1: 'react-table',
            col2: 'rocks',
         },
         {
            col1: 'whatever',
            col2: 'you want',
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
            ],
         },
      ],
      []
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
   } = useTable({ columns, data });

   return (
      <div className='p-2  flex flex-row justify-center'>
         <table className='shadow-2xl border-2 border-teal-500'>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th
                           {...column.getHeaderProps()}
                           className='border-b-2 border-red-500 
                                      bg-blue-200 text-gray-700
                                      font-semibold '>
                           {column.render('Header')}
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
                                 style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                    background: 'papayawhip',
                                 }}>
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

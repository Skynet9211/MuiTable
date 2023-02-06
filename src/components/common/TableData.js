import React from 'react';
import { useTable } from 'react-table';
import Tooltip from '@mui/material/Tooltip';

const TableData = ({ data, columns, isFooter, isTooltip }) => {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } =
      useTable({
         columns,
         data,
      });
   return (
      <table
         style={{ fontSize: '14px', borderColor: '#d5e0f0', borderCollapse: 'collapse' }}
         {...getTableProps()}
         className={'table table-hover'}
      >
         <thead>
            {headerGroups.map(headerGroup => (
               <tr
                  style={{ backgroundColor: '#eff4fa', color: '#8f9bb3', height: '30px' }}
                  {...headerGroup.getHeaderGroupProps()}
               >
                  {headerGroup.headers.map((column, i) => (
                     <th
                        style={{
                           width: column.width,
                           borderRight: i === columns.length - 1 ? 'hidden' : '1px solid #d5e0f0',
                        }}
                        {...column.getHeaderProps()}
                     >
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
               prepareRow(row);
               return (
                  <tr
                     style={{ borderBottom: '1px solid #d5e0f0', height: '30px' }}
                     {...row.getRowProps()}
                  >
                     {row.cells.map((cell, i) => {
                        return (
                           <td
                              style={{
                                 color:
                                    (i === 2 && cell.row.original?.actual == 1) ||
                                    (i === 2 && cell.row.original?.actual == 4) ||
                                    (i === 2 && cell.row.original?.actual == 2)
                                       ? 'blue'
                                       : 'inherit',
                                 paddingLeft: '10px',
                                 borderRight:
                                    i === columns.length - 1 ? 'hidden' : '1px solid #d5e0f0',
                              }}
                              {...cell.getCellProps()}
                           >
                              {isTooltip ? (
                                 <Tooltip title={cell.row.original.appointments}>
                                    {cell.render('Cell')}
                                 </Tooltip>
                              ) : (
                                 cell.render('Cell')
                              )}
                           </td>
                        );
                     })}
                  </tr>
               );
            })}
         </tbody>
         {isFooter && (
            <tfoot>
               {footerGroups.map(footerGroup => (
                  <tr
                     style={{ backgroundColor: '#eff4fa', color: '#8f9bb3', height: '35px' }}
                     {...footerGroup.getFooterGroupProps()}
                  >
                     {footerGroup.headers.map((column, i) => (
                        <td
                           style={{
                              width: column.width,
                              borderRight:
                                 i === columns.length - 1 ? 'hidden' : '1px solid #d5e0f0',
                              textAlign: 'center',
                              fontWeight: 600,
                           }}
                           {...column.getFooterProps}
                        >
                           {column.render('Footer')}
                        </td>
                     ))}
                  </tr>
               ))}
            </tfoot>
         )}
      </table>
   );
};

export default TableData;

import React, { useState } from 'react';
import { data } from '../../../data/Clinic profitability/clinicprofitabilityData';
import { useExpanded, useGroupBy, useTable } from 'react-table';
import _ from 'lodash';
import numeral from 'numeral';
import { Modal } from '@mui/material';
import ModalProfit from './modal';

const FakeClinicProfitData = ({ selectValue }) => {
   const [linkCategory, setLinkCategory] = useState(null);

   const _onLinkClick = category => {
      setLinkCategory(category);
   };

   const getPercentageAmount = (amount, totalRevenue) => {
      if (totalRevenue && totalRevenue) {
         return (amount / totalRevenue) * 100;
      } else {
         return 0;
      }
   };

   const getNumericValue = (value, isDecimal) => {
      let val = 0;
      if (isDecimal) {
         val = value < 0 ? numeral(value).format('(0,0.0)') : numeral(value).format('0,0.0');
      } else {
         val = value < 0 ? numeral(value).format('(0,0)') : numeral(value).format('0,0');
      }
      return val;
   };

   const getEBITDARange = value => {
      switch (value) {
         case 'Lossmaking':
            return '<0';
         case 'Marginal':
            return '0-15%';
         case 'OK':
            return '>15-25%';
         case 'gOOD':
         case 'Good':
            return '>25-35%';
         case 'Outstanding':
            return '>35%';
      }
   };

   const getCategory = (value, widthAuto) => {
      switch (value) {
         case 'Lossmaking':
            return (
               <div
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#FF7378',
                     borderRadius: 8,
                     fontSize: 14,
                     lineHeight: '18px',
                     padding: '1px 5px',
                     color: '#fff',
                  }}
               >
                  {'Lossmaking'}
               </div>
            );
         case 'Marginal':
            return (
               <div
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#FFB300',
                     borderRadius: 8,
                     fontSize: 14,
                     lineHeight: '18px',
                     padding: '1px 5px',
                     color: '#fff',
                  }}
               >
                  {'Marginal'}
               </div>
            );
         case 'OK':
            return (
               <div
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#00B1FF',
                     borderRadius: 8,
                     fontSize: 14,
                     lineHeight: '18px',
                     padding: '1px 5px',
                     color: '#fff',
                  }}
               >
                  {'OK'}
               </div>
            );
         case 'gOOD':
         case 'Good':
            return (
               <div
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#77BD76',
                     borderRadius: 8,
                     fontSize: 14,
                     lineHeight: '18px',
                     padding: '1px 5px',
                     color: '#fff',
                  }}
               >
                  {'Good'}
               </div>
            );
         case 'Outstanding':
            return (
               <div
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#60945F',
                     borderRadius: 8,
                     fontSize: 14,
                     lineHeight: '18px',
                     padding: '1px 5px',
                     color: '#fff',
                  }}
               >
                  {'Outstanding'}
               </div>
            );
         default:
            return value;
      }
   };

   const columns = React.useMemo(
      () => [
         {
            accessor: 'c',
            Footer: '',
            minWidth: 220,
         },
         {
            accessor: 'clinic',
            Footer: 'Totals',
            minWidth: 220,
         },
         {
            Header: 'EBITDA Range',
            id: 'EBITDARange',
            accessor: 'catId',
            minWidth: 120,
            Aggregated: info => {
               return getEBITDARange(info.row.values.c);
            },
            Footer: '',
         },
         {
            Header: ' Clinics',
            id: 'cidNo',
            accessor: 'cid',
            aggregate: data => _.uniq(data).length,
            minWidth: 90,
            Aggregated: info => {
               return info.value ? (
                  <span className='data-link' style={{ cursor: 'pointer', color: 'blue' }}>
                     {info.value}
                  </span>
               ) : (
                  ''
               );
            },
            Footer: info => {
               const groupedData = _.filter(info.rows, r => r.isGrouped === true);
               const total = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.values.cidNo + sum, 0),
                  [groupedData]
               );
               return (
                  <>
                     {total ? (
                        <span
                           className='data-link'
                           onClick={() => _onLinkClick('All')}
                           style={{ cursor: 'pointer', color: 'blue' }}
                        >
                           {total}
                        </span>
                     ) : (
                        ''
                     )}
                  </>
               );
            },
         },
         {
            Header: '% of total',
            id: 'totalPer',
            accessor: 'cidNo',
            aggregate: 'count',
            minWidth: 90,
            Aggregated: info => {
               const totalCid = React.useMemo(
                  () => info.rows.reduce((sum, row) => row.values.cidNo + sum, 0),
                  [info.rows]
               );
               const cidPer = getPercentageAmount(info.value, totalCid);
               return cidPer ? (
                  cidPer < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(cidPer, true)}</span>
                  ) : (
                     getNumericValue(cidPer, true)
                  )
               ) : (
                  ''
               );
            },
            Footer: '',
         },
         {
            Header: 'Revenue $',
            id: 'rev$',
            accessor: 'r',
            minWidth: 90,
            Aggregated: info => {
               const groupedData = _.filter(
                  _.filter(info.flatRows, f => !f.isGrouped),
                  r => {
                     return r.original.c == info.row.values.c;
                  }
               );
               const value = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.r + sum, 0),
                  [groupedData]
               );
               return value ? (
                  value < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(value)}</span>
                  ) : (
                     getNumericValue(value)
                  )
               ) : (
                  ''
               );
            },
            Footer: info => {
               const groupedData = _.filter(info.flatRows, f => !f.isGrouped);
               const total = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.r + sum, 0),
                  [groupedData]
               );
               return (
                  <>
                     {total ? (
                        total < 0 ? (
                           <span style={{ color: 'red' }}>{getNumericValue(total)}</span>
                        ) : (
                           getNumericValue(total)
                        )
                     ) : (
                        ''
                     )}
                  </>
               );
            },
         },
         {
            Header: '% Total Rev',
            id: '%TotRev',
            accessor: 'r',
            minWidth: 100,
            aggregate: 'sum',
            Aggregated: info => {
               const groupedData = _.filter(
                  _.filter(info.flatRows, f => !f.isGrouped),
                  r => {
                     return r.original.c == info.row.values.c;
                  }
               );
               const value = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.r + sum, 0),
                  [groupedData]
               );
               const groupedDataTotal = _.filter(info.flatRows, f => !f.isGrouped);
               const total = React.useMemo(
                  () => groupedDataTotal.reduce((sum, row) => row.original.r + sum, 0),
                  [groupedDataTotal]
               );
               const revPer =
                  info.row.values.c === 'Lossmaking' ? null : getPercentageAmount(value, total);
               return revPer ? (
                  revPer < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(revPer, true)}</span>
                  ) : (
                     getNumericValue(revPer, true)
                  )
               ) : (
                  ''
               );
            },
            Footer: '',
         },
         {
            Header: 'EBITDA $',
            id: 'EBITDA$',
            accessor: 'e',
            minWidth: 90,
            Aggregated: info => {
               const groupedData = _.filter(
                  _.filter(info.flatRows, f => !f.isGrouped),
                  r => {
                     return r.original.c == info.row.values.c;
                  }
               );
               const value = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.e + sum, 0),
                  [groupedData]
               );
               return value ? (
                  value < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(value)}</span>
                  ) : (
                     getNumericValue(value)
                  )
               ) : (
                  ''
               );
            },
            Footer: info => {
               const groupedData = _.filter(info.flatRows, f => !f.isGrouped);
               const total = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.e + sum, 0),
                  [groupedData]
               );
               return (
                  <>
                     {total ? (
                        total < 0 ? (
                           <span style={{ color: 'red' }}>{getNumericValue(total)}</span>
                        ) : (
                           getNumericValue(total)
                        )
                     ) : (
                        ''
                     )}
                  </>
               );
            },
         },
         {
            Header: '% Total EBITDA',
            id: '%TotEBITDA',
            accessor: 'e',
            minWidth: 130,
            Aggregated: info => {
               const groupedData = _.filter(
                  _.filter(info.flatRows, f => !f.isGrouped),
                  r => {
                     return r.original.c == info.row.values.c;
                  }
               );
               const value = React.useMemo(
                  () => groupedData.reduce((sum, row) => row.original.e + sum, 0),
                  [groupedData]
               );
               const groupedDataTotal = _.filter(info.flatRows, f => !f.isGrouped);
               const total = React.useMemo(
                  () => groupedDataTotal.reduce((sum, row) => row.original.e + sum, 0),
                  [groupedDataTotal]
               );
               const revPer =
                  info.row.values.c === 'Lossmaking' ? null : getPercentageAmount(value, total);
               return revPer ? (
                  revPer < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(revPer, true)}</span>
                  ) : (
                     getNumericValue(revPer, true)
                  )
               ) : (
                  ''
               );
            },
            Footer: '',
         },
      ],
      []
   );

   const renderCell = (cell, rows) => {
      switch (cell.column.id) {
         case 'c':
            return <div className={'truncate-text'}>{getCategory(cell.value)}</div>;
         default:
            return <div className={'truncate-text'}>{cell.render('Cell')}</div>;
      }
   };
   const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
      useTable(
         {
            columns: selectValue === 1 ? columns : columns,
            data,
            autoResetExpanded: false,
            initialState: {
               groupBy: ['c'],
               hiddenColumns:
                  selectValue === 1
                     ? ['EBITDA$', 'rev$']
                     : selectValue === 2
                     ? ['%TotEBITDA', 'EBITDARange']
                     : [''],
            },
         },
         useGroupBy,

         useExpanded
      );

   return (
      <div id={'clinicProfitability'}>
         <div>
            <table {...getTableProps()} className={'table-hover mb-0'}>
               <thead>
                  {headerGroups.map((headerGroup, i) => {
                     const trWidthHeader = _.reduce(
                        headerGroup.headers,
                        (a, b) => {
                           a = a + b.minWidth;
                           return a;
                        },
                        0
                     );
                     return (
                        <tr
                           {...headerGroup.getHeaderGroupProps()}
                           style={{
                              height: 30,
                              top: 0,
                              width: trWidthHeader - 220,
                           }}
                        >
                           {headerGroup.headers.map((column, index) => {
                              if (index === 0)
                                 return <React.Fragment key={'td_head' + index}></React.Fragment>;
                              const { render, getHeaderProps } = column;

                              return (
                                 <th
                                    {...getHeaderProps()}
                                    style={{
                                       width: column.minWidth ? column.minWidth : 0,
                                       minWidth: column.minWidth ? column.minWidth : 0,
                                    }}
                                 >
                                    {render('Header')}
                                 </th>
                              );
                           })}
                        </tr>
                     );
                  })}
               </thead>
               <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                     prepareRow(row);
                     const trWidthBody = _.reduce(
                        row.cells,
                        (a, b) => {
                           a = a + b.column.minWidth;
                           return a;
                        },
                        0
                     );
                     return (
                        <tr
                           {...row.getRowProps()}
                           style={{ width: trWidthBody - 220 }}
                           className={'sticky-row'}
                        >
                           {row.cells.map((cell, index) => {
                              if (cell.row.groupByID === 'c' && index === 1)
                                 return <React.Fragment key={'td_' + index}></React.Fragment>;
                              if (cell.isGrouped) {
                                 return (
                                    <th
                                       style={
                                          cell.row.isGrouped
                                             ? {
                                                  background: '#FFF',
                                                  width: cell.column.minWidth,
                                                  minWidth: cell.column.minWidth,
                                                  fontWeight: 600,
                                                  paddingLeft:
                                                     cell.row.groupByID === 'c' ? '.75rem' : '2rem',
                                               }
                                             : {
                                                  background: '#FFF',
                                                  width: cell.column.minWidth,
                                                  minWidth: cell.column.minWidth,
                                                  cursor: 'auto',
                                                  paddingLeft:
                                                     cell.row.groupByID === 'c' ? '.75rem' : '2rem',
                                               }
                                       }
                                       {...cell.getCellProps()}
                                    >
                                       {renderCell(cell, rows)}
                                    </th>
                                 );
                              } else {
                                 if (index === 0)
                                    return (
                                       <React.Fragment key={'td_tbody' + index}></React.Fragment>
                                    );
                                 if (index === 1) {
                                    return (
                                       <th
                                          colSpan={3}
                                          style={{
                                             background: '#FFF',
                                             paddingLeft: '4rem',
                                             width: cell.column.minWidth,
                                             minWidth: cell.column.minWidth,
                                          }}
                                          // For educational purposes, let's color the
                                          // cell depending on what type it is given
                                          // from the useGroupBy hook
                                          {...cell.getCellProps()}
                                       >
                                          {cell.isAggregated ? (
                                             // If the cell is aggregated, use the Aggregated
                                             // renderer for cell
                                             cell.render('Aggregated')
                                          ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                                             // Otherwise, just render the regular cell
                                             <>{renderCell(cell, rows)}</>
                                          )}
                                       </th>
                                    );
                                 } else {
                                    return (
                                       <td
                                          style={{
                                             background: '#FFF',
                                             cursor: 'auto',
                                             width: cell.column.minWidth,
                                             minWidth: cell.column.minWidth,
                                          }}
                                          {...cell.getCellProps()}
                                       >
                                          {cell.isAggregated
                                             ? cell.render('Aggregated')
                                             : cell.isPlaceholder
                                             ? null
                                             : renderCell(cell, rows)}
                                       </td>
                                    );
                                 }
                              }
                           })}
                        </tr>
                     );
                  })}
                  {footerGroups.map((group, index) => {
                     if (index === 0) {
                        const trWidthFooter = _.reduce(
                           group.headers,
                           (a, b) => {
                              a = a + b.minWidth;
                              return a;
                           },
                           0
                        );
                        return (
                           <tr
                              {...group.getFooterGroupProps()}
                              style={{ width: trWidthFooter - 220 }}
                           >
                              {group.headers.map((column, index) => {
                                 if (index === 0)
                                    return (
                                       <React.Fragment key={'td_foot' + index}></React.Fragment>
                                    );
                                 if (index === 1) {
                                    return (
                                       <th
                                          style={{
                                             width: column.minWidth,
                                             minWidth: column.minWidth,
                                             fontWeight: 600,
                                             background: '#EFF4FA',
                                             paddingLeft: 20,
                                          }}
                                          {...column.getFooterProps()}
                                       >
                                          {column.render('Footer')}
                                       </th>
                                    );
                                 } else {
                                    return (
                                       <td
                                          style={{
                                             width: column.minWidth,
                                             minWidth: column.minWidth,
                                             fontWeight: 600,
                                             background: '#EFF4FA',
                                          }}
                                          {...column.getFooterProps()}
                                       >
                                          {column.render('Footer')}
                                       </td>
                                    );
                                 }
                              })}
                           </tr>
                        );
                     } else {
                        return <React.Fragment key={'td_foot' + index}></React.Fragment>;
                     }
                  })}
               </tbody>
            </table>
         </div>
         <ModalProfit open={linkCategory} setLinkCategory={setLinkCategory} />
      </div>
   );
};

export default FakeClinicProfitData;

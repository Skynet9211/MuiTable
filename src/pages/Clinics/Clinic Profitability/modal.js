import React from 'react';
import _ from 'lodash';
import numeral from 'numeral';
import { useTable, useSortBy, useGroupBy, useExpanded } from 'react-table';
import { modalData as data } from '../../../data/Clinic profitability/cliniprofitabilityModalData';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Chip } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Button from '@mui/material/Button';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppTwoTone';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
   },
   '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
   },
}));

function BootstrapDialogTitle(props) {
   const { children, onClose, ...other } = props;

   return (
      <DialogTitle sx={{ m: 0, p: 2 }} height='65px' {...other}>
         {children}

         {onClose ? (
            <IconButton
               aria-label='close'
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  right: 1,
                  top: -1,
                  color: theme => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
         ) : null}
      </DialogTitle>
   );
}

const getNumericValue = (value, isDecimal) => {
   let val = 0;
   if (isDecimal) {
      val = value < 0 ? numeral(value).format('(0,0.0)') : numeral(value).format('0,0.0');
   } else {
      val = value < 0 ? numeral(value).format('(0,0)') : numeral(value).format('0,0');
   }
   return val;
};

const ModalProfit = props => {
   const columns = React.useMemo(
      () => [
         {
            Header: 'Clinic',
            accessor: 'clinic',
            Footer: '',
            minWidth: 195,
         },
         {
            Header: 'Region',
            accessor: 'region',
            aggregate: v => v[0],
            Footer: 'Totals',
            minWidth: 150,
         },
         {
            Header: 'Category',
            accessor: 'catId',
            aggregate: v => v[0],
            Footer: '',
            minWidth: 100,
            width: 200,
         },
         {
            Header: 'Revenue $',
            id: 'rev$',
            accessor: 'r',
            minWidth: 120,
            aggregate: 'sum',
            Aggregated: info => {
               return info.value ? (
                  info.value < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(info.value)}</span>
                  ) : (
                     getNumericValue(info.value)
                  )
               ) : (
                  ''
               );
            },
            sortType: (a, b, colId, isDesc) => {
               return a.values[colId] > b.values[colId] ? 1 : -1;
            },
            Footer: info => {
               const total = React.useMemo(
                  () => info.rows.reduce((sum, row) => row.values.rev$ + sum, 0),
                  [info.rows]
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
            Header: 'EBITDA $',
            id: 'EBITDA$',
            accessor: 'e',
            minWidth: 120,
            aggregate: 'sum',
            Aggregated: info => {
               return info.value ? (
                  info.value < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(info.value)}</span>
                  ) : (
                     getNumericValue(info.value)
                  )
               ) : (
                  ''
               );
            },
            sortType: (a, b, colId, isDesc) => {
               return a.values[colId] > b.values[colId] ? 1 : -1;
            },
            Footer: info => {
               const total = React.useMemo(
                  () => info.rows.reduce((sum, row) => row.values.EBITDA$ + sum, 0),
                  [info.rows]
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
            Header: 'EBITDA %',
            id: 'EBITDAPer',
            accessor: 'ep',
            minWidth: 120,
            aggregate: 'sum',
            Aggregated: info => {
               return info.value ? (
                  info.value < 0 ? (
                     <span style={{ color: 'red' }}>{getNumericValue(info.value)}</span>
                  ) : (
                     getNumericValue(info.value)
                  )
               ) : (
                  ''
               );
            },
            sortType: (a, b, colId, isDesc) => {
               return a.values[colId] > b.values[colId] ? 1 : -1;
            },
            Footer: '',
         },
      ],
      [props.clinicGroupByLabel]
   );

   const getCategory = (value, widthAuto) => {
      switch (value) {
         case 1:
            return (
               <Chip
                  label={'LossMaking'}
                  sx={{ backgroundColor: '#ff7874', color: '#fff', width: widthAuto ? 'auto' : 90 }}
                  size='small'
               />
            );
         case 2:
            return (
               <Chip
                  sx={{
                     background: '#FFB300',
                     width: widthAuto ? 'auto' : 90,
                     color: '#fff',
                  }}
                  label='Marginal'
                  size='small'
               />
            );
         case 3:
            return (
               <Chip
                  sx={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#00B1FF',

                     color: '#fff',
                  }}
                  label={'OK'}
                  size='small'
               />
            );
         case 4:
            return (
               <Chip
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#77BD76',
                     color: '#fff',
                  }}
                  label={'Good'}
                  size='small'
               />
            );
         case 5:
            return (
               <Chip
                  style={{
                     width: widthAuto ? 'auto' : 90,
                     background: '#60945F',

                     color: '#fff',
                  }}
                  label={'Outstanding'}
                  size='small'
               />
            );
         default:
            return value;
      }
   };

   const renderCell = (cell, rows) => {
      switch (cell.column.id) {
         case 'catId':
            return getCategory(cell.value);
         case 'rev$':
         case 'EBITDA$':
            let val = cell.value ? (
               cell.value < 0 ? (
                  <span style={{ color: 'red' }}>{getNumericValue(cell.value)}</span>
               ) : (
                  getNumericValue(cell.value)
               )
            ) : (
               0
            );
            return val;
         case 'EBITDAPer':
            let val1 = cell.value ? (
               cell.value < 0 ? (
                  <span style={{ color: 'red' }}>{getNumericValue(cell.value, true)}</span>
               ) : (
                  getNumericValue(cell.value, true)
               )
            ) : (
               0
            );
            return val1;
         default:
            return (
               <div style={{ width: cell.column.minWidth }} className={'truncate-text'}>
                  {cell.render('Cell')}
               </div>
            );
      }
   };

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
      {
         columns,
         data,
         autoResetExpanded: false,
         initialState: {
            groupBy: ['clinic'],
         },
      },
      useGroupBy,
      useSortBy,
      useExpanded
   );

   return (
      <div>
         <BootstrapDialog
            onClose={() => props.setLinkCategory(null)}
            aria-labelledby='customized-dialog-title'
            open={props.open}
            maxWidth='xl'
         >
            <BootstrapDialogTitle
               id='customized-dialog-title'
               onClose={() => props.setLinkCategory(null)}
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f8f9fa',
                  justifyContent: 'space-between',
               }}
            >
               <Typography variant='h4'>Grand Total Clinic Details</Typography>
               <Button variant='contained' sx={{ marginRight: '40px',boxShadow:'0px 5px 5px 0px rgb(85 195 142 / 24%)' }} color='primary'>
                  <GetAppTwoToneIcon />
                  Export
               </Button>
            </BootstrapDialogTitle>
            <DialogContent
               dividers
               sx={{ padding: '0px !important', margin: '0px !important', paddingLeft: '10px' }}
            >
               <table
                  {...getTableProps()}
                  className={'table-hover'}
                  style={{
                     margin: '0px',
                     padding: '0px',

                     borderCollapse: 'collapse',
                  }}
               >
                  <thead
                     style={{
                        color: '#666',
                        backgroundColor: '#fff',
                        position: 'sticky',
                        top: 0,
                        height: '40px',
                        padding: 0,
                        borderBottom: '2px solid rgb(231 231 231)',
                     }}
                  >
                     {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                           {headerGroup.headers.map(column => {
                              const { getHeaderProps, render } = column;

                              return (
                                 <th
                                    {...getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                       cursor: 'pointer',
                                       width: column.minWidth ? column.minWidth : column.width,
                                       minWidth: column.minWidth ? column.minWidth : 0,
                                       textAlign: 'left',
                                       alignItems: 'end',
                                       padding: 0,
                                    }}
                                 >
                                    {render('Header')}
                                    {column.isSorted ? (
                                       column.isSortedDesc ? (
                                          <NorthIcon
                                             color='primary'
                                             sx={{
                                                fontSize: '14px',
                                             }}
                                          />
                                       ) : (
                                          <SouthIcon
                                             color='primary'
                                             sx={{
                                                fontSize: '14px',
                                             }}
                                          />
                                       )
                                    ) : (
                                       ''
                                    )}
                                 </th>
                              );
                           })}
                        </tr>
                     ))}
                  </thead>
                  <tbody
                     style={{ height: 'calc(100vh - 291px)', borderCollapse: 'collapse' }}
                     {...getTableBodyProps()}
                  >
                     {rows.map(row => {
                        prepareRow(row);
                        return (
                           <tr
                              style={{ borderBottom: '1px solid rgb(231 231 231)' }}
                              {...row.getRowProps()}
                           >
                              {row.cells.map(cell => {
                                 return (
                                    <td
                                       style={{
                                          width: cell.column.width,
                                          minWidth: cell.column.minWidth,
                                          padding: '5px',
                                       }}
                                       {...cell.getCellProps()}
                                    >
                                       {renderCell(cell, rows)}
                                    </td>
                                 );
                              })}
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </DialogContent>
            <DialogActions
               sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  height: '40px',
                  fontWeight: '600',
                  backgroundColor: '#f8f9fa',
               }}
            >
               <div>Total Records:{rows.length}</div>
            </DialogActions>
         </BootstrapDialog>
      </div>
   );
};

export default ModalProfit;

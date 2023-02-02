import React from 'react';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';

const data = [
   {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      cc: 2000,
   },
   {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      cc: 2000,
   },
   {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
      cc: 2000,
   },
   {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      cc: 2000,
   },
   {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
      cc: 2000,
   },
   {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
      cc: 2000,
   },
   {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page H',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page I',
      uv: 3470,
      pv: 1300,
      amt: 2200,
      cc: 2070,
   },
   {
      name: 'Page J',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page K',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      cc: 2000,
   },
   {
      name: 'Page L',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      cc: 2000,
   },
];
const data2 = [
   {
      name: 'Page A',
      uv: 3000,
      pv: 3400,
      amt: -1400,
      cc: 2000,
   },
   {
      name: 'Page B',
      uv: 3200,
      pv: 1798,
      amt: 2310,
      cc: 2000,
   },
   {
      name: 'Page C',
      uv: 2500,
      pv: 8800,
      amt: -2260,
      cc: 2000,
   },
   {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      cc: 2000,
   },
   {
      name: 'Page E',
      uv: 1850,
      pv: 1800,
      amt: 6181,
      cc: 2000,
   },
   {
      name: 'Page F',
      uv: 1390,
      pv: 3500,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page H',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page I',
      uv: 3470,
      pv: 1300,
      amt: 2200,
      cc: 2070,
   },
   {
      name: 'Page J',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
   {
      name: 'Page K',
      uv: 3470,
      pv: 1300,
      amt: 2200,
      cc: 2070,
   },
   {
      name: 'Page L',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      cc: 2000,
   },
];

const FakeChart1 = ({ selectbar }) => {
   return (
      <ResponsiveContainer height='90%'>
         <BarChart
            data={selectbar === '# of Clinics' ? data : selectbar === 'Region' && data2}
            margin={{
               top: 20,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid display={'none'} />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' stackId='a' fill='#8884d8' />
            <Bar dataKey='amt' stackId='a' fill='#82ca9d' />
            <Bar dataKey='uv' stackId={'a'} fill='#ffc658' />
            <Bar dataKey='cc' stackId={'a'} fill='#11c858' />
         </BarChart>
      </ResponsiveContainer>
   );
};
export default FakeChart1;

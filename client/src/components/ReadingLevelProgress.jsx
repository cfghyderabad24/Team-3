import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { format, parseISO } from "date-fns";

const formatDate = (date) => {
  return format(parseISO(date), "MMM dd"); // Formats date as 'Jun 01, 2023'
};



export default function ReadingLevelProgress({data}) {
  return (
    <LineChart width={500} height={300} data={data} margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 50
    }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        tickFormatter={formatDate}
        padding={{ left: 30, right: 30 }}
        angle={-45}
        textAnchor="end"
        height={70}
        label={{ value: 'Date of Book Return', position: 'bottom', offset: 0, style: { textAnchor: 'middle' } }}
      />
      <YAxis label={{ value: 'Reading Level', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}/>
      <Tooltip labelFormatter={formatDate}/>
      
      <Line
        type="monotone"
        dataKey="level"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

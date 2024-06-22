import React, { useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, Text } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



export default function GenreAnalysis({data}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <div style={{textAlign: 'center'}}>
    
    <PieChart width={1000} height={600} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={500}
          cy={200}
          outerRadius={160}
        //   innerRadius={110}
          label={({ name }) => name}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              style={{
                opacity: index === activeIndex ? 0.5 : 1
              }}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
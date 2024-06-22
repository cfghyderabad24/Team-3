import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  CartesianGrid,
} from "recharts";

function BookLevelBarGraph(props) {
  return (
    <div>
    works
      <BarChart
        width={500}
        height={200}
        data={props.data}
        margin={{ top: 10, left: 10, right: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{
            value: "Level of Book",
            // position: "insideBottomRight",
            dy: 20,
            style: { textAnchor: "middle" },
          }}
        />
        <YAxis
          domain={[0, 5]}
          label={{
            value: "No. of Books",
            // position: "insideBottomRight",
            // dy: 15,
            style: { textAnchor: "middle" },
            angle: -90,
          }}
        />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="yellow" stroke="blue" />}
        />
      </BarChart>

    </div>
  );
}

export default BookLevelBarGraph;

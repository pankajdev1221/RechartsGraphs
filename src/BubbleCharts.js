import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from "recharts";

// Sample data for the bubble chart
const data = [
  { x: 10, y: 20, z: 100 },
  { x: 20, y: 30, z: 150 },
  { x: 30, y: 40, z: 200 },
  { x: 40, y: 50, z: 250 },
  { x: 50, y: 60, z: 300 },
];

const BubbleChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="X Axis" unit="unit" />
        <YAxis type="number" dataKey="y" name="Y Axis" unit="unit" />
        <ZAxis
          type="number"
          dataKey="z"
          name="Z Axis"
          unit="unit"
          range={[0, 200]}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Bubble Chart" data={data} fill="#8884d8" />

        <Line type="monotone" dataKey="y" stroke="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChart;

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", A: 4000, B: 2400, C: 2400 },
  { name: "Feb", A: 3000, B: 1398, C: 2210 },
  { name: "Mar", A: 2000, B: 9800, C: 2290 },
  { name: "Apr", A: 2780, B: 3908, C: 2000 },
  { name: "May", A: 1890, B: 4800, C: 2181 },
  { name: "Jun", A: 2390, B: 3800, C: 2500 },
  { name: "Jul", A: 3490, B: 4300, C: 2100 },
];

const StackedBarChartWithClick = () => {
  const [selectedData, setSelectedData] = useState(null);

  // Event handler for bar click
  const handleBarClick = (data, index) => {
    setSelectedData(data);
    console.log("Bar clicked:", data);
  };

  return (
    <div>
      <BarChart
        width={600}
        height={300}
        data={data}
        stackOffset="expand" // or "sign" for positive/negative stack
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="A"
          stackId="a"
          barSize={20}
          fill="#8884d8"
          onClick={(data, index) => handleBarClick(data, index)}
        />
        <Bar
          dataKey="B"
          stackId="a"
          fill="#82ca9d"
          barSize={20}
          onClick={(data, index) => handleBarClick(data, index)}
        />
        <Bar
          dataKey="C"
          stackId="a"
          fill="#ffc658"
          barSize={20}
          onClick={(data, index) => handleBarClick(data, index)}
        />
      </BarChart>

      {selectedData && (
        <div>
          <h4>Clicked Data:</h4>
          <p>Month: {selectedData.name}</p>
          <p>Value A: {selectedData.A}</p>
          <p>Value B: {selectedData.B}</p>
          <p>Value C: {selectedData.C}</p>
        </div>
      )}
    </div>
  );
};

export default StackedBarChartWithClick;

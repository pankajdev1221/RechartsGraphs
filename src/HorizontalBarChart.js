import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Page A", value: 4000 },
  { name: "Page B", value: 3000 },
  { name: "Page C", value: 2000 },
  { name: "Page D", value: 2780 },
  { name: "Page E", value: 1890 },
];

const HorizontalBarChart = () => {
  const [selectedBar, setSelectedBar] = useState(null);

  const handleBarClick = (data) => {
    setSelectedBar(data);
    console.log("Bar clicked:", data);
  };

  return (
    <div>
      <BarChart
        width={600}
        height={300}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" onClick={handleBarClick} />
      </BarChart>

      {selectedBar && (
        <div>
          <h4>Selected Bar:</h4>
          <p>Name: {selectedBar.name}</p>
          <p>Value: {selectedBar.value}</p>
        </div>
      )}
    </div>
  );
};

export default HorizontalBarChart;

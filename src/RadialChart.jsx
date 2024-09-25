import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Full Stack Developer", value: 554, color: "#d32f2f" },
  { name: "Another Role", value: 300, color: "#9575cd" },
  { name: "Role 3", value: 200, color: "#ffb74d" },
  { name: "Role 4", value: 150, color: "#4db6ac" },
  { name: "Role 5", value: 100, color: "#ff8a65" },
  { name: "Another Role", value: 30, color: "#9575cd" },
  { name: "Role 3", value: 20, color: "#ffb74d" },
  { name: "Role 4", value: 15, color: "#4db6ac" },
  { name: "Role 5", value: 10, color: "#ff8a65" },
  { name: "Role 6", value: 8, color: "#81c784" },
  // Add more roles as necessary
];

const RadialChart = () => {
  const totalRoadmaps = data.reduce((acc, curr) => acc + curr.value, 0);
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>{payload[0].name}</p>
          <p style={{ margin: 0 }}>Students: {payload[0].value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className=""
      style={{
        maxWidth: "550px",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={100}
            outerRadius={150}
            dataKey="value"
            paddingAngle={0}
            // label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <text
            x={200}
            y={200}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="26px"
            fontWeight="bold"
          >
            {totalRoadmaps}
          </text>
          <text
            x={200}
            y={220}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13px"
            fill="#8884d8"
          >
            Total Roadmaps Generated
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialChart;

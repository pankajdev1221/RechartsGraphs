import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
} from "recharts";

// Sample data
const data = [
  { subject: "Math", A: 90, B: 120 },
  { subject: "Chinese", A: 98, B: 90 },
  { subject: "English", A: 86, B: 85 },
  { subject: "Geography", A: 99, B: 86 },
  { subject: "Physics", A: 85, B: 90 },
  { subject: "History", A: 65, B: 80 },
];

const RadarChartComponent = () => {
  return (
    <div>
      <RadarChart width={500} height={500} outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Student A"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Student B"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Tooltip />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RadarChartComponent;

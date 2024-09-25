import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Top", value: 579 },
  { name: "Average", value: 333 },
  { name: "Below Average", value: 322 },
];

const COLORS = ["#A1E4C0", "#F3E393", "#F9BCC2"]; // Adjusted to match the colors in your image

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {/* {`${data[index].name}`} */}
    </text>
  );
};

const renderLegend = (props) => {
  const { payload } = props;
  console.log(payload);
  return (
    <ul>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            gap: ".5rem",
            padding: "0.35rem 0",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
            <div
              style={{
                background: entry.color,
                height: "15px",
                width: "15px",
                diaply: "inline-block",
              }}
            ></div>
            {entry.value}
          </div>

          <div>
            <span style={{ fontWeight: "bold" }}>{entry.payload.value} </span>
            Students
          </div>
        </li>
      ))}
    </ul>
  );
};

const StudentPerformanceChart = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      {/* <h2>1,234</h2>
      <p>Total No. of Students</p> */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            innerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {/* Add text inside the circle */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={28}
            fontWeight="bold"
            fill="#333"
          >
            1,234
          </text>
          <text
            x="50%"
            y="56%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={14}
            fill="#999"
          >
            Total No. of Students
          </text>

          <Tooltip />
          {/* <Legend content={renderLegend} /> */}
        </PieChart>
      </ResponsiveContainer>
      <div style={{ maxWidth: "550px", margin: "auto" }}>
        <h3 style={{ textAlign: "center" }}>
          Performance classifications of students
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <span style={{ color: "#A1E4C0" }}>● Top</span>
            <span>579 Students</span>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <span style={{ color: "#F3E393" }}>● Average</span>
            <span className="text-black">333 Students</span>{" "}
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <span style={{ color: "#F9BCC2" }}>● Below Average</span>
            <span>322 Students</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentPerformanceChart;

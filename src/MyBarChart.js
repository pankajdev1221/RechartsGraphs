import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Cell,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Top",
    placedNum: 463,
    unPlacedNum: 116,
    placed: true,
    pv: 240,
    amt: 240,
    uv: 200,
  },
  {
    name: "Avergae",
    uv: 300,
    placedNum: 200,
    unPlacedNum: 133,
    pv: 398,
    placed: true,
    amt: 210,
  },
  {
    name: "Below Average",
    uv: 200,
    placedNum: 76,
    unPlacedNum: 246,
    pv: 500,
    amt: 290,
  },
];

const MyBarChart = () => {
  const [clickedData, setClickedData] = useState(null);

  const handleBarClick = (data) => {
    setClickedData(data);
  };
  const colors = [
    "#9BDFC4",
    "#00955A",
    "#FFE976",
    "#C5A500",
    "#F99BAB",
    "#d0ed57",
    "#B7001F",
  ];

  const renderCustomizedLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width + 10} // Position to the right of the bar
        y={y + 20} // Center vertically in the bar
        fill="#f00" // Text color
        fontSize={35}
        textAnchor="start"
      >
        {value}
      </text>
    );
  };

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
          <h4>{payload[0].payload.name}</h4>
          <p>Placed: {payload[0].payload.placedNum}</p>
          <p>UnPlaced: {payload[0].payload.unPlacedNum}</p>
          {/* <p>AMT: {payload[0].payload.amt}</p> */}
        </div>
      );
    }

    return null;
  };
  return (
    <div>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" position="inside" orientation="bottom" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />

        <Bar dataKey="placedNum" onClick={handleBarClick}>
          {data.map((entry, index) => (
            <Cell
              // key={`cell-${index}`}
              fill={`${colors[index % colors.length]}66`}
            />
          ))}
          <LabelList
            dataKey="placedNum"
            angle={90}
            fontSize="12px"
            fill="#000"
            offset="-20"
            width="300"
            position="bottom"
            formatter={(value) => `Placed `}
          />{" "}
          <LabelList
            dataKey="placedNum"
            position="top"
            fill="#000"
            fontSize={10}
            formatter={(value) => `${value}`}
          />
        </Bar>
        <Bar dataKey="unPlacedNum" onClick={handleBarClick}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
          <LabelList
            dataKey="unPlacedNum"
            angle={90}
            fontSize="12px"
            fill="#000"
            offset="-25"
            // width="300"
            position="bottom"
            formatter={(value) => `UnPlaced `}
          />{" "}
          <LabelList
            dataKey="unPlacedNum"
            position="top"
            fill="#000"
            fontSize={10}
            formatter={(value) => `${value}`}
          />
        </Bar>
      </BarChart>
      {clickedData && (
        <div>
          <h3>Clicked Data:</h3>
          <p>Name: {clickedData.name}</p>
          <p>Placed: {clickedData.placedNum}</p>
          <p>Unplaced: {clickedData.unPlacedNum}</p>
        </div>
      )}
    </div>
  );
};

export default MyBarChart;

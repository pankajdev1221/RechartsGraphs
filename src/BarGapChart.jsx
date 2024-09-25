import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Label,
} from "recharts";

const data = [
  { name: "Data Structures", Top: 60, Average: 45, BelowAverage: 25 },
  { name: "OOPS", Top: 80, Average: 50, BelowAverage: 30 },
  { name: "Java", Top: 90, Average: 65, BelowAverage: 35 },
  { name: "Cloud Computing", Top: 50, Average: 40, BelowAverage: 20 },
  { name: "DevOps", Top: 85, Average: 60, BelowAverage: 45 },
  { name: "DBMS", Top: 70, Average: 55, BelowAverage: 30 },
  { name: "QA Testing", Top: 65, Average: 50, BelowAverage: 35 },
  { name: "Data Science", Top: 75, Average: 55, BelowAverage: 40 },
];

const BarGapChart = () => {
  // Custom Legend Renderer
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0.5rem 0",
          margin: 0,
          width: "250px",
          marginLeft: "auto",
        }}
      >
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{
              marginRight: 20,
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                marginRight: 8,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: entry.color,
              }}
            ></span>
            <span style={{ color: "black" }}>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Not needed for now
  // Custom Tick Component for Wrapping Text
  const CustomXAxisTick = ({ x, y, payload }) => {
    const lines = payload.value.split(" "); // Split the text by spaces to wrap it
    const line1 = lines.slice(0, Math.ceil(lines.length / 2)).join(" ");
    const line2 = lines.slice(Math.ceil(lines.length / 2)).join(" ");

    return (
      <g transform={`translate(${x},${y})`}>
        <Text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {line1}
          <tspan x="0" dy="18">
            {line2}
          </tspan>
        </Text>
      </g>
    );
  };

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            textAlign: "left",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        >
          {/* Payload Contains all the data */}
          {/* {console.log(payload)} */}
          <h4 className="label">{`${label}`}</h4>

          {payload.map((data) => {
            return (
              <p
                style={{
                  color: "#555",
                  display: "flex",
                  gap: " 0.5rem",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <div
                  style={{
                    background: data.fill,
                    height: "15px",
                    width: "15px",
                    diaply: "inline-block",
                    borderRadius: "50%",
                  }}
                ></div>
                {`${data.name}: `}
                <span
                  style={{
                    color: data.fill,
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {80 - data.value < 0 ? 0 : 80 - data.value}
                </span>{" "}
                Skill Points Gap
              </p>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis
        dataKey="name"
        interval={0}
        textAnchor="middle"
        height={80}
        style={{
          fontSize: "12px",
          fontWeight: "500",
          wordWrap: "wrap",
          fill: "#555",
          textAnchor: "middle",
        }}
      >
        <Label
          value="Industry Skills"
          offset={25}
          tick={{ width: 100 }} // Prevent text overflow
          position="insideBottom" //placement [center, left]
          // style={{ textAnchor: "middle" }} // Position the label centrally
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            fill: "#8C97A7",
            textAnchor: "middle",
          }}
        />
      </XAxis>
      <YAxis>
        <Label
          value="Skill Points"
          angle={-90}
          position="insideLeft"
          offset={-5} // Adjust gap between label and axis
          // style={{ textAnchor: "middle" }}
          style={{
            fontSize: "15px",
            fontWeight: "normal",
            fill: "#8C97A7",
            textAnchor: "middle",
          }}
        />
      </YAxis>
      <Tooltip content={<CustomTooltip />} />
      <Legend
        content={renderLegend}
        layout="horizontal"
        verticalAlign="top"
        align="right"
        wrapperStyle={{ top: 0, right: 0 }}
      />
      <ReferenceLine
        y={80}
        label={{
          value: "Industry Standard",
          position: "insideBottomLeft",
          offset: 10,
          fill: "#555555",
          fontWeight: "bold",
        }}
        yAxisId={0}
        style={{ color: "#fff" }}
        stroke="#5F58FF"
        strokeWidth={8}
        strokeDasharray="0 0"
        isFront={true}
        ifOverflow="extendDomain"
      />
      <Bar dataKey="Top" fill="#62B2FD" />
      <Bar dataKey="Average" fill="#9BDFC4" />
      <Bar dataKey="BelowAverage" fill="#F99BAB" />
    </BarChart>
  );
};

export default BarGapChart;

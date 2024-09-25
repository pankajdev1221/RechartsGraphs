import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Label,
  Cell,
} from "recharts";

const data = [
  {
    name: "Top",
    Placed: 463,
    Unplaced: 116,
    PlacedColor: "#8dd3c7", // Custom color for 'Placed' in 'Top' category
    UnplacedColor: "#00955A", // Custom color for 'Unplaced' in 'Top' category
  },
  {
    name: "Average",
    Placed: 200,
    Unplaced: 133,
    PlacedColor: "#FFE976", // Custom color for 'Placed' in 'Average' category
    UnplacedColor: "#C5A500", // Custom color for 'Unplaced' in 'Average' category
  },
  {
    name: "Below Average",
    Placed: 87,
    Unplaced: 246,
    PlacedColor: "#F99BAB", // Custom color for 'Placed' in 'Below Average' category
    UnplacedColor: "#B7001F", // Custom color for 'Unplaced' in 'Below Average' category
  },
];

const BarVertical = () => {
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
          <h4 className="label">{`Category: ${label}`}</h4>

          {payload.map((data) => {
            return (
              <p
                style={{ color: data.fill }}
              >{`${data.name}: ${data.value}`}</p>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="name"
          interval={0}
          textAnchor="middle"
          height={80}
          style={{
            fontSize: "14px",
            fontWeight: "500",
            fill: "#555",
            textAnchor: "middle",
          }}
        >
          {/* X-Axis Label */}
          <Label
            value="Performance Classification"
            offset={25}
            tick={{ width: 100 }} // Prevent text overflow
            position="insideBottom" //placement [center, left]
            // style={{ textAnchor: "middle" }} // Position the label centrally
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              fill: "#333",
              textAnchor: "middle",
            }}
          />
        </XAxis>

        <YAxis>
          {/* Y-Axis Label */}
          <Label
            value="Number of Students"
            angle={-90}
            position="insideLeft"
            offset={-5} // Adjust gap between label and axis
            // style={{ textAnchor: "middle" }}
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              fill: "#333",
              textAnchor: "middle",
            }}
          />
        </YAxis>

        <Tooltip content={<CustomTooltip />} />
        {/* <Legend display={"none"} /> */}
        <Bar dataKey="Placed">
          {data.map((entry, index) => (
            <Cell key={`cell-placed-${index}`} fill={entry.PlacedColor} />
          ))}
          <LabelList
            dataKey="Placed"
            position="top"
            style={{
              fontSize: "15px",
              fontWeight: "600",
              textAnchor: "middle",
              fill: "black",
            }}
          />
          <LabelList
            dataKey="Placed"
            position="insideBottom"
            angle={-90}
            offset={35}
            scaleToFit={true}
            width={50}
            fill="black"
            style={{
              fontSize: "15px",
              fontWeight: "600",
              textAnchor: "middle",
            }}
            formatter={(value) => `Placed`}
          />
        </Bar>
        <Bar dataKey="Unplaced">
          {data.map((entry, index) => (
            <Cell key={`cell-unplaced-${index}`} fill={entry.UnplacedColor} />
          ))}
          <LabelList
            dataKey="Unplaced"
            position="top"
            style={{
              fontSize: "15px",
              fontWeight: "600",
              textAnchor: "middle",
              fill: "black",
            }}
          />
          <LabelList
            dataKey="Placed"
            position="insideBottom"
            angle={-90}
            offset={45}
            fill="black"
            style={{
              fontSize: "15px",
              fontWeight: "600",
              fontStyle: "normal",
              fill: "#fff", //priorty
              textAnchor: "middle",
            }}
            formatter={(value) => `Unplaced`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVertical;

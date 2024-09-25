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
  Label,
} from "recharts";

const data = [
  {
    name: "JF1",
    nonParticipants: 1500,
    q10_40: 2500,
    q50_100: 4000,
    q100: 2000,
  },
  {
    name: "JF2",
    nonParticipants: 1000,
    q10_40: 3000,
    q50_100: 4000,
    q100: 2000,
  },
  {
    name: "JF3",
    nonParticipants: 2500,
    q10_40: 3500,
    q50_100: 2000,
    q100: 2000,
  },
  {
    name: "JF4",
    nonParticipants: 2000,
    q10_40: 3500,
    q50_100: 3000,
    q100: 1000,
  },
  {
    name: "JF5",
    nonParticipants: 2000,
    q10_40: 3000,
    q50_100: 3500,
    q100: 500,
  },
  {
    name: "JF6",
    nonParticipants: 3000,
    q10_40: 3500,
    q50_100: 2500,
    q100: 500,
  },
  {
    name: "JF7",
    nonParticipants: 4000,
    q10_40: 3000,
    q50_100: 2000,
    q100: 500,
  },
];

const StackedBarChart = () => {
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
          <h4 className="label">{`Job Family: ${label}`}</h4>

          {payload.map((data) => {
            return (
              <p
                style={{ color: data.fill }}
              >{`${data.name}: ${data.value}`}</p>
            );
          })}
          {/* <p>{`Non-Participants: ${payload[0].value}`}</p>
          <p>{`10% to 40% Qualified: ${payload[1].value}`}</p>
          <p>{`50% to 100% Qualified: ${payload[2].value}`}</p>
          <p>{`100% Qualified: ${payload[3].value}`}</p> */}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        width={500}
        height={300}
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis type="number">
          <Label
            value="Number of Students"
            offset={-20}
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
        <YAxis dataKey="name" type="category">
          <Label
            value="Job Family Qualification"
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
        <Legend
          layout="horizontal" // Horizontal layout
          align="center" // Center align horizontally
          verticalAlign="bottom" // Position at the top of the chart
          wrapperStyle={{
            paddingTop: 70,
            paddingBottom: 0, // Add spacing below the legend
          }}
          formatter={(value) => (
            <span
              style={{ color: "#333", fontSize: "14px", fontWeight: "500" }}
            >
              {value}
            </span>
          )} // Custom text styles for each label
        />
        <Bar
          dataKey="nonParticipants"
          stackId="a"
          fill="#000000"
          name="Non Participants"
          //   label={{
          //     position: "inside",
          //     fill: "#fff",
          //     fontSize: "12px",
          //     fontWeight: "bold",
          //   }} // Customize text inside the bar
        />
        <Bar
          dataKey="q10_40"
          stackId="a"
          fill="#e84e72"
          name="10% to 40% Qualified"
          //   label={{
          //     position: "inside",
          //     fill: "#fff",
          //     fontSize: "12px",
          //     fontWeight: "bold",
          //   }} // Customize text inside the bar
        />
        <Bar
          dataKey="q50_100"
          stackId="a"
          fill="#ffb332"
          name="50% to 100% Qualified"
          //   label={{
          //     position: "inside",
          //     fill: "#fff",
          //     fontSize: "12px",
          //     fontWeight: "bold",
          //   }} // Customize text inside the bar
        />
        <Bar
          dataKey="q100"
          stackId="a"
          fill="#00c49f"
          name="100% Qualified"
          //   label={{
          //     display: 'none',//to not show
          //     position: "inside",
          //     fill: "#fff",
          //     fontSize: "12px",
          //     fontWeight: "bold",
          //   }} // Customize text inside the bar
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;

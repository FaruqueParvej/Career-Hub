import React from "react";
import {
  FunnelChart,
  Funnel,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    number: 57,
    fill: "#8884d8",
  },
  {
    name: "Assignment 2",
    number: 59,
    fill: "#83a6ed",
  },
  {
    name: "Assignment 3",
    number: 53,
    fill: "#8dd1e1",
  },
  {
    name: "Assignment 4",
    number: 60,
    fill: "#ffc658",
  },
  {
    name: "Assignment 5",
    number: 34,
    fill: "#a4de6c",
  },
  {
    name: "Assignment 6",
    number: 49,
    fill: "#d0ed57",
  },
  {
    name: "Assignment 7",
    number: 60,
    fill: "#ffc658",
  },
  {
    name: "Assignment 8",
    number: 60,
    fill: "#ffc658",
  },
];
const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="number"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Statistics;

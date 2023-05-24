"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import { useState } from "react";
import { UserData } from "@/utils/userData";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

type UserDataObject = {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

type UserDataObjects = UserDataObject[];

export type ChartData = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
};

export default function ChartJS() {
  Chart.register(CategoryScale);

  // const [chartData, setChartData] = useState(
  const chartData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a16d0",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  // );

  return (
    <main className="flex min-h-screen flex-col items-center mt-3 p-10">
      <h1>Chart.js</h1>
      <div className="flex flex-row p-32">
        <PieChart chartData={chartData} />
        <BarChart chartData={chartData} />
        <LineChart chartData={chartData} />
      </div>
    </main>
  );
}

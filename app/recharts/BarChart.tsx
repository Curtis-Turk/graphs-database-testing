import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { pageData } from "@/utils/pageData";

function ReChartBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={pageData}
      // margin={{
      //   top: 20,
      //   right: 30,
      //   left: 20,
      //   bottom: 5,
      // }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend /> */}
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}

export default ReChartBarChart;

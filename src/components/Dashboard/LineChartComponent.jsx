import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { transactions } from "../../data/mockData";

function LineChartComponent() {

  const data = transactions.map((t) => ({
    date: t.date.slice(5), // MM-DD
    amount: t.amount,
  }));

  return (
    <div style={{ width: "100%", height: 300, marginTop: 20}}>
      <h2>Transaction History - Line Chart</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
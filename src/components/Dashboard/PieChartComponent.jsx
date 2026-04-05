import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { transactions } from "../../data/mockData";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

function PieChartComponent() {

  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div style={{ width: "100%", height: 300, marginTop: 20}}>
      <h2>Expense Distribution - Pie Chart</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
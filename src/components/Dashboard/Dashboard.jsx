// components/Dashboard/Dashboard.jsx

import SummaryCard from "../Shared/SummaryCard";
import { transactions } from "../../data/mockData";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";

function Dashboard() {
	const income = transactions.filter((t) => t.type === "income").reduce((acc, t) => acc + t.amount, 0);

	const expenses = transactions.filter((t) => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);

	const balance = income - expenses;

	return (
		<div style={{ padding: "20px" }}>
			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex">
				<SummaryCard title="Balance" amount={balance} />
				<SummaryCard title="Income" amount={income} />
				<SummaryCard title="Expenses" amount={expenses} />
			</div>
			<div className="section-divider"></div>

			{/* Placeholder Charts */}
			<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="bg-gray-800 p-5 rounded-2xl">
					<LineChartComponent />
				</div>
				<div className="section-divider"></div>

				<div className="bg-gray-800 p-5 rounded-2xl">
					<PieChartComponent />
				</div>
			</div>
			<div className="section-divider"></div>
		</div>
	);
}

export default Dashboard;

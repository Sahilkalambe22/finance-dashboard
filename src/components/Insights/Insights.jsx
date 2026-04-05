import { transactions } from "../../data/mockData";

function Insights() {
	const expenseData = {};

	transactions.forEach((t) => {
		if (t.type === "expense") {
			expenseData[t.category] = (expenseData[t.category] || 0) + t.amount;
		}
	});

	let highestCategory = "";
	let maxAmount = 0;

	for (let key in expenseData) {
		if (expenseData[key] > maxAmount) {
			maxAmount = expenseData[key];
			highestCategory = key;
		}
	}
  let percent = ((maxAmount / Object.values(expenseData).reduce((a, b) => a + b, 0)) * 100).toFixed(2);

	return (
		<div className="bg-gray-800 p-6 rounded-2xl shadow-md insights">
			<h2 className="text-xl font-semibold mb-4">Insights</h2>

			<p>
				🏆 Highest spending: <strong>{highestCategory}</strong> (₹ {maxAmount})
			</p>

			<p className="mt-2 text-gray-400">You are spending the most on {highestCategory}, which is {percent}% of your total expenses.</p>
      <p className="mt-2 text-gray-400">Consider optimizing this category.</p>
			<div className="section-divider"></div>
		</div>
	);
}

export default Insights;

import { useState } from "react";
import { transactions as initialData } from "../../data/mockData";

function Transactions({ role }) {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");

	const filteredData = initialData.filter((t) => {
		const matchesSearch = t.category.toLowerCase().includes(search.toLowerCase());

		const matchesFilter = filter === "all" ? true : t.type === filter;

		return matchesSearch && matchesFilter;
	});

	return (
		<div className="bg-gray-800 p-6 rounded-2xl shadow-md mt-8">
			<h2 className="text-xl font-semibold mb-4">Transactions</h2>

			{/* Controls */}
			<div className="flex gap-3 mb-4">
				<input type="text" placeholder="Search category..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-gray-700 text-white px-3 py-2 rounded-md w-full search-input" />

				<select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-gray-700 text-white px-3 py-2 rounded-md button-transaction">
					<option value="all">All</option>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>
				{role === "admin" && (
					<button className="bg-blue-500 px-4 py-2 rounded-md mb-4 button-transaction" title="Demo only – functionality not implemented">
						+ Add Transaction
					</button>
				)}
			</div>

			{/* Table */}
			<table className="w-full text-left border-collapse table-container">
				<thead className="text-gray-400 border-b border-gray-700">
					<tr>
						<th className="p-3">Date</th>
						<th className="p-3">Category</th>
						<th className="p-3">Amount</th>
						<th className="p-3">Type</th>
					</tr>
				</thead>

				<tbody>
					{filteredData.map((t) => (
						<tr key={t.id} className="border-b border-gray-700 hover:bg-gray-700/30">
							<td className="p-3">{t.date}</td>
							<td className="p-3">{t.category}</td>
							<td className="p-3">₹ {t.amount}</td>
							<td className={`p-3 font-medium ${t.type === "income" ? "text-green-400" : "text-red-400"}`}>{t.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Transactions;

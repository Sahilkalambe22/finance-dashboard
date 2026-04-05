function SummaryCard({ title, amount }) {
	return (
		<div className="bg-gray-800 text-white p-5 rounded-2xl shadow-md w-full card-container">
			<h3 className="text-sm text-gray-400">{title}</h3>
			<h2 className="text-2xl font-bold mt-2">₹ {amount}</h2>
		</div>
	);
}

export default SummaryCard;

import { useState, useEffect } from "react";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Insights from "./components/Insights/Insights";
import "./App.css";

function App() {
	const [role, setRole] = useState("viewer");
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		// Optional: persist theme
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setTheme(savedTheme);
	}, []);

	return (
		<div className="bg-gray-900 min-h-screen text-white p-6">
			<div className="max-w-6xl mx-auto space-y-6">
				<Navbar role={role} setRole={setRole} theme={theme} setTheme={setTheme} />

				<Dashboard />
				<Insights />
				<Transactions role={role} />

				<Footer />
			</div>
		</div>
	);
}

export default App;

# 💰 Finance Dashboard UI

A clean and interactive **Finance Dashboard** built using React.
This project demonstrates how financial data can be visualized and managed on the frontend with a focus on **UI/UX, component structure, and state handling**.

---

## 🚀 Live Demo

https://finance-dashboard-sand-two.vercel.app/

---

## 📌 Overview

This dashboard allows users to:

* View overall financial summary
* Analyze spending trends
* Explore transactions
* Switch between user roles (Viewer/Admin)
* Toggle between dark and light themes

The project focuses on **frontend architecture and user experience**, without relying on backend integration.

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards:

  * Total Balance
  * Total Income
  * Total Expenses
* Line chart for transaction trends
* Pie chart for category-wise spending

---

### 📋 Transactions Section

* Displays transaction data with:

  * Date
  * Category
  * Amount
  * Type (Income/Expense)
* Features:

  * 🔍 Search by category
  * 🎯 Filter by type

---

### 🔐 Role-Based UI (Simulated)

* Viewer:

  * Can only view data
* Admin:

  * Can see “Add Transaction” option (UI simulation)

> Note: Admin actions are simulated for demonstration purposes and are not fully implemented.

---

### 🧠 Insights Section

* Highlights:

  * Highest spending category
* Provides basic financial observation to improve user awareness

---

### 🌙 Theme Toggle

* Switch between:

  * Dark mode
  * Light mode
* Enhances user experience and accessibility

---

## 🛠 Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **Recharts** (for data visualization)
* **React Switch** (for toggle UI)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Dashboard/
 │    ├── Transactions/
 │    ├── Insights/
 │    ├── Shared/
 │
 ├── data/
 │    └── mockData.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project
cd dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📱 Responsiveness

* Works across:

  * Desktop
  * Tablet
  * Mobile

---

## 🧠 Approach

The goal of this project was to design a clean and intuitive finance dashboard with a focus on frontend usability and structure.

- The application is divided into modular components such as Dashboard, Transactions, and Insights to ensure scalability and maintainability.
- Mock data is used to simulate real-world financial transactions.
- Data is processed on the frontend to calculate totals, generate charts, and derive insights.
- Role-based access is implemented by conditionally rendering UI elements based on user roles (Admin and Viewer).
- State is managed using React hooks to keep the implementation simple and efficient.
- CSS variables combined with Tailwind CSS are used to support dynamic theme switching between light and dark modes.

The focus was to keep the application simple, user-friendly, and aligned with real-world dashboard behavior.

## 🎯 Key Highlights

* Clean and modern UI design
* Modular component structure
* Proper state management using React hooks
* Interactive charts and filters
* Role-based UI simulation
* Theme switching functionality

---

## ⚠️ Assumptions

* Data is static (mock data used)
* No backend integration required
* Role-based actions are simulated

---

## 🙌 Conclusion

This project demonstrates how to build a **user-friendly finance dashboard** focusing on clarity, usability, and clean frontend architecture.

---

import Switch from "react-switch";

function Navbar({ role, setRole, theme, setTheme }) {
  return (
    <div className="bg-gray-800 px-6 py-4 rounded-xl flex justify-between items-center shadow-md navbar">

      {/* Title */}
      <h1 className="text-xl font-bold">Finance Dashboard</h1>

      {/* Right Side */}
      <div className="flex flex-col items-end gap-3">

        {/* Role Switch */}
        <div className="flex items-center gap-4 switch-container">
          <span className="text-gray-400 text-sm">Role:</span>

          <Switch
            checked={role === "admin"}
            onChange={() =>
              setRole(role === "viewer" ? "admin" : "viewer")
            }
            offColor="#4b5563"
            onColor="#3b82f6"
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={40}
          />

          <p
            className={`text-sm ${
              role === "admin" ? "text-blue-400" : "text-green-400"
            }`}
          >
            {role === "admin" ? "🛠️ Admin Mode" : "👁️ Viewer Mode"}
          </p>
        </div>

        {/* Theme Switch */}
        <div className="flex items-center gap-4 switch-container">
          <span className="text-gray-400 text-sm">Theme:</span>

          <Switch
            checked={theme === "dark"}
            onChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            offColor="#d1d5db"   // light gray
            onColor="#111827"    // dark
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={40}
          />

          <p className="text-sm">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
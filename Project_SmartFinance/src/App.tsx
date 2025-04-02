import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Box } from "@mui/material";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
// import Home from "./pages/Home";
// import BudgetPlanner from "./pages/BudgetPlanner";
// import ExpenseTracker from "./pages/ExpenseTracker";
import Goals from "./components/Goals";  // Moved to components
// import Badges from "./pages/Badges";

const App = () => {
  // Load theme preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Create light/dark themes
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#3C91E6" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div style={{ display: "flex", marginTop: "64px" }}>
          <Sidebar darkMode={darkMode} />
          <main style={{ flexGrow: 1, padding: "16px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              {/* <Route path="/dashboard" element={<Home />} /> */}
              {/* <Route path="/budget-planner" element={<BudgetPlanner />} /> */}
              {/* <Route path="/expense-tracker" element={<ExpenseTracker />} /> */}
              <Route path="/goals" element={<Goals />} />
              {/* <Route path="/badges" element={<Badges />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

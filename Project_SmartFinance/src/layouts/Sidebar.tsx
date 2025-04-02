import { Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";

const drawerWidth = 240;

const Sidebar = ({ darkMode }: { darkMode: boolean }) => {
    const location = useLocation(); // Get current route path
    const textColor = darkMode ? "#ffffff" : "#3C91E6";
    const activeBgColor = darkMode ? "#424242" : "#e3f2fd";
    const hoverBgColor = darkMode ? "#616161" : "#dbeafe";
    const hoverTextColor = darkMode ? "#ffffff" : "#3C91E6";

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          marginTop: "64px", // Pushes the sidebar below the navbar
          height: "calc(100vh - 64px)", // Adjust height to fit below navbar
          backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa", // Light gray background
        },
      }}
    >
      <List>
        {[
          { path: "/dashboard", label: "Home", icon: <DashboardIcon /> },
          { path: "/budget-planner", label: "Budget Planner", icon: <AssignmentIcon /> },
          { path: "/expense-tracker", label: "Expense Tracker", icon: <ShoppingCartIcon /> },
          { path: "/goals", label: "Goals", icon: <SportsSoccerSharpIcon /> },
          { path: "/badges", label: "Badges", icon: <StarsSharpIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.path}
            component={Link}
            to={item.path}
            sx={{
              color: "textColor", // Sidebar font color
              borderLeft: location.pathname === item.path ? "4px solid #3C91E6" : "none", // Active item border
              backgroundColor: location.pathname === item.path ? activeBgColor: "inherit", // Slight highlight for active
               "&:hover": {
                backgroundColor: hoverBgColor,
                color: hoverTextColor, // Ensure text color stays consistent in dark mode
              },
            }}
          >
            <ListItemIcon sx={{ color: textColor }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

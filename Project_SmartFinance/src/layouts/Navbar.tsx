// import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ toggleTheme, darkMode }: { toggleTheme: () => void; darkMode: boolean }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: "100%", 
        backgroundColor: "#3C91E6",
        zIndex: 1300 // Ensures Navbar stays above other elements
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">SmartFinance</Typography>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          
            <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

         
          <Avatar alt="Profile" src="https://via.placeholder.com/40" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


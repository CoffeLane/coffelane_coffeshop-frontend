import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography} from "@mui/material";


const navLinkStyles = {
  textDecoration: "none",
  cursor: "pointer",
  color: "#3E3027",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  mb: 2,
  "&.active": { color: "#B88A6E" },
  "&:hover": { color: "#B88A6E" }
};

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', height: '60px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        {[
          { to: "/", label: "Home" },
          { to: "/coffee", label: "Cofee" },
          { to: "/accessories", label: "Accessories" },
          { to: "/shop", label: "Shop" },
          { to: "/ourStory", label: "Our Story" },
          { to: "/wholesale", label: "Wholesale" },
        ].map((link) => (
          <Typography key={link.to + link.label} component={RouterNavLink} to={link.to} sx={navLinkStyles} >
            {link.label}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
}

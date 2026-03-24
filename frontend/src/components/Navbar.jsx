import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const links = [
  { to: "/", label: "Home" },
  { to: "/founders", label: "Founders" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const navClass = isHome ? "hero-nav" : "solid-nav";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={`glass-header ${navClass} ${isScrolled ? "scrolled-nav" : ""}`}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", letterSpacing: "0.08em", fontWeight: 700 }}
        >
          Prakash Gold
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "end" }}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav-router-link"
          >
            {({ isActive }) => (
              <Button
                size="small"
                variant={isActive ? "contained" : "text"}
                color={isActive ? "primary" : "inherit"}
                sx={{ borderRadius: "999px", px: 2 }}
              >
                {link.label}
              </Button>
            )}
          </NavLink>
        ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

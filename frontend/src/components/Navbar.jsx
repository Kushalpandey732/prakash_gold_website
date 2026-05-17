import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import BrandLogo from "./BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/founders", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      className={`glass-header ${isHome ? "hero-nav" : "solid-nav"} ${isScrolled ? "scrolled-nav" : ""}`}
    >
      <Toolbar className="nav-toolbar-centered" disableGutters>
        <BrandLogo
          variant="mark"
          className={isHome && !isScrolled ? "brand-logo--hero" : ""}
        />
        <Box className="nav-links-row" component="nav" aria-label="Main">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-router-link">
              {({ isActive }) => (
                <Button
                  size="small"
                  variant={isActive ? "contained" : "text"}
                  className="nav-link-btn"
                  disableRipple
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

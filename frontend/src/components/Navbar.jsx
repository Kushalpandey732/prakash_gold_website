import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { HiMenu, HiX } from "react-icons/hi";
import BrandLogo from "./BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/founders", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

const MOBILE_NAV_QUERY = "(max-width: 1023px)";

function NavLinks({ className, onNavigate }) {
  return (
    <Box className={className} component="nav" aria-label="Main">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} className="nav-router-link" onClick={onNavigate}>
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
  );
}

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobileNav = useMediaQuery(MOBILE_NAV_QUERY);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileNav) setMenuOpen(false);
  }, [isMobileNav]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const navClass = `glass-header ${isHome ? "hero-nav" : "solid-nav"} ${isScrolled ? "scrolled-nav" : ""} ${
    isMobileNav ? "glass-header--mobile" : "glass-header--desktop"
  }`;

  return (
    <>
      <AppBar position="fixed" elevation={0} color="transparent" className={navClass}>
        <Toolbar className="nav-toolbar-centered" disableGutters>
          <Box className="nav-toolbar-inner">
            <BrandLogo
              variant="mark"
              className={isHome && !isScrolled ? "brand-logo--hero" : ""}
            />

            {!isMobileNav && <NavLinks className="nav-links-row nav-links-row--desktop" />}

            {isMobileNav && (
              <IconButton
                type="button"
                className="nav-menu-toggle"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-drawer"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {isMobileNav && (
        <Drawer
          id="mobile-nav-drawer"
          className="nav-mobile-drawer"
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ className: "nav-mobile-drawer-paper" }}
        >
          <Box className="nav-mobile-drawer-inner">
            <Box className="nav-mobile-drawer-head">
              <BrandLogo variant="mark" />
              <IconButton
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="nav-mobile-close"
              >
                <HiX />
              </IconButton>
            </Box>
            <NavLinks
              className="nav-links-row nav-links-row--mobile"
              onNavigate={() => setMenuOpen(false)}
            />
          </Box>
        </Drawer>
      )}
    </>
  );
}

export default Navbar;

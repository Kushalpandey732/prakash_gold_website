import { Link } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BrandLogo from "./BrandLogo";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Leadership", to: "/founders" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Box className="footer-grid">
        <Box>
          <BrandLogo asLink={false} className="footer-logo" />
          <Typography className="footer-copy">
            Gold and diamond jewellery, bullion markets, manufacturing, and high-value trade — built on
            relationships, craft, and trust across the GCC.
          </Typography>
          <Stack direction="row" spacing={1} mt={1.5}>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              size="small"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              size="small"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <Typography className="footer-heading">Explore</Typography>
          <Box className="footer-links">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography className="footer-heading">Dubai</Typography>
          <Typography className="footer-copy" sx={{ mt: 0 }}>
            United Arab Emirates
          </Typography>
          <Typography className="footer-copy" sx={{ mt: 1 }}>
            <a href="mailto:info@prakashgold.com">info@prakashgold.com</a>
          </Typography>
        </Box>
      </Box>

      <Box className="footer-bottom">
        <Typography component="span">© {new Date().getFullYear()} Prakash Gold LLC. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

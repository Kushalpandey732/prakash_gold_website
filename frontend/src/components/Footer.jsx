import { Box, Container, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const socials = [
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
];

const quickLinks = ["Home", "Founders", "Company", "Contact"];
const collections = ["Bridal Jewelry", "Gold Necklaces", "Diamond Rings", "Private Concierge"];

function Footer() {
  return (
    <Box component="footer" className="footer modern-footer">
      <Container maxWidth="xl">
        <Box className="footer-grid">
          <Box>
            <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
              Prakash Gold
            </Typography>
            <Typography className="footer-copy advanced-copy">
              Crafting premium jewelry experiences with heritage, modern design, and
              private luxury service.
            </Typography>
            <Typography className="footer-address">
              Gold Souk Area, Deira, Dubai, UAE
            </Typography>
            <Stack direction="row" spacing={1} mt={1.2}>
              {socials.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  color="primary"
                  aria-label={social.label}
                  className="social-icon"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography className="footer-heading">Quick Links</Typography>
            <Stack spacing={1} className="footer-links">
              {quickLinks.map((link) => (
                <a key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography className="footer-heading">Collections</Typography>
            <Stack spacing={1} className="footer-links">
              {collections.map((item) => (
                <a key={item} href="/company">
                  {item}
                </a>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography className="footer-heading">Stay Updated</Typography>
            <Typography color="text.secondary" fontSize={14} mb={1.2}>
              Get launch updates on signature collections and private events.
            </Typography>
            <Box className="footer-subscribe">
              <InputBase placeholder="Your email" className="footer-input" />
              <IconButton color="primary" className="footer-submit">
                <HiArrowRight />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box className="footer-bottom">
          <Typography fontSize={13} color="text.secondary">
            © {new Date().getFullYear()} Prakash Gold. All rights reserved.
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            Privacy Policy | Terms & Conditions
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default Footer;

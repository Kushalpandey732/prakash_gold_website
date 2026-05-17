import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

function AboutPageHero({ imageSrc }) {
  return (
    <header className="about-page-hero">
      <Box className="about-page-hero-bg" aria-hidden>
        <img src={imageSrc} alt="" />
      </Box>
      <Box className="about-page-hero-scrim" aria-hidden />
      <motion.div
        className="about-page-hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography className="about-section-label">Prakash Gold LLC</Typography>
        <Typography component="h1" className="about-page-hero-title">
          About Us
        </Typography>
        <Box className="about-page-hero-line" aria-hidden />
      </motion.div>
    </header>
  );
}

export default AboutPageHero;

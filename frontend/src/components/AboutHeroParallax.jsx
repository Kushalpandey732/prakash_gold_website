import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

function AboutHeroParallax({ imageSrc }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.72]);

  return (
    <header ref={ref} className="about-hero-parallax">
      <Box className="about-hero-parallax-media" aria-hidden>
        <motion.div className="about-hero-parallax-bg" style={{ y: bgY, scale: bgScale }}>
          <img src={imageSrc} alt="" />
        </motion.div>
        <motion.div className="about-hero-parallax-scrim" style={{ opacity: overlayOpacity }} />
      </Box>

      <motion.div className="about-hero-inner about-hero-parallax-content" style={{ y: contentY, opacity: contentOpacity }}>
        <Typography className="section-eyebrow about-hero-eyebrow">Prakash Gold LLC</Typography>
        <Typography component="h1" className="about-hero-title">
          About Us
        </Typography>
        <Box className="about-hero-rule" aria-hidden />
        <Typography className="about-hero-scroll-hint">Scroll to explore</Typography>
      </motion.div>

      <Box className="about-hero-parallax-fade" aria-hidden />
    </header>
  );
}

export default AboutHeroParallax;

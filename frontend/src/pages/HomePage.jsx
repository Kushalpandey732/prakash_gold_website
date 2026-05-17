import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { homeCategories, homeEditorial } from "../data/content";
import { useAppReady } from "../context/AppReadyContext";
import HomeHero from "../components/HomeHero";
import HomeCategoryGrid from "../components/HomeCategoryGrid";
import HomeEditorialBlock from "../components/HomeEditorialBlock";

function HomeCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Box ref={ref} className="home-cta-parallax">
      <motion.div className="home-cta-inner" style={{ y }}>
        <Typography className="section-eyebrow" sx={{ textAlign: "center" }}>
          Prakash Gold LLC
        </Typography>
        <Typography component="h2" className="section-title" sx={{ textAlign: "center", maxWidth: 640, mx: "auto" }}>
          Someone You Can Call
        </Typography>
        <Typography className="section-lead" sx={{ textAlign: "center", mx: "auto", mt: 2 }}>
          No layers. No middlemen. Direct access to the people whose names are on the door.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} justifyContent="center" mt={3}>
          <Button variant="contained" size="large" component={RouterLink} to="/founders">
            Meet the Founders
          </Button>
          <Button variant="outlined" size="large" component={RouterLink} to="/contact">
            Get in Touch
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
}

function HomePage() {
  const appReady = useAppReady();
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const progressOpacity = useTransform(scrollYProgress, [0, 0.03, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={pageRef}
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: appReady ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="about-scroll-progress home-scroll-progress"
        style={{ scaleX: scrollYProgress, opacity: progressOpacity }}
        aria-hidden
      />

      <HomeHero />

      <Box className="trust-strip">
        <Marquee speed={28} gradient={false} pauseOnHover>
          {[
            "Gold & Diamond Jewellery",
            "Bullion Markets",
            "Manufacturing",
            "Supply Chain",
            "GCC Trade",
            "Direct Partnership",
          ].map((item) => (
            <span key={item} className="trust-strip-item">
              {item}
            </span>
          ))}
        </Marquee>
      </Box>

      <HomeCategoryGrid categories={homeCategories} />

      {homeEditorial.map((block, index) => (
        <HomeEditorialBlock key={block.title} block={block} reverse={index % 2 === 1} />
      ))}

      <HomeCTA />
    </motion.div>
  );
}

export default HomePage;

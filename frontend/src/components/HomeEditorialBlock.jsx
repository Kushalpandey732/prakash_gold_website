import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";

function HomeEditorialBlock({ block, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [reverse ? "8%" : "-8%", reverse ? "-8%" : "8%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.1]);
  return (
    <Box ref={ref} className={`editorial-block home-editorial ${reverse ? "reverse" : ""}`}>
      <Box className="editorial-media-wrap">
        <motion.div
          className="editorial-media"
          style={{
            backgroundImage: `url(${block.image})`,
            y: mediaY,
            scale: mediaScale,
          }}
          role="img"
          aria-label={block.title}
        />
      </Box>

      <motion.div
        className="editorial-copy"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography className="section-eyebrow">{block.eyebrow}</Typography>
        <Typography component="h2" className="section-title">
          {block.title}
        </Typography>
        <Typography className="section-lead">{block.subtitle}</Typography>
        <Button
          variant="text"
          component={RouterLink}
          to={block.link}
          className="home-editorial-link"
          sx={{ mt: 2, alignSelf: "flex-start", px: 0 }}
        >
          {block.cta} →
        </Button>
      </motion.div>
    </Box>
  );
}

export default HomeEditorialBlock;

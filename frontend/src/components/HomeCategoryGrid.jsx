import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";

function CategoryTile({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="category-grid-item"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <RouterLink to={cat.link} className="category-tile">
        <img src={cat.image} alt={cat.title} loading="lazy" />
        <span className="category-tile-label">{cat.title}</span>
        <span className="category-tile-hover-line" aria-hidden />
      </RouterLink>
    </motion.div>
  );
}

function HomeCategoryGrid({ categories }) {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <Box className="home-categories">
      <motion.div
        ref={headRef}
        className="home-categories-head"
        initial={{ opacity: 0, y: 24 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <Typography className="section-eyebrow">Expertise</Typography>
        <Typography component="h2" className="section-title">
          What We Do
        </Typography>
      </motion.div>

      <Box className="category-grid">
        {categories.map((cat, index) => (
          <CategoryTile key={cat.title} cat={cat} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default HomeCategoryGrid;

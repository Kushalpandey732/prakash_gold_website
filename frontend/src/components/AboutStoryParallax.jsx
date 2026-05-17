import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

function AboutStoryParallax({ imageSrc, paragraphs }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.08]);

  const [mainText, followText] = paragraphs;

  return (
    <aside ref={ref} className="about-story-split">
      <Box className="about-story-split-media" aria-hidden>
        <motion.div className="about-story-split-img-wrap" style={{ y: bgY, scale: bgScale }}>
          <img src={imageSrc} alt="Fine gold jewellery craftsmanship" loading="lazy" />
        </motion.div>
      </Box>

      <Box className="about-story-split-content">
        <Typography className="section-eyebrow">A moment that defines us</Typography>
        <blockquote className="about-story-split-quote">{mainText}</blockquote>
        <Typography className="about-story-split-follow">{followText}</Typography>
      </Box>
    </aside>
  );
}

export default AboutStoryParallax;

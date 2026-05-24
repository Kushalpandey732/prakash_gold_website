import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

const heroEase = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: heroEase },
  },
};

function PageHeroParallax({
  videoSrc,
  imageSrc,
  eyebrow = "Prakash Gold LLC",
  title,
  tagline,
  scrollHint = "Scroll to explore",
  titleClassName = "about-hero-title",
}) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.72]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.play().catch(() => {});
    return undefined;
  }, [videoSrc]);

  return (
    <header
      ref={ref}
      className={`about-hero-parallax${videoSrc ? " about-hero-parallax--video" : ""}`}
    >
      <Box className="about-hero-parallax-media" aria-hidden>
        <motion.div className="about-hero-parallax-bg" style={{ y: bgY, scale: bgScale }}>
          {videoSrc ? (
            <video
              ref={videoRef}
              className="about-hero-parallax-video"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={imageSrc} alt="" />
          )}
        </motion.div>
        <motion.div className="about-hero-parallax-scrim" style={{ opacity: overlayOpacity }} />
        {videoSrc && <Box className="about-hero-parallax-vignette" aria-hidden />}
      </Box>

      <motion.div
        className="about-hero-inner about-hero-parallax-content"
        style={{ y: contentY, opacity: contentOpacity }}
        initial="hidden"
        animate="visible"
        variants={heroStagger}
      >
        <motion.div className="about-hero-parallax-copy" variants={heroItem}>
          <Typography className="section-eyebrow about-hero-eyebrow">{eyebrow}</Typography>
          <Typography component="h1" className={titleClassName}>
            {title}
          </Typography>
          {tagline ? (
            <Typography className="about-hero-parallax-tagline">{tagline}</Typography>
          ) : null}
          <Box className="about-hero-rule" aria-hidden>
            <span className="about-hero-rule-glow" />
          </Box>
        </motion.div>

        <motion.div variants={heroItem}>
          <Typography className="about-hero-scroll-hint">{scrollHint}</Typography>
        </motion.div>
      </motion.div>

      <Box className="about-hero-parallax-fade" aria-hidden />
    </header>
  );
}

export default PageHeroParallax;

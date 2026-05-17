import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import BrandLogo from "./BrandLogo";
import { useAppReady } from "../context/AppReadyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroImages = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=2000&q=80",
];

const heroEase = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
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

const heroLogo = {
  hidden: { opacity: 0, scale: 0.82, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.15, ease: heroEase },
  },
};

function preloadHeroImages(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(src);
          img.src = src;
        })
    )
  );
}

function HomeHero() {
  const appReady = useAppReady();
  const [bannerReady, setBannerReady] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    if (!appReady) return undefined;

    let cancelled = false;
    preloadHeroImages(heroImages).then(() => {
      if (!cancelled) setBannerReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [appReady]);

  const heroReveal = bannerReady;

  return (
    <Box ref={ref} className="home-hero-scroll">
      <motion.div
        className={`home-hero-scroll-media${bannerReady ? "" : " home-hero-scroll-media--pending"}`}
        style={{ scale: mediaScale, y: mediaY }}
      >
        {bannerReady ? (
          <motion.div
            className="home-hero-banner-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: heroEase }}
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={900}
              className="hero-image-swiper home-hero-swiper"
            >
              {heroImages.map((image) => (
                <SwiperSlide key={image}>
                  <Box className="hero-image-slide" sx={{ backgroundImage: `url(${image})` }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : null}
      </motion.div>

      <Box className="home-hero-scrim" aria-hidden />

      <motion.div
        className="hero-overlay-content home-hero-scroll-content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="home-hero-copy"
          initial="hidden"
          animate={heroReveal ? "visible" : "hidden"}
          variants={heroStagger}
        >
          <motion.div className="hero-logo-wrap" variants={heroLogo}>
            <motion.div
              className="hero-logo-float"
              animate={heroReveal ? { y: [0, -8, 0] } : { y: 0 }}
              transition={
                heroReveal
                  ? {
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.4,
                      },
                    }
                  : { duration: 0 }
              }
            >
              <span className="hero-logo-shine" aria-hidden />
              <BrandLogo asLink={false} className="hero-brand-logo" />
            </motion.div>
          </motion.div>

          <motion.div variants={heroItem}>
            <Typography component="h1" className="hero-title">
              <span className="hero-title-line">Trust Is The</span>
              <span className="hero-title-line">Business</span>
            </Typography>
          </motion.div>

          <motion.div variants={heroItem}>
            <Typography className="hero-subtitle">
              Thirty-two years of gold and diamond expertise — relationships, craft, and trade across the GCC.
            </Typography>
          </motion.div>

          <motion.div variants={heroItem}>
            <Box className="hero-cta-row home-hero-cta">
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/about"
                className="hero-cta-btn hero-btn-primary"
              >
                Our Story
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/contact"
                className="hero-cta-btn hero-btn-outline hero-cta-btn--wide"
              >
                Schedule a Conversation
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </motion.div>

      <Typography className="home-hero-scroll-hint" sx={{ opacity: heroReveal ? 1 : 0 }}>
        Scroll
      </Typography>

      <Box className="home-hero-bottom-blend" aria-hidden />
    </Box>
  );
}

export default HomeHero;

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";

function AboutImageCaption({ caption }) {
  if (!caption) return null;
  return <Typography className="about-image-caption">{caption}</Typography>;
}

function ParallaxImageFrame({ children, className, speed = 0.25, scaleRange = [1.14, 1, 1.08] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 90, speed * -90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange);

  return (
    <motion.figure
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="about-image-parallax-inner" style={{ y, scale }}>
        {children}
      </motion.div>
    </motion.figure>
  );
}

function AboutImage({ block }) {
  if (block.layout === "duo") {
    return (
      <ParallaxImageFrame className="about-image about-image--duo" speed={0.18}>
        <Box className="about-image-duo-grid">
          {block.images.map((img, i) => (
            <DuoParallaxItem key={img.src} img={img} index={i} />
          ))}
        </Box>
      </ParallaxImageFrame>
    );
  }

  if (block.layout === "split") {
    return (
      <ParallaxImageFrame className="about-image about-image--split" speed={0.32} scaleRange={[1.2, 1.02, 1.14]}>
        <Box className="about-image-split-frame">
          <img src={block.src} alt={block.alt} loading="lazy" />
          <Box className="about-image-shine" aria-hidden />
        </Box>
        <AboutImageCaption caption={block.caption} />
      </ParallaxImageFrame>
    );
  }

  if (block.layout === "banner") {
    return (
      <ParallaxImageFrame className="about-image about-image--banner" speed={0.28}>
        <img src={block.src} alt={block.alt} loading="lazy" />
      </ParallaxImageFrame>
    );
  }

  if (block.layout === "inset") {
    return (
      <ParallaxImageFrame className="about-image about-image--inset" speed={0.15} scaleRange={[1.06, 1, 1.04]}>
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.02}
          transitionSpeed={1200}
          glareEnable
          glareMaxOpacity={0.14}
          glareColor="#fbd180"
          className="about-image-tilt"
        >
          <img src={block.src} alt={block.alt} loading="lazy" />
        </Tilt>
        <AboutImageCaption caption={block.caption} />
      </ParallaxImageFrame>
    );
  }

  return (
    <ParallaxImageFrame className="about-image about-image--full" speed={0.22}>
      <Box className="about-image-full-frame">
        <img src={block.src} alt={block.alt} loading="lazy" />
        <Box className="about-image-vignette" aria-hidden />
      </Box>
      <AboutImageCaption caption={block.caption} />
    </ParallaxImageFrame>
  );
}

function DuoParallaxItem({ img, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const speed = index === 0 ? 0.12 : 0.28;
  const y = useTransform(scrollYProgress, [0, 1], [speed * 70, speed * -70]);

  return (
    <motion.div ref={ref} className="about-image-duo-item" style={{ y }}>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.015}
        transitionSpeed={1000}
        glareEnable
        glareMaxOpacity={0.1}
        glareColor="#fbd180"
        className="about-image-tilt"
      >
        <img src={img.src} alt={img.alt} loading="lazy" />
      </Tilt>
      <AboutImageCaption caption={img.caption} />
    </motion.div>
  );
}

export default AboutImage;

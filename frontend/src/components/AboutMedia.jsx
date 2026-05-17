import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutMedia({ src, alt, variant = "inset", caption, parallax = false }) {
  const ref = useRef(null);
  const useParallax = parallax || variant === "founder";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);

  return (
    <motion.figure
      ref={ref}
      className={`about-media about-media--${variant}${useParallax ? " about-media--parallax" : ""}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="about-media-frame">
        {useParallax ? (
          <motion.div className="about-media-parallax-inner" style={{ y: imgY, scale: imgScale }}>
            <img src={src} alt={alt} loading="lazy" />
          </motion.div>
        ) : (
          <img src={src} alt={alt} loading="lazy" />
        )}
      </motion.div>
      {caption ? <figcaption className="about-media-caption">{caption}</figcaption> : null}
    </motion.figure>
  );
}

export default AboutMedia;

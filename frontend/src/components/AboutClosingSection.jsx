import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function AboutClosingSection({ paragraphs, imageSrc }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const [bodyText, brandText] = paragraphs;

  return (
    <footer ref={ref} className="about-finale">
      <motion.div
        className="about-finale-inner"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="about-finale-body">{bodyText}</p>
        <p className="about-finale-brand">{brandText}</p>
      </motion.div>

      {imageSrc ? (
        <motion.div className="about-finale-visual" style={{ y: imageY }}>
          <img src={imageSrc} alt="" loading="lazy" aria-hidden />
          <span className="about-finale-visual-fade" aria-hidden />
        </motion.div>
      ) : null}
    </footer>
  );
}

export default AboutClosingSection;

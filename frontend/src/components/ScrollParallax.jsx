import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollParallax({
  children,
  className = "",
  speed = 0.35,
  scaleRange = [1.12, 1, 1.06],
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.75]);

  const Component = motion.div;

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <Component ref={ref} className={`parallax-wrap ${className}`}>
      <motion.div className="parallax-inner" style={{ y, scale }}>
        {children}
      </motion.div>
    </Component>
  );
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 48,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ opacity, y: translateY }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({ src, alt, speed = 0.2, className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -15}%`, `${speed * 15}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.12]);

  return (
    <motion.div ref={ref} className={`parallax-layer ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={reduced ? undefined : { y, scale }}
      />
    </motion.div>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.li
      ref={ref}
      className={`timeline-display-item ${isEven ? "timeline-display-item--left" : "timeline-display-item--right"}`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box className="timeline-display-marker" aria-hidden>
        <span className="timeline-display-dot" />
        {!isLast ? <span className="timeline-display-line" /> : null}
      </Box>

      <article className="timeline-display-card">
        <Typography className="timeline-display-era">{item.era}</Typography>
        <Typography component="h3" className="timeline-display-title">
          {item.title}
        </Typography>
        <Typography className="timeline-display-subtitle">{item.subtitle}</Typography>
        <Box className="timeline-display-body">
          {item.body.map((paragraph) => {
            const isQuote =
              paragraph.startsWith('"') ||
              paragraph.startsWith("'") ||
              paragraph.startsWith("\u201c") ||
              paragraph.startsWith("\u2018");
            return isQuote ? (
              <blockquote key={paragraph.slice(0, 28)} className="timeline-display-quote">
                {paragraph}
              </blockquote>
            ) : (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            );
          })}
        </Box>
      </article>
    </motion.li>
  );
}

function TimelineDisplay({
  title = "His Story, Start To Finish",
  eyebrow = "Prakash Jain",
  items,
  showHeader = true,
  variant = "default",
}) {
  return (
    <Box
      component="section"
      id={showHeader ? "timeline" : undefined}
      className={`timeline-display timeline-display--${variant}`}
      aria-label={title}
    >
      {showHeader ? (
        <Box className="timeline-display-header">
          <Typography className="section-eyebrow">{eyebrow}</Typography>
          <Typography component="h2" className="section-title">
            {title}
          </Typography>
        </Box>
      ) : null}

      <Box className="timeline-display-track-wrap">
        <span className="timeline-display-spine" aria-hidden />
        <ol className="timeline-display-list">
          {items.map((item, index) => (
            <TimelineItem
              key={item.era}
              item={item}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </ol>
      </Box>
    </Box>
  );
}

export default TimelineDisplay;

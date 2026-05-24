import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { timelineHero } from "../data/content";

function splitGhostEra(era) {
  const clean = era.replace(/'/g, "'");
  const match = clean.match(/^(\d{2})(.+)$/);
  if (match) return [match[1], match[2]];
  const mid = Math.ceil(clean.length / 2);
  return [clean.slice(0, mid), clean.slice(mid)];
}

function isQuote(text) {
  return (
    text.startsWith('"') ||
    text.startsWith("'") ||
    text.startsWith("\u201c") ||
    text.startsWith("\u2018")
  );
}

function TimelineMedia({ item, oval }) {
  return (
    <figure className={`timeline-display-media${oval ? " timeline-display-media--oval" : ""}`}>
      {item.image ? (
        <img src={item.image} alt={item.imageAlt || item.title} loading="lazy" />
      ) : (
        <div className="timeline-display-media-placeholder" aria-hidden />
      )}
    </figure>
  );
}

function TimelineBody({ item }) {
  return (
    <Box className="timeline-display-body">
      {item.body.map((paragraph) =>
        isQuote(paragraph) ? (
          <blockquote key={paragraph.slice(0, 28)} className="timeline-display-quote">
            {paragraph}
          </blockquote>
        ) : (
          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
        )
      )}
    </Box>
  );
}

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mediaLeft = index % 2 === 0;

  return (
    <motion.li
      ref={ref}
      className={`timeline-display-item${mediaLeft ? " timeline-display-item--media-left" : " timeline-display-item--media-right"}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="timeline-display-item-ghost" aria-hidden>
        {item.era}
      </span>

      <div className="timeline-display-year-row">
        <Typography component="span" className="timeline-display-year">
          {item.era}
        </Typography>
        <span className="timeline-display-dot" aria-hidden />
      </div>

      <div className="timeline-display-content-row">
        {mediaLeft ? <TimelineMedia item={item} oval={false} /> : null}

        <article
          className={`timeline-display-card${mediaLeft ? " timeline-display-card--align-left" : " timeline-display-card--align-right"}`}
        >
          <span className="timeline-display-connector" aria-hidden />
          <Typography className="timeline-display-title">{item.title}</Typography>
          {item.subtitle ? (
            <Typography className="timeline-display-subtitle">{item.subtitle}</Typography>
          ) : null}
          <TimelineBody item={item} />
        </article>

        {!mediaLeft ? <TimelineMedia item={item} oval /> : null}
      </div>

      {!isLast ? <span className="timeline-display-gap" aria-hidden /> : null}
    </motion.li>
  );
}

function TimelineDisplay({
  title = "Prakash Jain timeline",
  eyebrow = timelineHero.name,
  items,
  showHeader = true,
  variant = "default",
}) {
  const ghostEra = items[0]?.era ?? "";
  const [ghostLeft, ghostRight] = splitGhostEra(ghostEra);
  const [imageLeft, imageRight] = timelineHero.images;

  return (
    <Box
      component="section"
      className={`timeline-display timeline-display--${variant}`}
      aria-label={title}
    >
      {showHeader ? (
        <Box className="timeline-display-header">
          {ghostLeft ? (
            <span
              className="timeline-display-header-ghost timeline-display-header-ghost--left"
              aria-hidden
            >
              {ghostLeft}
            </span>
          ) : null}
          {ghostRight ? (
            <span
              className="timeline-display-header-ghost timeline-display-header-ghost--right"
              aria-hidden
            >
              {ghostRight}
            </span>
          ) : null}

          {imageLeft ? (
            <div className="timeline-display-header-visual timeline-display-header-visual--left">
              <img src={imageLeft.src} alt={imageLeft.alt} loading="eager" />
            </div>
          ) : null}
          {imageRight ? (
            <div className="timeline-display-header-visual timeline-display-header-visual--right">
              <img src={imageRight.src} alt={imageRight.alt} loading="eager" />
            </div>
          ) : null}

          <Box className="timeline-display-header-copy">
            {timelineHero.kicker ? (
              <Typography component="p" className="timeline-display-header-kicker">
                {timelineHero.kicker}
              </Typography>
            ) : null}
            <Typography component="h2" className="timeline-display-eyebrow">
              {eyebrow}
            </Typography>
          </Box>
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

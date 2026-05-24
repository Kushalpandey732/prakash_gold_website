import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { aboutContent, aboutHeroVideo, aboutImages } from "../data/content";
import AboutHeroParallax from "../components/AboutHeroParallax";
import AboutImage from "../components/AboutImage";
import AboutMedia from "../components/AboutMedia";
import AboutStoryParallax from "../components/AboutStoryParallax";
import AboutClosingSection from "../components/AboutClosingSection";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AboutPage() {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const progressOpacity = useTransform(scrollYProgress, [0, 0.04, 1], [0, 1, 1]);

  const proseBlocks = [
    { type: "lead", text: aboutContent.lead },
    { type: "p", text: aboutContent.founding, dropcap: true },
    { type: "figure", src: aboutImages.showcase, alt: "Fine gold jewellery", caption: "Craft & heritage" },
  ];

  const proseTailBlocks = [
    { type: "pullquote", text: aboutContent.together },
    { type: "p", text: aboutContent.direct },
  ];

  function renderProseBlock(block, index) {
    if (block.type === "lead") {
      return (
        <Reveal key={index} className="about-prose-lead-wrap">
          <p className="about-prose-lead">{block.text}</p>
        </Reveal>
      );
    }
    if (block.type === "figure") {
      return (
        <AboutImage
          key={index}
          block={{ layout: "full", src: block.src, alt: block.alt, caption: block.caption }}
        />
      );
    }
    if (block.type === "pullquote") {
      return (
        <Reveal key={index} className="about-prose-pullquote-wrap">
          <aside className="about-prose-pullquote">
            <p>{block.text}</p>
          </aside>
        </Reveal>
      );
    }
    return (
      <Reveal key={index} className="about-prose-block">
        <p className={`about-prose-p${block.dropcap ? " about-prose-p--dropcap" : ""}`}>{block.text}</p>
      </Reveal>
    );
  }

  return (
    <motion.article
      ref={pageRef}
      className="about-page about-page--refined"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="about-scroll-progress"
        style={{ scaleX: scrollYProgress, opacity: progressOpacity }}
        aria-hidden
      />

      <AboutHeroParallax videoSrc={aboutHeroVideo} imageSrc={aboutImages.hero} />

      <div className="about-prose-wrap">
        <motion.div
          className="about-prose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          {proseBlocks.map(renderProseBlock)}
        </motion.div>

        {aboutContent.founders.map((founder, index) => (
          <Reveal
            key={founder.id}
            className={`about-founder${index % 2 === 1 ? " about-founder--reverse" : ""}`}
          >
            <div className="about-founder-copy">
              <Typography component="h2" className="about-founder-name">
                {founder.name}
              </Typography>
              <Typography className="about-founder-role">{founder.role}</Typography>
              <p className="about-founder-text">{founder.text}</p>
            </div>
            <AboutMedia
              src={founder.image}
              alt={founder.imageAlt}
              caption={founder.caption}
              variant="founder"
            />
          </Reveal>
        ))}

        <motion.div className="about-prose about-prose--tail" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {proseTailBlocks.map(renderProseBlock)}
        </motion.div>

        <AboutStoryParallax
          imageSrc={aboutContent.story.image}
          paragraphs={aboutContent.story.paragraphs}
        />

        <AboutClosingSection
          paragraphs={aboutContent.closing.paragraphs}
          imageSrc={aboutContent.closing.image}
        />

        <Reveal className="about-end-cta-wrap">
          <section className="about-end-cta">
            <Typography className="about-section-label">Leadership</Typography>
            <Typography component="h2" className="about-end-cta-title">
              Two people. One business.
            </Typography>
            <Typography className="about-end-cta-text">
              Read the full stories of Prakash Jain and Hiren A. Patt — and the journey behind Prakash Gold LLC.
            </Typography>
            <Box className="about-end-cta-actions">
              <Button variant="contained" size="large" component={RouterLink} to="/founders">
                Meet our leadership
              </Button>
              <Button variant="outlined" size="large" component={RouterLink} to="/contact">
                Contact us
              </Button>
            </Box>
          </section>
        </Reveal>
      </div>
    </motion.article>
  );
}

export default AboutPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { founders, leadershipHeroVideo, aboutImages } from "../data/content";
import PageHeroParallax from "../components/PageHeroParallax";
import VideoPlaceholder from "../components/VideoPlaceholder";
import TimelineDrawer from "../components/TimelineDrawer";

function FoundersPage() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <motion.div
      className="founders-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeroParallax
        videoSrc={leadershipHeroVideo}
        imageSrc={aboutImages.heritage}
        eyebrow="The People Behind Leadership"
        title={
          <>
            <span className="about-hero-title-line">Three People</span>
            <span className="about-hero-title-line">One Business</span>
          </>
        }
        tagline="Prakash Gold LLC"
        titleClassName="about-hero-title about-hero-title--leadership"
      />

      {founders.map((founder, index) => (
        <Box
          key={founder.id}
          className={`founder-profile${index % 2 === 1 ? " reverse" : ""}`}
        >
          <Box className="founder-profile-media">
            <VideoPlaceholder
              className="video-placeholder--founder-profile"
              label={founder.name}
              src={founder.video}
              poster={founder.poster}
              hideLabel
            />
          </Box>
          <Box className="founder-profile-body">
            <Typography className="founder-role">{founder.role}</Typography>
            <Typography component="h2" className="founder-name">
              {founder.name}
            </Typography>
            <Typography className="founder-tagline-text">{founder.tagline}</Typography>

            {founder.bio
              ? founder.bio.map((paragraph) => (
                  <Typography key={paragraph.slice(0, 28)} className="founder-bio-text">
                    {paragraph}
                  </Typography>
                ))
              : null}

            {founder.hasTimeline ? (
              <Button
                variant="text"
                className="story-cta-btn"
                onClick={() => setTimelineOpen(true)}
                sx={{ mt: 2 }}
              >
                His Story, Start To Finish →
              </Button>
            ) : null}

            {index < founders.length - 1 ? <hr className="founder-divider" /> : null}
          </Box>
        </Box>
      ))}

      <TimelineDrawer open={timelineOpen} onClose={() => setTimelineOpen(false)} />
    </motion.div>
  );
}

export default FoundersPage;

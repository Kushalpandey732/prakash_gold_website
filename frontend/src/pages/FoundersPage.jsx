import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { founders } from "../data/content";
import VideoPlaceholder from "../components/VideoPlaceholder";
import TimelineDrawer from "../components/TimelineDrawer";

function FoundersPage() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box className="founders-intro">
        <Typography className="section-eyebrow">The People Behind Leadership</Typography>
        <Typography component="h1" className="about-hero-title">
          Two People. One Business.
        </Typography>
        <Typography className="founders-tagline">Prakash Gold LLC</Typography>
      </Box>

      {founders.map((founder, index) => (
        <Box
          key={founder.id}
          className={`founder-profile ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <Box
            className="founder-profile-media"
            sx={{ backgroundImage: `url(${founder.image})` }}
            role="img"
            aria-label={founder.name}
          />
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

            <VideoPlaceholder label={`${founder.name} — video`} />

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

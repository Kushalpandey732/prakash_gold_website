import { motion } from "framer-motion";
import { Avatar, Box, Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import { FaGem, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { FounderMetaBit, SectionBit } from "../components/ReactBits";

const founders = [
  {
    name: "Prakash Mehta",
    role: "Co-Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80",
    bio: "Leads design direction with a deep focus on heritage forms, modern silhouettes, and exceptional material quality.",
    tags: ["Design Vision", "Heritage Craft", "Global Luxury"],
    tenure: "18+ years",
  },
  {
    name: "Aarohi Desai",
    role: "Co-Founder & Client Experience Lead",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    bio: "Builds elevated customer journeys, private consultation programs, and premium service frameworks across markets.",
    tags: ["Private Concierge", "CX Strategy", "Brand Expansion"],
    tenure: "12+ years",
  },
  {
    name: "Raghav Bansal",
    role: "Chief Gemologist",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=80",
    bio: "Oversees gemstone selection, grading excellence, and transparent sourcing protocols across all collections.",
    tags: ["Diamond Grading", "Ethical Sourcing", "Quality Assurance"],
    tenure: "14+ years",
  },
  {
    name: "Meera Khanna",
    role: "Head of Product Innovation",
    image:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=900&q=80",
    bio: "Leads design-tech integration, 3D prototyping strategy, and limited-edition concept launches.",
    tags: ["3D Design", "Innovation", "Modern Aesthetics"],
    tenure: "10+ years",
  },
  {
    name: "Kabir Anand",
    role: "Director, Global Client Relations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    bio: "Drives international private client growth, bespoke consultations, and elite concierge operations.",
    tags: ["VIP Service", "Global Markets", "Bespoke Programs"],
    tenure: "11+ years",
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function FoundersPage() {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionBit
          eyebrow="Leadership"
          title="About the Founders"
          subtitle="Prakash Gold is led by founders combining timeless craftsmanship with modern luxury innovation."
        />
        <Box className="founder-hero-strip">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            className="founder-strip-stack"
          >
            <Box>
              <Typography variant="h5">Leadership Collective</Typography>
              <Typography color="text.secondary">
                A multi-disciplinary team shaping the future of luxury jewelry from Dubai.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} className="founder-stats-wrap">
              <Box className="founder-stat-pill">
                <Typography color="primary.main" fontWeight={700}>5</Typography>
                <Typography fontSize={13}>Core Leaders</Typography>
              </Box>
              <Box className="founder-stat-pill">
                <Typography color="primary.main" fontWeight={700}>65+</Typography>
                <Typography fontSize={13}>Years Combined Expertise</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <motion.div
          className="founders-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {founders.map((founder) => (
            <motion.div key={founder.name} className="founders-grid-item" variants={cardVariants}>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1400}
                transitionSpeed={900}
                glareEnable
                glareMaxOpacity={0.12}
                glareColor="#e1a140"
                className="founder-tilt-wrap"
              >
                <Card className="feature-card founder-card founder-card-shell">
                  <CardMedia
                    component="img"
                    image={founder.image}
                    alt={founder.name}
                    className="founder-media"
                  />
                  <CardContent className="founder-card-content">
                    <Box className="founder-head-row" mb={1}>
                      <Box display="flex" alignItems="center" gap={1.5} className="founder-profile-meta">
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                          <FaGem />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">{founder.name}</Typography>
                          <Typography color="text.secondary" fontSize={14}>
                            {founder.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="founder-socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="founder-linkedin">
                          <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="founder-linkedin">
                          <FaInstagram />
                        </a>
                      </Box>
                    </Box>
                    <Typography className="founder-tenure">{founder.tenure} luxury experience</Typography>
                    <Typography color="text.secondary" className="founder-bio">
                      {founder.bio}
                    </Typography>
                    <FounderMetaBit tags={founder.tags} />
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default FoundersPage;

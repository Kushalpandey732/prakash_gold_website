import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { FaAward, FaGem, FaGlobeAmericas, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { MetricBit } from "../components/ReactBits";
import "swiper/css";
import "swiper/css/pagination";

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const collections = [
  {
    title: "Signature Necklaces",
    subtitle: "Statement silhouettes for evening and legacy gifting.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Royal Wedding Sets",
    subtitle: "Bridal artistry with heirloom-quality finishing.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Diamond Statements",
    subtitle: "Precision-set stones with ethical sourcing.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Heritage Bangles",
    subtitle: "Modern heritage forms in 22K and 24K gold.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80",
  },
];

const highlights = [
  { text: "Bespoke bridal collections", Icon: FaGem },
  { text: "Ethically sourced diamonds", Icon: FaAward },
  { text: "24K and 22K gold artistry", Icon: FaHandshake },
  { text: "Global delivery and private concierge", Icon: FaGlobeAmericas },
];

const stats = [
  { end: 12000, suffix: "+", label: "Luxury clients" },
  { end: 150, suffix: "+", label: "Artisans & designers" },
  { end: 35, suffix: "+", label: "Markets worldwide" },
  { end: 99, suffix: "%", label: "Satisfaction rate" },
];

const milestones = [
  {
    year: "2008",
    title: "Brand foundation",
    description:
      "Boutique atelier model focused on handcrafted gold jewelry and personal relationships.",
  },
  {
    year: "2015",
    title: "Dubai flagship",
    description:
      "Global hub in Dubai for private clients, partners, and luxury retail experiences.",
  },
  {
    year: "2022",
    title: "Design technology",
    description:
      "3D prototyping and digital visualization for bespoke commissions and limited runs.",
  },
];

const pillars = [
  {
    icon: <FaGem />,
    title: "Craft & material",
    text: "Heritage techniques, rigorous stone selection, and finishing that lasts generations.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global service",
    text: "Concierge appointments, secure shipping, and aftercare wherever you are.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust & transparency",
    text: "Clear sourcing narratives and certification support for every major purchase.",
  },
];

function CompanyPage() {
  return (
    <Box className="company-page">
      <Box className="company-page-hero">
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="show" variants={heroContainer}>
            <motion.div variants={fadeUp}>
              <Chip label="Prakash Gold · Company" size="small" className="company-chip" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography variant="h2" className="company-page-title" sx={{ mt: 2, mb: 1.5 }}>
                A modern luxury
                <br />
                jewelry house
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography color="text.secondary" className="company-lead" maxWidth={620}>
                Heritage craftsmanship, precision design, and white-glove service — built for collectors who expect
                excellence in every detail.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} mt={3}>
                <Button variant="contained" size="large" component={RouterLink} to="/contact">
                  Book a consultation
                </Button>
                <Button variant="outlined" size="large" component={RouterLink} to="/founders">
                  Meet the team
                </Button>
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" className="company-page-body">
        <Grid container spacing={{ xs: 3, md: 4 }} className="company-split" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" letterSpacing={3}>
              Vision
            </Typography>
            <Typography variant="h4" sx={{ mt: 1, mb: 2, fontWeight: 700 }}>
              Crafting the future of fine jewelry
            </Typography>
            <Typography color="text.secondary" paragraph>
              From first sketch to final polish, we unite design intelligence with master handcrafting. Every piece
              tells a story of precision, warmth, and lasting value.
            </Typography>
            <Typography color="text.secondary" paragraph sx={{ mb: 0 }}>
              Our Dubai studio serves as a global gateway for private clients, bespoke programs, and limited
              collections.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} gap={1.2} mt={3} flexWrap="wrap">
              <MetricBit value="18K+" label="Signature pieces" />
              <MetricBit value="35+" label="Countries" />
              <MetricBit value="24/7" label="Concierge" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="company-image-collage">
              <img
                className="company-img company-img-main"
                src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury jewelry showcase"
                loading="lazy"
              />
              <img
                className="company-img company-img-accent"
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Fine jewelry detail"
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>

        <Box className="company-marquee-strip">
          <Marquee speed={32} gradient={false} pauseOnHover>
            {[
              "Bespoke bridal",
              "Diamond curation",
              "Heritage gold",
              "Private viewing",
              "Aftercare",
              "Global delivery",
            ].map((item) => (
              <span key={item} className="company-marquee-pill">
                {item}
              </span>
            ))}
          </Marquee>
        </Box>

        <Box className="company-section-head">
          <Typography variant="h4" fontWeight={700}>
            By the numbers
          </Typography>
          <Typography color="text.secondary" mt={0.5}>
            Trust built over years of consistent quality and client care.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Card className="company-stat-tile">
                <CardContent>
                  <Typography variant="h4" color="primary.main" fontWeight={800} sx={{ lineHeight: 1.1 }}>
                    <CountUp end={stat.end} duration={2.2} separator="," />
                    {stat.suffix}
                  </Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="company-section-head">
          <Typography variant="h4" fontWeight={700}>
            Signature collections
          </Typography>
          <Typography color="text.secondary" mt={0.5}>
            Curated lines for life’s most important moments.
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="company-collection-swiper"
          >
            {collections.map((c) => (
              <SwiperSlide key={c.title}>
                <Box className="company-collection-slide">
                  <Box className="company-collection-media" sx={{ backgroundImage: `url(${c.image})` }} />
                  <Box className="company-collection-copy">
                    <Typography variant="h5" fontWeight={700}>
                      {c.title}
                    </Typography>
                    <Typography color="text.secondary" mt={1}>
                      {c.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {pillars.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <Card className="company-pillar-card">
                <CardContent>
                  <Box className="company-pillar-icon">{p.icon}</Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 1.5 }}>
                    {p.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                    {p.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {[
            {
              title: "Design & prototyping",
              text: "Advanced 3D concepts and rapid iteration before any metal is cast.",
            },
            {
              title: "Artisan finishing",
              text: "Hand-polished surfaces and stone setting by experienced masters.",
            },
            {
              title: "Client experience",
              text: "Dedicated advisors for Dubai and remote appointments worldwide.",
            },
          ].map((row) => (
            <Grid item xs={12} md={4} key={row.title}>
              <Card className="company-mini-card">
                <CardContent>
                  <Typography variant="subtitle2" color="primary" fontWeight={700}>
                    {row.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                    {row.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="company-section-head">
          <Typography variant="h4" fontWeight={700}>
            Our journey
          </Typography>
        </Box>

        <Box className="company-timeline-modern">
          {milestones.map((m, idx) => (
            <Box key={m.year} className="company-timeline-row">
              <Typography className="company-timeline-year">{m.year}</Typography>
              <Box className="company-timeline-dot-wrap">
                <span className="company-timeline-dot" />
                {idx < milestones.length - 1 ? <span className="company-timeline-line" /> : null}
              </Box>
              <Box>
                <Typography fontWeight={700}>{m.title}</Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
                  {m.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Typography variant="h4" fontWeight={700} sx={{ mb: 2, mt: 1 }}>
          What we stand for
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {highlights.map(({ text, Icon }, index) => (
            <Grid item xs={12} sm={6} md={3} key={text}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.06 * index, duration: 0.45 }}
              >
                <Card className="company-highlight-card">
                  <CardContent>
                    <Icon className="company-highlight-icon" />
                    <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }}>
                      {text}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
                      Elevated standards across materials, design, and service.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="company-cta-band">
          <Typography variant="h5" fontWeight={700}>
            Ready to explore Prakash Gold?
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, mb: 2, maxWidth: 480 }}>
            Schedule a private consultation or visit our Dubai location — we’d love to help you find or create
            something extraordinary.
          </Typography>
          <Button variant="contained" size="large" component={RouterLink} to="/contact">
            Contact us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyPage;

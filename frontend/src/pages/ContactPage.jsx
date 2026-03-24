import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegUser,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  schedule: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const contactCards = [
  {
    title: "Call Concierge",
    text: "+971 50 123 4567",
    Icon: FaPhoneAlt,
  },
  {
    title: "Email Support",
    text: "care@prakashgold.com",
    Icon: FaEnvelope,
  },
  {
    title: "Visit Us",
    text: "Dubai Gold Souk, Deira",
    Icon: FaMapMarkerAlt,
  },
];

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, message: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Request failed");

      setStatus({ loading: false, message: "Enquiry submitted successfully." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message || "Could not submit enquiry.",
      });
    }
  };

  return (
    <Box className="contact-page">
      <Box className="contact-hero-band">
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <Chip size="small" className="contact-chip" label="Prakash Gold · Contact" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography variant="h2" className="contact-title" sx={{ mt: 2 }}>
                Let us craft your
                <br />
                next signature piece
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography color="text.secondary" className="contact-lead" sx={{ mt: 1.5, maxWidth: 700 }}>
                Book a private consultation, schedule a call, or visit our Dubai location. Our concierge team responds
                quickly and personally.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1.2} mt={3}>
                <Box className="contact-stat-pill">
                  <Typography variant="h5" color="primary.main" fontWeight={800}>
                    <CountUp end={98} duration={2} />%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Client satisfaction
                  </Typography>
                </Box>
                <Box className="contact-stat-pill">
                  <Typography variant="h5" color="primary.main" fontWeight={800}>
                    <CountUp end={24} duration={2} />h
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Typical response time
                  </Typography>
                </Box>
                <Box className="contact-stat-pill">
                  <Typography variant="h5" color="primary.main" fontWeight={800}>
                    <CountUp end={35} duration={2} />+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Countries served
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" className="contact-page-body">
        <Box className="contact-marquee-strip">
          <Marquee speed={34} gradient={false} pauseOnHover>
            {[
              "Private consultation",
              "Bespoke bridal appointments",
              "Global concierge support",
              "Secure insured delivery",
              "Aftercare & maintenance",
            ].map((item) => (
              <span key={item} className="contact-marquee-pill">
                {item}
              </span>
            ))}
          </Marquee>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {contactCards.map(({ title, text, Icon }) => (
            <Grid item xs={12} md={4} key={title}>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={1800} glareEnable glareMaxOpacity={0.12}>
                <Card className="contact-info-card">
                  <CardContent>
                    <Box className="contact-info-icon">
                      <Icon />
                    </Box>
                    <Typography variant="subtitle2" color="primary" fontWeight={700} sx={{ mt: 1.4 }}>
                      {title}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 0.5 }}>
                      {text}
                    </Typography>
                  </CardContent>
                </Card>
              </Tilt>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.2} className="contact-layout">
          <Grid item xs={12} md={7}>
            <Card className="contact-map-card">
              <CardContent>
                <Box className="contact-card-head">
                  <Stack direction="row" alignItems="center" gap={1.1}>
                    <FaMapMarkerAlt className="contact-inline-icon" />
                    <Typography variant="h5">Visit Our Dubai Location</Typography>
                  </Stack>
                  <Chip className="contact-head-chip" size="small" label="Flagship Boutique" />
                </Box>
                <Typography color="text.secondary" mt={1.1}>
                  Gold Souk Area, Deira, Dubai, United Arab Emirates
                </Typography>
                <Box className="contact-map-actions" mt={1.6}>
                  <Button size="small" variant="outlined">
                    Get directions
                  </Button>
                  <Button size="small" variant="outlined">
                    Call boutique
                  </Button>
                  <Button size="small" variant="outlined">
                    WhatsApp
                  </Button>
                </Box>
                <Box className="contact-badges" mt={2}>
                  <span>
                    <FaClock /> Open 10:00 AM - 10:00 PM
                  </span>
                  <span>
                    <FaShieldAlt /> Secure private appointments
                  </span>
                  <span>
                    <FaStar /> Premium lounge service
                  </span>
                </Box>
                <Box className="map-frame-wrap modern-map">
                  <iframe
                    title="Dubai Location Map"
                    src="https://www.google.com/maps?q=Dubai%20Gold%20Souk&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
                <Box className="contact-map-overlay">
                  <Typography variant="subtitle2" color="primary" fontWeight={700}>
                    Private showroom access
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Call ahead for concierge-guided visit and personalized collection preview.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card className="contact-form-card">
              <CardContent>
                <Box className="contact-card-head">
                  <Typography variant="h5">Enquiry Form</Typography>
                  <Chip className="contact-head-chip" size="small" label="Quick response" />
                </Box>
                <Typography color="text.secondary" mb={2.1} mt={0.8}>
                  Share your details and preferred time; our advisor will confirm shortly.
                </Typography>
                <Box className="contact-form-steps">
                  <span>1. Fill details</span>
                  <span>2. Choose time</span>
                  <span>3. Get confirmation</span>
                </Box>
                <form onSubmit={onSubmit} className="enquiry-form modern-enquiry-form">
                  <TextField
                    fullWidth
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaRegUser className="form-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    type="email"
                    label="Email address"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaEnvelope className="form-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone number"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaPhoneAlt className="form-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    type="datetime-local"
                    label="Preferred call time"
                    name="schedule"
                    value={form.schedule}
                    onChange={onChange}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaCalendarAlt className="form-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <Button type="submit" variant="contained" size="large" className="contact-submit-btn" disabled={status.loading}>
                    {status.loading ? "Submitting..." : "Schedule a call"}
                  </Button>
                  {status.message ? (
                    <Alert severity={status.message.toLowerCase().includes("success") ? "success" : "info"}>
                      {status.message}
                    </Alert>
                  ) : null}
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactPage;

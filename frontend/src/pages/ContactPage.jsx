import { useState } from "react";
import { motion } from "framer-motion";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import ContactMapBackground from "../components/ContactMapBackground";
import AppointmentModal from "../components/AppointmentModal";
import OurStoresSection from "../components/OurStoresSection";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  schedule: "",
};

function ContactPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
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

      setStatus({ loading: false, message: "Thank you — we will be in touch shortly." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message || "Could not submit. Please email us directly.",
      });
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactMapBackground />

      <div className="contact-page-content">
        <Box className="contact-hero-minimal">
          <Typography component="h1">Contact</Typography>
          <Box className="contact-divider" />
          <Typography className="section-lead" sx={{ mx: "auto", textAlign: "center" }}>
            For inquiries and partnerships
          </Typography>
        </Box>

        <Box className="contact-main-row">
          <OurStoresSection inline onBookAppointment={() => setAppointmentOpen(true)} />

          <Box id="contact-form" className="contact-form-section">
            <Typography component="h2">Schedule a conversation</Typography>
            <form onSubmit={onSubmit} className="minimal-form">
              <TextField
                fullWidth
                label="Full name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
              />
              <TextField
                fullWidth
                type="datetime-local"
                label="Preferred time"
                name="schedule"
                value={form.schedule}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="contact-submit-minimal"
                disabled={status.loading}
              >
                {status.loading ? "Sending…" : "Schedule a conversation"}
              </Button>
              {status.message ? (
                <Alert
                  severity={status.message.toLowerCase().includes("touch") ? "success" : "info"}
                  sx={{ borderRadius: 0 }}
                >
                  {status.message}
                </Alert>
              ) : null}
            </form>
          </Box>
        </Box>
      </div>

      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </motion.div>
  );
}

export default ContactPage;

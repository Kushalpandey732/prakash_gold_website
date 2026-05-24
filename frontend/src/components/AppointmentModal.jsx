import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import {
  appointmentLocations,
  appointmentServices,
  appointmentSubjects,
  phoneCountryCodes,
} from "../data/content";

const initialForm = {
  fullName: "",
  dialCode: "+971",
  phone: "",
  email: "",
  subject: "book",
  companyName: "",
  location: "instore",
  service: "",
  message: "",
};

function AppointmentModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("appointment-modal-open");
    return () => document.body.classList.remove("appointment-modal-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setStatus({ loading: false, message: "", error: false });
    }
  }, [open]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ loading: false, message: "", error: false });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const phoneFull = `${form.dialCode} ${form.phone}`.trim();

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "appointment",
          name: form.fullName,
          email: form.email,
          phone: phoneFull,
          subject: form.subject,
          companyName: form.companyName,
          location: form.location,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Request failed");

      setStatus({
        loading: false,
        message: data.message || "Thank you — we will confirm your appointment shortly.",
        error: false,
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message || "Could not submit. Please try again or call us directly.",
        error: true,
      });
    }
  };

  const content = (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="appointment-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            className="appointment-modal-backdrop"
            aria-label="Close"
            onClick={onClose}
          />

          <motion.div
            className="appointment-modal-panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="appointment-modal-header">
              <Box>
                <Typography className="appointment-modal-eyebrow">Prakash Gold LLC</Typography>
                <Typography component="h2" id="appointment-modal-title" className="appointment-modal-title">
                  Book an appointment
                </Typography>
                <Typography className="appointment-modal-lead">
                  Share your details and our team will reach out to confirm your visit or virtual
                  meeting.
                </Typography>
              </Box>
              <IconButton onClick={onClose} aria-label="Close" className="appointment-modal-close">
                <FaTimes />
              </IconButton>
            </header>

            <form onSubmit={onSubmit} className="appointment-modal-form">
              <div className="appointment-modal-grid appointment-modal-grid--duo">
                <TextField
                  fullWidth
                  required
                  label="Full name"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  className="appointment-field"
                />
                <TextField
                  fullWidth
                  label="Company name"
                  name="companyName"
                  value={form.companyName}
                  onChange={onChange}
                  className="appointment-field"
                />
              </div>

              <div className="appointment-modal-grid appointment-modal-grid--phone">
                <FormControl required className="appointment-field appointment-field--dial">
                  <InputLabel id="appointment-dial-label">Code</InputLabel>
                  <Select
                    labelId="appointment-dial-label"
                    label="Code"
                    name="dialCode"
                    value={form.dialCode}
                    onChange={onChange}
                  >
                    {phoneCountryCodes.map((item) => (
                      <MenuItem key={item.dial} value={item.dial}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  required
                  type="tel"
                  label="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="appointment-field appointment-field--number"
                  inputProps={{ inputMode: "tel" }}
                />
              </div>

              <TextField
                fullWidth
                required
                type="email"
                label="Email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="appointment-field"
              />

              <fieldset className="appointment-modal-fieldset">
                <legend>Subject</legend>
                <div className="appointment-chip-group" role="radiogroup" aria-label="Subject">
                  {appointmentSubjects.map((item) => (
                    <label
                      key={item.value}
                      className={`appointment-chip${form.subject === item.value ? " is-selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={item.value}
                        checked={form.subject === item.value}
                        onChange={onChange}
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="appointment-modal-fieldset">
                <legend>Location of appointment</legend>
                <div
                  className="appointment-chip-group"
                  role="radiogroup"
                  aria-label="Location of appointment"
                >
                  {appointmentLocations.map((item) => (
                    <label
                      key={item.value}
                      className={`appointment-chip${form.location === item.value ? " is-selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="location"
                        value={item.value}
                        checked={form.location === item.value}
                        onChange={onChange}
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <FormControl fullWidth required className="appointment-field">
                <InputLabel id="appointment-service-label">Select service</InputLabel>
                <Select
                  labelId="appointment-service-label"
                  label="Select service"
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Choose a service
                  </MenuItem>
                  {appointmentServices.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
                {!form.service ? (
                  <FormHelperText>Select the service you are interested in</FormHelperText>
                ) : null}
              </FormControl>

              <TextField
                fullWidth
                required
                multiline
                minRows={4}
                label="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                className="appointment-field"
                placeholder="Tell us about your requirements or preferred date and time…"
              />

              {status.message ? (
                <Alert
                  severity={status.error ? "error" : "success"}
                  className="appointment-modal-alert"
                  sx={{ borderRadius: 0 }}
                >
                  {status.message}
                </Alert>
              ) : null}

              <Button
                type="submit"
                variant="contained"
                size="large"
                className="appointment-modal-submit"
                disabled={status.loading || !form.service}
              >
                {status.loading ? "Sending…" : "Submit request"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

export default AppointmentModal;

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { prakashTimeline } from "../data/content";
import TimelineDisplay from "./TimelineDisplay";

function TimelineDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("timeline-experience-open");
    return () => document.body.classList.remove("timeline-experience-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const content = (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="timeline-experience timeline-experience--heritage"
          role="dialog"
          aria-modal="true"
          aria-label="Prakash Jain — timeline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            className="timeline-experience-backdrop"
            aria-label="Close timeline"
            onClick={onClose}
          />

          <motion.div
            className="timeline-experience-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <IconButton
              onClick={onClose}
              aria-label="Close timeline"
              className="timeline-experience-close--float"
            >
              <FaTimes />
            </IconButton>

            <div className="timeline-experience-scroll" data-lenis-prevent>
              <TimelineDisplay items={prakashTimeline} variant="heritage" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

export default TimelineDrawer;

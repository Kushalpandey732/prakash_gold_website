import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSetAppReady } from "../context/AppReadyContext";
import logoMark from "../initial.png";

const MIN_DISPLAY_MS = 1600;
const EXIT_MS = 650;

function LoadingScreen() {
  const setAppReady = useSetAppReady();
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const started = Date.now();

    const finish = () => {
      const wait = Math.max(0, MIN_DISPLAY_MS - (Date.now() - started));
      window.setTimeout(() => setPhase("exit"), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const fallback = window.setTimeout(finish, 4500);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return undefined;
    document.body.classList.add("app-loaded");
    const t = window.setTimeout(() => {
      setPhase("done");
      setAppReady(true);
    }, EXIT_MS);
    return () => window.clearTimeout(t);
  }, [phase, setAppReady]);

  return (
    <AnimatePresence mode="wait">
      {phase !== "done" ? (
        <motion.div
          className="loading-screen"
          role="status"
          aria-live="polite"
          aria-label="Loading Prakash Gold"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="loading-screen-inner"
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="loading-screen-logo-wrap"
              initial={{ opacity: 0, scale: 0.75, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="loading-screen-ring" aria-hidden />
              <span className="loading-screen-ring loading-screen-ring--outer" aria-hidden />
              <img src={logoMark} alt="" className="loading-screen-logo" />
            </motion.div>

            <motion.p
              className="loading-screen-brand"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Prakash Gold LLC
            </motion.p>

            <motion.div
              className="loading-screen-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              aria-hidden
            >
              <span className="loading-screen-bar-fill" />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default LoadingScreen;

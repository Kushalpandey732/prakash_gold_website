import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, Typography } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { prakashTimeline } from "../data/content";
import logoFull from "../PrakashGoldLogo.png";
import logoMark from "../initial.png";

const pageEase = [0.22, 1, 0.36, 1];
const flipEase = [0.76, 0, 0.24, 1];
const FLIP_DURATION = 0.95;
const WHEEL_THRESHOLD = 55;
const spreadCount = prakashTimeline.length + 2;

function isQuote(text) {
  return (
    text.startsWith('"') ||
    text.startsWith("'") ||
    text.startsWith("\u201c") ||
    text.startsWith("\u2018")
  );
}

function PageCorners() {
  return (
    <>
      <span className="timeline-book-corner timeline-book-corner--tl" aria-hidden />
      <span className="timeline-book-corner timeline-book-corner--tr" aria-hidden />
      <span className="timeline-book-corner timeline-book-corner--bl" aria-hidden />
      <span className="timeline-book-corner timeline-book-corner--br" aria-hidden />
    </>
  );
}

function StoryBody({ item }) {
  return (
    <motion.div
      key={item.era}
      className="timeline-book-body"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: pageEase, delay: 0.12 }}
    >
      {item.body.map((paragraph, i) =>
        isQuote(paragraph) ? (
          <motion.blockquote
            key={paragraph.slice(0, 32)}
            className="timeline-book-quote"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: pageEase, delay: 0.2 + i * 0.06 }}
          >
            {paragraph}
          </motion.blockquote>
        ) : (
          <motion.p
            key={paragraph.slice(0, 32)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: pageEase, delay: 0.16 + i * 0.05 }}
          >
            {paragraph}
          </motion.p>
        )
      )}
    </motion.div>
  );
}

function LeftSpread({ item, pageNumber, end = false }) {
  if (end) {
    return (
      <motion.div
        key="end-left"
        className="timeline-book-page timeline-book-page--left timeline-book-page--end-left timeline-book-page--lux"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: pageEase }}
      >
        <PageCorners />
        <Typography className="timeline-book-end-label">The End</Typography>
        <div className="timeline-book-left-rule" aria-hidden />
      </motion.div>
    );
  }

  return (
    <motion.div
      key={item.era}
      className="timeline-book-page timeline-book-page--left timeline-book-page--lux"
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.52, ease: pageEase }}
    >
      <PageCorners />
      <span className="timeline-book-page-num">{String(pageNumber).padStart(2, "0")}</span>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: pageEase, delay: 0.08 }}
      >
        <Typography className="timeline-book-era">{item.era}</Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: pageEase, delay: 0.14 }}
      >
        <Typography component="h3" className="timeline-book-title">
          {item.title}
        </Typography>
        <Typography className="timeline-book-subtitle">{item.subtitle}</Typography>
      </motion.div>
      <div className="timeline-book-left-rule" aria-hidden />
    </motion.div>
  );
}

function RightFlippingPage({ phase, page, onFlipComplete, className = "", children }) {
  const isFlipping = phase === "flip-forward" || phase === "flip-back";
  const flipDir = phase === "flip-forward" ? "forward" : "back";

  return (
    <motion.div
      key={`right-${page}-${phase}`}
      className={`timeline-book-page timeline-book-page--right timeline-book-page--lux ${isFlipping ? `is-flipping is-flipping--${flipDir}` : ""} ${className}`.trim()}
      initial={
        phase === "flip-back"
          ? { rotateY: -178, z: 56, rotateX: 0.6 }
          : { rotateY: 0, z: 0, rotateX: 0 }
      }
      animate={{
        rotateY: phase === "flip-forward" ? -178 : 0,
        z: isFlipping ? 56 : 0,
        rotateX: isFlipping ? 0.8 : 0,
      }}
      transition={{ duration: FLIP_DURATION, ease: flipEase }}
      style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
      onAnimationComplete={() => {
        if (isFlipping) onFlipComplete();
      }}
    >
      <motion.div className="timeline-book-page-face timeline-book-page-face--front">
        <PageCorners />
        {children}
        <span className="timeline-book-page-curl" aria-hidden />
        <span className="timeline-book-page-shine" aria-hidden />
      </motion.div>
      <motion.div className="timeline-book-page-face timeline-book-page-face--back" aria-hidden>
        <motion.div className="timeline-book-page-back-inner" />
        <PageCorners />
      </motion.div>
    </motion.div>
  );
}


function TimelineDrawer({ open, onClose }) {
  const viewportRef = useRef(null);
  const wheelAccum = useRef(0);
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState("idle");

  const maxPage = prakashTimeline.length + 1;
  const effectivePage = phase === "opening" ? 1 : page;
  const chapterIndex = effectivePage - 1;
  const currentChapter =
    effectivePage > 0 && effectivePage <= prakashTimeline.length
      ? prakashTimeline[chapterIndex]
      : null;
  const isEnd = effectivePage === maxPage;
  const isCover = page === 0;
  const isBusy = phase !== "idle";

  const spreadLabel =
    page === 0 ? "Cover" : isEnd ? "Finale" : prakashTimeline[chapterIndex]?.era;

  const finishPhase = useCallback((nextPage) => {
    setPage(nextPage);
    setPhase("idle");
    wheelAccum.current = 0;
  }, []);

  const goNext = useCallback(() => {
    if (isBusy) return;
    if (page === 0) {
      setPhase(reducedMotion.current ? "idle" : "opening");
      if (reducedMotion.current) setPage(1);
      return;
    }
    if (page < maxPage) {
      setPhase(reducedMotion.current ? "idle" : "flip-forward");
      if (reducedMotion.current) setPage((p) => p + 1);
    }
  }, [isBusy, page, maxPage]);

  const goPrev = useCallback(() => {
    if (isBusy) return;
    if (page === 0) return;
    if (page === 1) {
      setPhase(reducedMotion.current ? "idle" : "closing");
      if (reducedMotion.current) setPage(0);
      return;
    }
    if (reducedMotion.current) {
      setPage((p) => p - 1);
      return;
    }
    setPage((p) => p - 1);
    setPhase("flip-back");
  }, [isBusy, page]);

  const onFlipComplete = useCallback(() => {
    if (phase === "flip-forward") finishPhase(page + 1);
    else if (phase === "flip-back") {
      setPhase("idle");
      wheelAccum.current = 0;
    }
  }, [phase, page, finishPhase]);

  const onCoverOpenComplete = useCallback(() => {
    if (phase === "opening") finishPhase(1);
    else if (phase === "closing") finishPhase(0);
  }, [phase, finishPhase]);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("timeline-experience-open");
    setPage(0);
    setPhase("idle");
    wheelAccum.current = 0;
    return () => document.body.classList.remove("timeline-experience-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const el = viewportRef.current;
    if (!el) return undefined;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isBusy) return;
      wheelAccum.current += e.deltaY;
      if (Math.abs(wheelAccum.current) < WHEEL_THRESHOLD) return;
      const dir = wheelAccum.current > 0 ? 1 : -1;
      wheelAccum.current = 0;
      if (dir > 0) goNext();
      else goPrev();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open, isBusy, goNext, goPrev]);

  useEffect(() => {
    if (!open) return undefined;
    const el = viewportRef.current;
    if (!el) return undefined;

    let touchY = 0;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      if (isBusy) return;
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 40) return;
      if (dy > 0) goNext();
      else goPrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, isBusy, goNext, goPrev]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goNext, goPrev]);

  const showOpenBook = page > 0 || phase === "opening";
  const showCover = page === 0 || phase === "closing" || phase === "opening";

  const content = (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="timeline-experience timeline-experience--book-only"
          role="dialog"
          aria-modal="true"
          aria-label="Prakash Jain timeline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: pageEase }}
        >
          <button type="button" className="timeline-book-dismiss" aria-label="Close timeline" onClick={onClose} />

          <IconButton onClick={onClose} aria-label="Close timeline" className="timeline-book-close">
            <FaTimes />
          </IconButton>

          <motion.div
            ref={viewportRef}
            className="timeline-book-viewport"
            data-lenis-prevent
            tabIndex={-1}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: pageEase }}
          >
            <motion.div
              className="timeline-book-scene"
              animate={
                phase === "flip-forward" || phase === "flip-back"
                  ? { rotateX: -1.2, scale: 1.01 }
                  : { rotateX: 0, scale: 1 }
              }
              transition={{ duration: FLIP_DURATION, ease: flipEase }}
            >
              <AnimatePresence>
                {showCover && (
                  <motion.div
                    key="cover"
                    className="timeline-book-closed-wrap"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.5, ease: pageEase }}
                  >
                    <motion.div
                      className="timeline-book-closed timeline-book-closed--lux"
                      animate={{
                        rotateY: phase === "opening" ? -162 : 0,
                        z: phase === "opening" ? 24 : 0,
                      }}
                      initial={phase === "closing" ? { rotateY: -162, z: 24 } : { rotateY: 0, z: 0 }}
                      transition={{ duration: FLIP_DURATION, ease: flipEase }}
                      onAnimationComplete={() => {
                        if (phase === "opening" || phase === "closing") onCoverOpenComplete();
                      }}
                      style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                    >
                      <div className="timeline-book-closed-face">
                        <PageCorners />
                        <span className="timeline-book-cover-gilt" aria-hidden />
                        <img src={logoFull} alt="Prakash Gold" className="timeline-book-cover-logo" />
                        <Typography className="timeline-book-cover-eyebrow">Prakash Jain</Typography>
                        <span className="timeline-book-cover-hint">
                          {phase === "opening" ? "Opening…" : "Scroll to open"}
                        </span>
                      </div>
                      <motion.div className="timeline-book-closed-edge" aria-hidden />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showOpenBook && (
                  <motion.div
                    key="open-book"
                    className="timeline-book-open timeline-book-open--lux"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{
                      opacity: phase === "closing" ? 0 : 1,
                      scale: phase === "closing" ? 0.98 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: pageEase }}
                  >
                    <span className="timeline-book-open-gilt" aria-hidden />
                    {isEnd ? (
                      <>
                        <LeftSpread end />
                        <motion.div className="timeline-book-spine" aria-hidden />
                        <RightFlippingPage phase={phase} page={page} onFlipComplete={onFlipComplete} className="timeline-book-page--end-right">
                          <motion.div
                            className="timeline-book-end"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: pageEase }}
                          >
                            <motion.img
                              src={logoMark}
                              alt="Prakash Gold LLC"
                              className="timeline-book-end-logo"
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, ease: pageEase, delay: 0.1 }}
                            />
                            <Typography className="timeline-book-end-text">
                              Thirty-two years in the making, now entirely his own.
                            </Typography>
                            <button type="button" className="timeline-book-end-btn" onClick={onClose}>
                              Close book
                            </button>
                          </motion.div>
                        </RightFlippingPage>
                      </>
                    ) : (
                      currentChapter && (
                        <>
                          <LeftSpread item={currentChapter} pageNumber={chapterIndex + 1} />
                          <motion.div className="timeline-book-spine" aria-hidden />
                          <RightFlippingPage phase={phase} page={page} onFlipComplete={onFlipComplete}>
                            <StoryBody item={currentChapter} />
                          </RightFlippingPage>
                        </>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <p className="timeline-book-hint" aria-live="polite">
              {isCover && phase === "idle"
                ? "Scroll or swipe to open"
                : isEnd
                  ? "Scroll up to go back"
                  : "Scroll or swipe to turn the page"}
            </p>

            <motion.div
              className="timeline-book-pagination"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Array.from({ length: spreadCount }, (_, i) => (
                <motion.span
                  key={i}
                  className={`timeline-book-dot${page === i ? " is-active" : ""}`}
                  layout
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              ))}
            </motion.div>

            <Typography className="timeline-book-spread-label" aria-live="polite">
              {spreadLabel}
            </Typography>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

export default TimelineDrawer;

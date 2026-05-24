import { useEffect, useRef, useState } from "react";
import { HiShare, HiX } from "react-icons/hi";
import { FaInstagram, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../data/content";

const iconMap = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  snapchat: FaSnapchatGhost,
};

function SocialWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`social-widget${open ? " is-open" : ""}`}
      data-lenis-prevent
    >
      <div className="social-widget-links" role="menu" aria-label="Social links">
        {socialLinks.map((link, index) => {
          const Icon = iconMap[link.id];
          return (
            <button
              key={link.id}
              type="button"
              className={`social-widget-badge social-widget-badge--${link.id}`}
              aria-label={link.label}
              role="menuitem"
              style={{ transitionDelay: open ? `${index * 55}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <Icon aria-hidden />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="social-widget-toggle"
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="social-widget-toggle-icon social-widget-toggle-icon--open" aria-hidden>
          <HiShare />
        </span>
        <span className="social-widget-toggle-icon social-widget-toggle-icon--close" aria-hidden>
          <HiX />
        </span>
      </button>
    </div>
  );
}

export default SocialWidget;

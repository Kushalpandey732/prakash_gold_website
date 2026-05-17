const UAE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4625232!2d51.5795!3d23.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xdefb5226663d9424!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1715940000000!5m2!1sen!2sae";

function ContactMapBackground() {
  return (
    <div className="contact-map-layer" aria-hidden>
      <iframe
        className="contact-map-iframe"
        title="United Arab Emirates — Google Maps"
        src={UAE_MAP_EMBED}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
      />
      <div className="contact-map-overlay" />
    </div>
  );
}

export default ContactMapBackground;

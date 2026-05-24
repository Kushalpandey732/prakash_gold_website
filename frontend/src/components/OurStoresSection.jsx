import { Typography } from "@mui/material";
import { contactStore } from "../data/content";

function OurStoresSection({ inline = false, onBookAppointment }) {
  const store = contactStore;

  return (
    <section
      className={`our-stores${inline ? " our-stores--inline" : ""}`}
      aria-labelledby="our-stores-heading"
    >
      <Typography component="h2" id="our-stores-heading" className="our-stores-title">
        Our Stores
      </Typography>

      <div className="our-stores-single-wrap">
        <article className="our-stores-card">
          <img src={store.image} alt={store.imageAlt} loading="lazy" />
          <div className="our-stores-card-scrim" aria-hidden />

          <div className="our-stores-card-footer">
            <div className="our-stores-card-panel">
              <Typography component="h3" className="our-stores-city">
                {store.city}
              </Typography>
              <Typography className="our-stores-address">
                {store.address}
                {store.addressLine2 ? (
                  <>
                    <br />
                    {store.addressLine2}
                  </>
                ) : null}
              </Typography>
              <Typography className="our-stores-phone">
                Telephone: <a href={store.phoneHref}>{store.phone}</a>
              </Typography>
              <Typography className="our-stores-email">
                Email: <a href={store.emailHref}>{store.email}</a>
              </Typography>
            </div>

            <button type="button" className="our-stores-cta" onClick={onBookAppointment}>
              Book an appointment
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OurStoresSection;

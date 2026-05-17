import { Link } from "react-router-dom";
import logoFull from "../PrakashGoldLogo.png";
import logoMark from "../initial.png";

function BrandLogo({ className = "", asLink = true, to = "/", variant = "full" }) {
  const isMark = variant === "mark";
  const src = isMark ? logoMark : logoFull;
  const alt = isMark ? "Prakash Gold" : "Prakash Gold LLC";

  const image = (
    <img
      src={src}
      alt={alt}
      className={`brand-logo ${isMark ? "brand-logo--mark" : ""} ${className}`.trim()}
    />
  );

  if (!asLink) return image;

  return (
    <Link to={to} className="brand-logo-link" aria-label="Prakash Gold LLC — Home">
      {image}
    </Link>
  );
}

export default BrandLogo;

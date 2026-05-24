import PageHeroParallax from "./PageHeroParallax";

function AboutHeroParallax({ videoSrc, imageSrc }) {
  return (
    <PageHeroParallax
      videoSrc={videoSrc}
      imageSrc={imageSrc}
      eyebrow="Prakash Gold LLC"
      title="About Us"
    />
  );
}

export default AboutHeroParallax;

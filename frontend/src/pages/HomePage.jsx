import { motion } from "framer-motion";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const heroImages = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1900&q=80",
];

function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Box className="home-hero-fullscreen">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="hero-image-swiper"
        >
          {heroImages.map((image) => (
            <SwiperSlide key={image}>
              <Box className="hero-image-slide" sx={{ backgroundImage: `url(${image})` }} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box className="hero-overlay-content">
          <Chip label="Luxury Jewelry House" color="primary" variant="filled" />
          <Typography variant="h2" mt={2}>
            Timeless Elegance, Crafted for a Global Legacy
          </Typography>
          <Typography className="hero-overlay-subtitle" mt={1.5}>
            Experience a premium digital showroom with signature collections, private
            consultations, and handcrafted masterpieces from Prakash Gold.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} mt={3}>
            <Button variant="contained" size="large">
              Explore Collections
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Schedule a Consultation
            </Button>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}

export default HomePage;

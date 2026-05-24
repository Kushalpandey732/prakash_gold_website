import { motion } from "framer-motion";
import { useAppReady } from "../context/AppReadyContext";
import HomeHero from "../components/HomeHero";

function HomePage() {
  const appReady = useAppReady();

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: appReady ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeHero />
    </motion.div>
  );
}

export default HomePage;

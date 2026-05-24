import { Route, Routes, useLocation } from "react-router-dom";
import { AppReadyProvider } from "./context/AppReadyContext";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialWidget from "./components/SocialWidget";
import HomePage from "./pages/HomePage";
import FoundersPage from "./pages/FoundersPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <AppReadyProvider>
      <LoadingScreen />
      <div className={`app-shell${isHome ? " app-shell--home" : ""}`}>
      <Navbar />
      <main className={`page-container ${isHome ? "home-main" : "inner-main"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company" element={<AboutPage />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      <SocialWidget />
    </div>
    </AppReadyProvider>
  );
}

export default App;

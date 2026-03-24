import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FoundersPage from "./pages/FoundersPage";
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <Navbar />
      <main className={`page-container ${isHome ? "home-main" : "inner-main"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

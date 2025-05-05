import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <div className="app-grid">
    <Router>
      <DarkModeToggle />
      <Navbar />
      <main style={{ padding: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

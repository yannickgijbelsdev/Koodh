import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MeetUs from "./pages/MeetUs";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import Microsoft365 from "./pages/Microsoft365";
import ItConsultancy from "./pages/ItConsultancy";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-us" element={<MeetUs />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/microsoft-365" element={<Microsoft365 />} />
          <Route path="/it-consultancy" element={<ItConsultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SimplePage from "./pages/SimplePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<SimplePage title="Work" />} />
          <Route path="/work/:slug" element={<SimplePage title="Case Study" />} />
          <Route path="/about" element={<SimplePage title="About" />} />
          <Route path="/journal" element={<SimplePage title="Journal" />} />
          <Route path="/lab" element={<SimplePage title="Lab" />} />
          <Route path="/careers" element={<SimplePage title="Careers" />} />
          <Route path="/contact" element={<SimplePage title="Contact" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

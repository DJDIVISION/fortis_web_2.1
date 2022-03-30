import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';
import Home from "./pages"
import About from "./pages/about";
import Tokenomics from "./pages/tokenomics"
import Roadmap from "./pages/roadmap"

function App() {
  return (
    <Router>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/tokenomics" element={<Tokenomics />}/>
              <Route exact path="/roadmap" element={<Roadmap />}/>
            </Routes>
          </AnimatePresence>
  </Router>
  );
}

export default App;

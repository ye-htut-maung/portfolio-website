import "./App.css";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Underconstruction from "./components/Underconstruction";

function App() {
    return (
        <Router>
            <div className="main-container min-h-screen font-lora">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Bio />} />
                    <Route path="/blog" element={<Underconstruction />} />
                    <Route path="/experience" element={<Underconstruction />} />
                    <Route path="/projects" element={<Underconstruction />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

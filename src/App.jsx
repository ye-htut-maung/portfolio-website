import "./App.css";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="main-container min-h-screen font-lora">
                <Navbar />
                <Bio />
                <Footer />
            </div>
        </>
    );
}

export default App;

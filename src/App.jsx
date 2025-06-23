import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto px-4 py-8 flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tracking" element={<Track />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholder components for routes

const Login = () => <h1 className="text-9xl font-bold">Login Page</h1>;
const Signup = () => <h1 className="text-9xl font-bold">Signup Page</h1>;

export default App;

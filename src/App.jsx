import { useEffect, useState } from 'react';
import "./App.css";
import About from "./components/About";
import Achievement from "./components/Achievement";
import Certificate from "./components/Certificate";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app-content">
      <div className="starry-background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Certificate />
        <Achievement />
        <Contact />
        <Footer />
        <Chatbot />
        </div>
  );
}


export default App;
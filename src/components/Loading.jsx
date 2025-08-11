import { useEffect, useRef } from 'react';
import '../styles/Loading.css';

const Loading = () => {
  const nameRef = useRef(null);
  const logoRef = useRef(null);
  const letters = "RMAHALE";

  useEffect(() => {
    // Name animation
    let nameInterval = null;
    let iteration = 0;
    
    const animateName = () => {
      nameRef.current.innerText = nameRef.current.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return letters[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      
      if(iteration >= letters.length) {
        clearInterval(nameInterval);
        return;
      }
      
      iteration += 1/3;
    };

    nameInterval = setInterval(animateName, 50);

    // Logo rotation/buffering animation
    let angle = 0;
    let scale = 1;
    let growing = false;
    const rotateLogo = () => {
      if (logoRef.current) {
        // Continuous rotation
        angle += 2; // Rotation speed
        
        // Pulsing scale effect
        if (growing) {
          scale += 0.005;
          if (scale >= 1.1) growing = false;
        } else {
          scale -= 0.005;
          if (scale <= 0.9) growing = true;
        }
        
        logoRef.current.style.transform = `rotate(${angle}deg) scale(${scale})`;
      }
      requestAnimationFrame(rotateLogo);
    };
    rotateLogo();
    
    return () => {
      clearInterval(nameInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Rotating Logo */}
        <div className="logo-container" ref={logoRef}>
          <img 
            src="/logo.jpg" 
            alt="Rmahale Logo" 
            className="loading-logo" 
          />
        </div>
        
        {/* Animated name */}
        <h1 className="rmahale-name" ref={nameRef}>•••••••</h1>
      </div>
    </div>
  );
};

export default Loading;
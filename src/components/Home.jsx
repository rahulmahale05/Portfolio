import profileImage from '../assets/DP2.jpg';
import '../styles/Home.css';

const Home = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Rahul_CV.pdf';
    link.download = 'Rahul_Mahale_CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="home-content">
          <h1 className="home-title">
            Hello, I'm <span className="highlight">Rahul Mahale</span>
          </h1>
          <p className="home-subtitle">E&TC Engineer | MERN Stack Developer</p>
          <p className="home-description">
            Building digital experiences that matter. Let’s create something extraordinary. Explore my work ↓
          </p>
          <div className="home-buttons">
            <button 
              onClick={handleDownloadCV} 
              className="btn btn-primary"
            >
              Get My CV
            </button>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

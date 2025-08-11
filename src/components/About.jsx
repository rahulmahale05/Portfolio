import { useState } from "react";
import {
  FaBriefcase // Add this new icon
  ,
  FaChartLine,
  FaCode,
  FaReact,
  FaFilm,
  FaGraduationCap,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Profile Summary",
      icon: <FaLaptopCode className="tab-icon" />,
      content: (
        <div className="profile-content">
          <p className="section-text">
            Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). Skilled in building scalable web applications and RESTful APIs. Proficient in Java and Data Structures & Algorithms, with a strong foundation in both backend logic and frontend design. Passionate about crafting efficient, responsive, and modern digital experiences.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaReact className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>MERN Stack Development</h4>
                <p>MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Postman</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaChartLine className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>DSA in Java</h4>
                <p>Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Trie, Graphs, HashMaps, Recursion, Sorting & Searching Algorithms</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      icon: <FaGraduationCap className="tab-icon" />,
      content: (
        <div className="education-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2022 - 2026 (Expected)</div>
                <h4>Bachelor of Engineering in Electronics & Telecommunication</h4>
                <p className="institution">JSPM's Bhivarabai Sawant Institute of Technology and Research, Wagholi</p>
                <p className="achievement">Current CGPA: 9.26 (Till 3rd Year)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2022</div>
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p className="institution">Dnyanmandir Junior College, Ale, Pune</p>
                <p className="achievement">Percentage: 61.67%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2019 - 2020</div>
                <h4>Secondary School Certificate (SSC)</h4>
                <p className="institution">Shri Ramdas Highschool, Belapur</p>
                <p className="achievement">Percentage: 89.60%</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      icon: <FaBriefcase className="tab-icon" />,
      content: (
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">January 2025 – March 2025</div>
                <h4>Data Science Intern</h4>
                <p className="institution">Acmegrade (Virtual Internship)</p>
                <div className="achievement">
                  <p>• Completed a 2-month virtual internship in Data Science</p>
                  <p>• Underwent 1-month training in Python, data analysis, and ML fundamentals</p>
                  <p>• Built data-driven projects including a Movie Recommendation System and Car Price Prediction Model</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">June 2024 - July 2024</div>
                <h4>Full Stack Development Intern</h4>
                <p className="institution">Proazure Software Solution Pvt. Ltd.</p>
                <div className="achievement">
                  <p>• Completed 40-day offline internship program</p>
                  <p>• Worked with HTML, CSS, JavaScript, Express.js, and Node.js to build server-side applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Skills",
      icon: <FaCode className="tab-icon" />,
      content: (
        <div className="skills-content">
          <div className="skills-grid">
            <div className="skills-category">
              <h4><FaCode className="category-icon" /> Development</h4>
              <div className="skills-list">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>SQL</span>
                <span>Java</span>
                <span>Python</span>
                <span>REST API</span>
                <span>C</span>
                <span>C++</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaChartLine className="category-icon" /> Data & Analytics</h4>
              <div className="skills-list">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaPalette className="category-icon" /> Developer Tools</h4>
              <div className="skills-list">
                <span>Jupyter Notebook</span>
                <span>MySQL Server</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>MongoDB Compass</span>
                <span>Postman</span>
                <span>Thunder Client</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaCode className="category-icon" /> DSA in JAVA</h4>
              <div className="skills-list">
                <span>Arrays</span>
                <span>Strings</span>
                <span>Linked Lists</span>
                <span>Stacks & Queues</span>
                <span>Trees</span>
                <span>Trie</span>
                <span>Graphs</span>
                <span>Hashing</span>
                <span>Recursion</span>
                <span>Sorting Algorithms</span>
                <span>Searching Algorithms</span>
                <span>Backtracking</span>
                <span>Bit Manipulation</span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="about-card">
          <div className="card-content-wrapper">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

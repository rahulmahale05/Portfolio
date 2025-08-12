import { FaChartLine, FaCode, FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import thumbnail1 from '../assets/p1.jpg';
import thumbnail2 from '../assets/p2.jpg';
import thumbnail3 from '../assets/p3.jpeg';
import thumbnail4 from '../assets/p4.png';
import thumbnail5 from '../assets/p5.jpg';
import thumbnail6 from '../assets/p6.png';
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Full-stack system using HTML, CSS, JavaScript, Node.js, Express.js, and SQL to manage patients, doctors, appointments, and billing efficiently.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL"],
      github: "https://github.com/rahulmahale05/Hospital_Management_System",
      demo: "#",
      thumbnail: thumbnail1,
      category: "Full Stack",
      icon: <FaServer />
    },
    {
      title: "Password Manager",
      description: "A secure MERN stack application to store and manage passwords safely. Features user authentication, encrypted password storage, and a clean, intuitive UI for easy access and management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/rahulmahale05/Password_Manager",
      demo: "#",
      thumbnail: thumbnail2,
      category: "Full Stack",
      icon: <FaCode />
    },
    {
      title: "To-Do List",
      description: "A simple and responsive to-do list application built with React and Tailwind CSS. Allows users to add, edit, delete, and mark tasks as completed, with a clean and intuitive interface.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/rahulmahale05/ToDoList",
      demo: "#", 
      thumbnail: thumbnail3, 
      category: "Frontend",
      icon: <FaCode /> 
    },
    {
      title: "JavaScript Mini Projects",
      description: "Collection of small, interactive projects built with HTML, CSS, and JavaScript including Calculator, Currency Converter, Portfolio, Stone Paper Scissor, and Tic Tac Toe games.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rahulmahale05/Web-Development-Project",
      demo: "https://rahulmahale05.github.io/Web-Development-Project/",
      thumbnail: thumbnail4,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "DSA in Java",
      description: "Comprehensive collection of data structures and algorithms implementations with explanations and practice problems to master problem-solving skills.",
      technologies: ["Java", "DSA", "Algorithms", "Data Structures"],
      github: "https://github.com/rahulmahale05/Java-Project",
      demo: "https://github.com/rahulmahale05/Java-Project",
      thumbnail: thumbnail5,
      category: "Programming",
      icon: <FaChartLine />
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern responsive portfolio built with React showcasing my academic journey, skills, and projects. Features dynamic content rendering and smooth animations.",
      technologies: ["React", "CSS Modules", "Framer Motion", "EmailJS","ChatGpt","DeepSeek"],
      github: "https://github.com/rahulmahale05",
      demo: "#",
      thumbnail: thumbnail6,
      category: "Frontend Development",
      icon: <FaCode />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Project <span>Portfolio</span></h2>
        <div className="section-divider"></div>
        <p>Showcasing my technical solutions and implementations</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.thumbnail} // Replace dynamic string with thumbnail reference
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="project-category">
                {project.icon}
                <span>{project.category}</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

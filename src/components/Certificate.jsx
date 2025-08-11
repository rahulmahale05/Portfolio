import { FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import '../styles/Certificate.css';

// Import all certificate images
import cert1 from '../assets/pythonforDSNptl.jpg';
import cert2 from '../assets/Coding.jpg';
import cert3 from '../assets/DbmsNptl.jpg';
import cert4 from '../assets/WebDInternship.jpg';
import cert5 from '../assets/SQL.jpg';
import cert6 from '../assets/Cpp.jpg';
import cert7 from '../assets/DataScience.jpg';
import cert8 from '../assets/IETE.jpg';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Jan-Feb 2025",
      description: "Completed an in-depth course on Python for Data Science, covering Python programming, NumPy, Pandas, Matplotlib, Seaborn, and machine learning basics.",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning Basics"],
      image: cert1
    },
    {
      id: 2,
      title: "Coding Competition Certificate",
      issuer: "ISTE",
      date: "Jan 2025",
      description: "Secured 2nd prize in the coding competition 'Decode Your Code' organized by JSPM's BSIOTR, Wagholi, Pune under the Indian Society for Technical Education (ISTE) Student Chapter.",
      skills: ["Java", "DSA"],
      image: cert2
    },
    {
      id: 3,
      title: "Database Management System",
      issuer: "NPTEL",
      date: "July-Sept 2024",
      description: "Completed a comprehensive course on Database Management Systems, covering relational models, SQL, normalization, transaction management, and query optimization.",
      skills: ["DBMS", "SQL", "Relational Databases", "Database Design", "Query Optimization"],
      image: cert3
    },
    {
      id: 4,
      title: "Web Development Internship",
      issuer: "ProAzure Software Solutions Pvt. Ltd.",
      date: "July 2024",
      description: "Completed a hands-on internship in web development, working on real-world projects using HTML, CSS, JavaScript, Tailwind CSS, Node.js, Express.js, and SQL.",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "SQL"],
      image: cert4
    },
    {
      id: 5,
      title: "Introduction to SQL",
      issuer: "Simplilearn",
      date: "Jan 2025",
      description: "Completed a foundational course on SQL, covering database concepts, data querying, filtering, sorting, joins, and aggregate functions for effective data management.",
      skills: ["SQL", "Database Management", "Data Querying", "Joins", "Aggregate Functions"],
      image: cert5
    },
    {
      id: 6,
      title: "Introduction to C++",
      issuer: "Simplilearn",
      date: "July 2024",
      description: "Completed an introductory course on C++ programming, covering syntax, data types, control structures, functions, and object-oriented programming fundamentals.",
      skills: ["C++", "Programming Fundamentals", "OOP", "Functions", "Control Structures"],
      image: cert6
    },
    {
      id: 7,
      title: "Data Science Internship",
      issuer: "Acmegrade Software Solution Pvt. Ltd.",
      date: "March 2025",
      description: "Completed internship in data science with hands-on experience in Python, data analysis, and visualization.",
      skills: ["Data Science", "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn","Machine Learning"],
      image: cert7
    },
    {
      id: 8,
      title: "Project completion certificate",
      issuer: "IETE Pune Centre",
      date: "April 2024",
      description: "Participated in the National Level Project Competition organized by JSPM's BSIOTR, showcasing innovation in a competitive environment.",
      skills: ["Teamwork", "Suggestion"],
      image: cert8
    }
  ];

  return (
    <section id="certifications" className="certificate-section">
      {/* Header */}
      <div className="certificate-header">
        <h2>Certifications <span>by Rahul Mahale</span></h2>
        <div className="section-divider"></div>
        <p>Validated skills and professional accreditations</p>
      </div>

      {/* Certificates Grid */}
      <div className="certificate-container">
        <div className="certificate-grid">
          {certificates.map(cert => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  loading="lazy"
                  className="certificate-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Image';
                  }}
                />  
              </div>
              
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <FaIdCard className="meta-icon" /> {cert.issuer}
                  </span>
                  <span className="date">
                    <FaCalendarAlt className="meta-icon" /> Issued {cert.date}
                  </span>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  {cert.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;

// Updated Chatbot.jsx (unchanged except for removing the unused 'open' class)
import { useEffect, useRef, useState } from 'react';
import { BsRobot } from 'react-icons/bs';
import { FiMessageSquare, FiMinimize2, FiSend } from 'react-icons/fi';
import "../styles/chatbot.css";

const Chatbot = () => {
  // Resume data with structured information
  const resumeData = {
    name: "Rahul",
    contact: {
      mobile: "8767943966",
      email: "rahulmahale1845@gmail.com",
      linkedin: "https://www.linkedin.com/in/rahul-mahale-70266b258/"
    },
    profile: [
      "Dedicated MERN stack developer with hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Skilled in solving complex Data Structures and Algorithms problems in Java to optimize performance and improve coding efficiency.",
      "Strong problem-solving mindset combined with practical coding skills to write clean, scalable, and maintainable code.",
      "Passionate about continuous learning and enhancing technical expertise in both frontend and backend development."
    ],
    education: [
      {
        degree: "B.E in Electronics and Telecommunication Engineering",
        college: "JSPM's Bhivarabai Sawant Institute of Technology and Research, Wagholi, Haveli, Pune",
        year: "2026 (Expected)",
        cgpa: "9.26 (3rd Year)"
      },
      {
        degree: "HSC",
        college: "Dnyanmandir Junior College, Ale, Pune",
        percentage: "61.67%"
      },
      {
        degree: "SSC",
        college: "Shri Ramdas Highschool, Belapur (Badgi)",
        percentage: "89.60%"
      }
    ],
    skills: {
      technologies: ["React.js", "HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "Tailwind css", "JavaScript", "Express.js", "Pandas", "NumPy", "Matplotlib"],
      languages: ["Python", "C++", "Java", "C"],
      databases: ["MySQL", "SQLite", "MongoDB"],
    },
    projects: [
      "Chatify App: A real-time chat application with user authentication and responsive design",
      "Hospital Management System: Comprehensive system to manage patient records and appointments",
      "Password Manager: Secure password storage tool",
      "Web Development Project: Built with HTML, CSS, and JavaScript showcasing modern design",
      "Java & DSA: Implemented various data structures and algorithms in Java",
      "Portfolio: Personal portfolio website to showcase projects and skills"
    ],
    certifications: [
      "Python for Data Science - NPTL (Score: 84%)",
      "DBMS - NPTL Certificate (Score: 60%)",
      "C++ Basics - Simplilearn Certificate",
      "SQL - Simplilearn Certificate",
      "IETE Project Competition Certificate - Accident Alert System",
      "Coding Competition Certificate"
    ],
  };

  const [messages, setMessages] = useState([
    { 
      text: `Hello! I can provide information about ${resumeData.name}'s professional background and skills. How can I help you today? :)`, 
      sender: 'bot',
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotReply(input);
      setIsTyping(false);
    }, 800 + Math.random() * 1000);
  };

  const generateBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    let botReply = '';
    
    // Calculate similarity to known topics
    const isAboutResume = 
      /rahul|about|who are you|yourself|resume|cv|background/.test(lowerInput) ||
      /education|qualification|degree|college|school/.test(lowerInput) ||
      /skill|expertise|technology|programming/.test(lowerInput) ||
      /project|work|experience/.test(lowerInput) ||
      /certification|certificate|course/.test(lowerInput) ||
      /hey|hi/.test(lowerInput) ||
      /contact|email|phone|reach|linkedin/.test(lowerInput);

    if (!isAboutResume) {
      botReply = `I specialize in answering questions about ${resumeData.name}'s professional background. ` +
                `For other inquiries, please contact directly at ${resumeData.contact.email}. ` +
                `I can help with information about education, certificates, skills 0r projects. :)`;
    }
    else if (/rahul|about|who are you|yourself/.test(lowerInput)) {
      botReply = `About ${resumeData.name}:\n\nProfile Summary:\n${resumeData.profile.join('\n')}\n\n` +
                `Contact:\nPhone: ${resumeData.contact.mobile}\nEmail: ${resumeData.contact.email}\nLinkedIn: ${resumeData.contact.linkedin}`;
    } 
    else if (/education|qualification|degree|college/.test(lowerInput)) {
      botReply = `Education Background:\n\n${resumeData.education.map(edu => 
        `${edu.degree}\n${edu.college}\n${edu.year || ''} ${edu.cgpa || edu.percentage || ''}\n`
      ).join('\n')}`;
    }
    else if (/skill|expertise|technology/.test(lowerInput)) {
      botReply = `Technical Skills:\n\nTechnologies: ${resumeData.skills.technologies.join(', ')}\n` +
                `Programming Languages: ${resumeData.skills.languages.join(', ')}\n` +
                `Databases: ${resumeData.skills.databases.join(', ')}`;
    }
    else if (/project|work|experience/.test(lowerInput)) {
      botReply = `Notable Projects:\n\n${resumeData.projects.map((proj, index) => 
        `${index + 1}. ${proj}`
      ).join('\n\n')}`;
    }
    else if (/certification|certificate|course/.test(lowerInput)) {
      botReply = `Certifications:\n${resumeData.certifications.map((cert, index) => 
        `${index + 1}. ${cert}`
      ).join('\n')}`;
    }
    else if (/contact|email|phone|reach|linkedin/.test(lowerInput)) {
      botReply = `Contact Information:\nPhone: ${resumeData.contact.mobile}\nEmail: ${resumeData.contact.email}\nLinkedIn: ${resumeData.contact.linkedin}`;
    }
    else if(/hey|hi/.test(lowerInput)){
      botReply = "Hey! What’s up? "
    }
    else {
      botReply = `I can provide information about:\n- Education background\n- Technical skills\n- Projects\n- Certifications\n\n` +
                `Try asking about specific areas like "Tell me about the education background" or "What projects have been completed?" :)`;
    }
    

    const botMessage = { 
      text: botReply, 
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FiMinimize2 size={24} /> : <FiMessageSquare size={24} />}
      </button>

      <div className={`chatbot-box ${isOpen ? 'visible' : ''}`}>
        <div className="chatbot-header">
          <BsRobot size={20} />
          <h3>Hello! JARVIS at your service.</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="message-content">
                {msg.text.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <span className="message-time">{formatTime(msg.timestamp)}</span>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about professional background..."
            aria-label="Ask about professional background"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <FiSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

import { useEffect, useState } from "react";
import { PiCertificateBold } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { PiGooglePhotosLogoBold } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import "../styles/Achievement.css";

// Import placeholder images
import p1 from "../assets/1st_year.jpg";
import p2 from "../assets/2ndyear.jpg";
import p3 from "../assets/2ndyearPrice.jpg";
import p4 from "../assets/CodingPrice.jpg";
import p5 from "../assets/Coding.jpg";
import p6 from "../assets/2ndyearcertificate.jpg";

const Achievement = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [expandedCategories, setExpandedCategories] = useState({
    price: true,
    photo: true,
    certificate: true
  });

  const Achievements = [
    {
      id: 1,
      title: "First Year Topper",
      description: "Achieved 1st rank in academics during the first year of my Bachelor of Engineering, demonstrating consistent excellence and dedication to studies.",
      date: "June 2023",
      category: "price",
      image:p1
    },
    {
      id: 2,
      title: "Second Year Topper",
      description: "Secured 1st rank in academics during the second year of my Bachelor of Engineering, continuing a track record of excellence and dedication.",
      date: "June 2024",
      category: "price",
      image:p2
    },
    {
      id: 3,
      title: "Academic Excellence Felicitation",
      description: "Honored for securing the 1st rank in the 2nd-year examinations, recognized for outstanding academic performance and dedication.",
      date: "June 2024",
      category: "photo",
      image: p3
    },
    {
      id: 4,
      title: "Coding Competition Felicitation",
      description: "Recognized for securing 2nd place in a competitive coding event, showcasing problem-solving skills and technical expertise.",
      date: "January 2025",
      category: "photo",
      image: p4
    },
    {
      id: 5,
      title: "Academic Excellence Award",
      description: "Honored with a certificate for achieving the highest academic rank in the second year, reflecting dedication and consistent performance.",
      date: "June 2024",
      category: "certificate",
      image: p6
    },
    {
      id: 6,
      title: "Coding Competition Merit Award",
      description: "Awarded a certificate for securing 2nd place in a competitive coding event, showcasing strong problem-solving and programming skills.",
      date: "January 2025",
      category: "certificate",
      image: p5
    }
  ];

  const categories = [
    { id: "all", name: "All Achievements", icon: <GiAchievement /> },
    { id: "price", name: "Prices", icon: <GiTrophyCup /> },
    { id: "photo", name: "Photos", icon: <PiGooglePhotosLogoBold /> },
    { id: "certificate", name: "Certificates", icon: <PiCertificateBold /> }
  ];

   useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredAchievements = activeCategory === "all"
    ? Achievements
    : Achievements.filter(achievement => achievement.category === activeCategory);

  // Group Achievements by category for mobile view
  const groupedAchievements = Achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) acc[achievement.category] = [];
    acc[achievement.category].push(achievement);
    return acc;
  }, {});


  const PriceCard = ({ achievement }) => (
    <div className="ach-card">
      <div className="ach-image-container">
        <img 
          loading="lazy"
          src={achievement.image} 
          alt={achievement.title} 
          id={(achievement.id == 1 || achievement.id == 2) ? "tropy" : ""}
          className="ach-image" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/300x300?text=achievement+Image";
          }}
        />
      </div>
      <div className="ach-info">
        <h3>{achievement.title}</h3>
        <p className="ach-description">{achievement.description}</p>
        <div className="ach-footer">
          <span className="ach-date">{achievement.date}</span>
        </div>
      </div>
    </div>
  );

  if (isMobileView) {
    return (
      <section id="achievements" className="Ach-section">
        <div className="Ach-container">
          <div className="Ach-header">
            <div className="header-content">
              <h2>Achievements <span>of Rahul Mahale</span></h2>
              <div className="section-divider"></div>
              <p>Explore the achievements that reflect both my academic and personal growth.</p>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="mobile-ach-view">
            {/* Show selected category first if not "all" */}
            {activeCategory !== "all" && (
              <div className="mobile-category-section">
                <div 
                  className="mobile-category-header"
                  onClick={() => toggleCategory(activeCategory)}
                >
                  <h3>{categories.find(c => c.id === activeCategory)?.name || activeCategory}</h3>
                  <span className="toggle-icon">
                    {expandedCategories[activeCategory] ? '−' : '+'}
                  </span>
                </div>
                {expandedCategories[activeCategory] && (
                  <div className="mobile-ach-gallery">
                    {groupedAchievements[activeCategory]?.map(achievement => (
                      <PriceCard key={achievement.id} achievement={achievement} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Show remaining categories */}
            {activeCategory === "all" &&(Object.entries(groupedAchievements)
              .filter(([category]) => activeCategory === "all" || category !== activeCategory)
              .map(([category, items]) => (
                <div className="mobile-category-section" key={category}>
                  <div 
                    className="mobile-category-header"
                    onClick={() => toggleCategory(category)}
                  >
                    <h3>{categories.find(c => c.id === category)?.name || category}</h3>
                    <span className="toggle-icon">
                      {expandedCategories[category] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedCategories[category] && (
                    <div className="mobile-ach-gallery">
                      {items.map(achievement => (
                        <PriceCard key={achievement.id} achievement={achievement} />
                      ))}
                    </div>
                  )}
                </div>
              )))}
          </div>
        </div>
      </section>
    );
  }
    return (
    <section id="achievements" className="Ach-section">
      <div className="Ach-container">
        <div className="Ach-header">
          <div className="header-content">
            <h2>Achievements <span>of Rahul Mahale</span></h2>
            <div className="section-divider"></div>
            <p>Explore the achievements that reflect both my academic and personal growth.</p>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="ach-gallery">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map(achievement => (
              <PriceCard key={achievement.id} achievement={achievement} />
            ))
          ) : (
            <div className="no-Achievements">
              <p>No Achievements found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievement;

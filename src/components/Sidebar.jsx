import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const skills = ["Python", "SQL", "Pandas", "NumPy", "Seaborn", "Tableau", "Microsoft Excel", "React"];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-img-container">
          <img src="/assets/ID pic yashi.png" alt="Yashi Agrawal" className="profile-img" />
        </div>
        <h1 className="name">Yashi Agrawal</h1>
        <h2 className="title">Data Analyst</h2>
        
        <p className="bio">
          Data visualization enthusiast focused on transforming complex data into clear, actionable insights. 
          Experienced in analyzing datasets, identifying meaningful patterns, and presenting findings 
          through intuitive dashboards and visual storytelling. Passionate about enabling data-driven 
          decision-making through clarity and design.
        </p>
        
        <button className="btn-primary" onClick={() => window.location.href = 'mailto:yashi.agrawal2024@nst.rishihood.edu.in'}>Contact Me</button>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <MapPin size={16} />
          <span>New Delhi, India</span>
        </div>
        <div className="contact-item">
          <Mail size={16} />
          <a href="mailto:yashi.agrawal2024@nst.rishihood.edu.in">yashi.agrawal2024@nst.rishihood.edu.in</a>
        </div>
        <div className="contact-item">
          <Phone size={16} />
          <span>+91 6391780706</span>
        </div>
        <div className="contact-item">
          <Linkedin size={16} />
          <a href="https://www.linkedin.com/in/yashi-agrawal-5b7a75323/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <Github size={16} />
          <a href="https://github.com/11yashiagrawal" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      
      <div className="skills-section">
        <h3>Skills & Tools</h3>
        <div className="skills-tags">
          {skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

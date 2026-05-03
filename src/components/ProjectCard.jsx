import React from 'react';
import { Folder, ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <article className="project-card" onClick={onClick}>
      <div className="card-img-wrapper">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-img" />
        ) : (
          <div className="project-img-placeholder">
            <Folder size={48} />
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="project-title">
          {project.title}
          <ArrowUpRight size={16} className="external-icon" />
        </h3>
        <p className="project-desc">{project.shortDesc}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-footer">
          <span className="tool-indicator">
            <span className={`dot ${project.category.toLowerCase()}`}></span> 
            {project.tool}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

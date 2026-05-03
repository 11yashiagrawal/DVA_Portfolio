import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          {project.image && (
            <div className="modal-img-container">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="modal-content-text">
            {project.longDesc.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Close</button>
          <a href={project.viewCaseStudy} target="_blank" rel="noreferrer" className="btn-live">
            View Case Study <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ContributionGraph from './ContributionGraph';
import './MainContent.css';

const MainContent = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filters = ['All', 'Python', 'Tableau', 'Excel'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || 
                          project.category === activeFilter || 
                          project.tool.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="main-content">
      <header className="main-header">
        <h2 className="projects-title">
          <Folder size={20} className="folder-icon" />
          Projects <span className="badge">{projects.length}</span>
        </h2>
        
        <div className="filters-container">
          <input 
            type="text" 
            placeholder="Find a project..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="filter-buttons">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </header>

      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onSelectProject(project)} 
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No projects found matching your criteria.</p>
          <button 
            className="clear-btn"
            onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
          >
            Clear filters
          </button>
        </div>
      )}

      <ContributionGraph />
    </main>
  );
};

export default MainContent;

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-container">
      <div className="portfolio-layout">
        <Sidebar />
        <MainContent onSelectProject={setSelectedProject} />
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;

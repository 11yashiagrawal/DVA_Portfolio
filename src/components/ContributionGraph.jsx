import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './ContributionGraph.css';

const ContributionGraph = () => {
  // Use the exact GitHub username provided by user
  const githubUsername = '11yashiagrawal';

  // Define a custom theme that matches the dark mode UI
  const theme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="contribution-container">
      <div className="contribution-header">
        <h3>GitHub Contributions (Streak)</h3>
        <a href={`https://github/${githubUsername}`} target="_blank" rel="noreferrer" className="github-link">
          @{githubUsername}
        </a>
      </div>
      <div className="calendar-wrapper">
        <GitHubCalendar 
          username={githubUsername} 
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          theme={theme}
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default ContributionGraph;

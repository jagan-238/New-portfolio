import React from 'react';
import {
  Github,
} from 'lucide-react';
import '../styles/github.css'; // ✅ corrected path

function GithubInfo() {
  return (
    <div className="github-section">
      <div className="github-container">
        {/* Header */}
        <div className="github-header">
          <Github className="github-icon" />
          <h1 className="github-title">GitHub Activity</h1>
          <p className="github-subtitle">@jaganmohanreddy's Contributions</p>
        </div>

        {/* GitHub Stats */}
        <div className="github-card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=jagan-238&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="github-image"
          />
        </div>

        {/* Contribution Calendar */}
        <div className="github-card">
          <h2 className="github-section-title">Contribution Calendar</h2>
          <img
            src="https://ghchart.rshah.org/jagan-238"
            alt="GitHub Contribution Calendar"
            className="github-image"
          />
        </div>

        {/* Top Languages */}
        <div className="github-card">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jagan-238&layout=compact&theme=radical"
            alt="Top Languages"
            className="github-image"
          />
        </div>
      </div>
    </div>
  );
}

export default GithubInfo;

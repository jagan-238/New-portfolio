import React from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Globe,
  Heart,
  Coffee,
  Code,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/github.css'; // ✅ corrected path

function GithubInfo() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`github-section ${isDarkMode ? 'dark' : 'light'}`}>
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

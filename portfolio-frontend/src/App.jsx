import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChatHome from './components/ChatHome';
import ProjectsPage from './components/pages/ProjectsPage';
import SkillsPage from './components/pages/SkillsPage';
import AchievementsPage from './components/pages/AchievementsPage';
import ContactPage from './components/pages/ContactPage';

function PageLayout({ title, subtitle, children }) {
  return (
    <main className="flex-1 px-4 sm:px-6 py-12 z-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center animate-fade-in pt-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{title}</h1>
        <p className="text-zinc-400 text-[15px] mb-16 text-center">{subtitle}</p>
        <div className="w-full flex justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#03040b] text-zinc-100 font-sans selection:bg-brand-500/30 overflow-y-auto overflow-x-hidden noise-overlay relative">
      <div className="mesh-bg"></div>
      <div className="orb-layer">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="stardust"></div>
      
      <Header />
      <Routes>
        <Route path="/" element={<ChatHome />} />
        
        <Route path="/projects" element={
          <PageLayout 
            title="Projects" 
            subtitle="A showcase of my recent work and contributions"
          >
            <ProjectsPage />
          </PageLayout>
        } />
        
        <Route path="/skills" element={
          <PageLayout 
            title="Skills" 
            subtitle="Technologies and tools I work with"
          >
            <SkillsPage />
          </PageLayout>
        } />


        <Route path="/achievements" element={
          <PageLayout 
            title="Hall of Fame" 
            subtitle="Celebrating technical milestones and competitive achievements"
          >
            <AchievementsPage />
          </PageLayout>
        } />

        <Route path="/contact" element={
          <PageLayout 
            title="Get In Touch" 
            subtitle="I'm always interested in hearing about new projects and opportunities."
          >
            <ContactPage />
          </PageLayout>
        } />

        {/* Fallback routes for unused links */}
        <Route path="/postcards" element={<PageLayout title="Resume" subtitle="Download my resume"><ContactPage /></PageLayout>} />
        <Route path="/days" element={<PageLayout title="Availability" subtitle="Check my schedule"><ContactPage /></PageLayout>} />

      </Routes>
    </div>
  );
}

export default App;

"use client";
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          <MainContent />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
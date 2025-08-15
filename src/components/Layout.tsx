import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Online Payments';
    case '/transactions':
      return 'Transactions';
    case '/accounts':
      return 'Accounts';
    case '/transfers':
      return 'Transfers';
    case '/settings':
      return 'Settings';
    case '/get-started':
      return 'Get Started';
    default:
      return 'Dashboard';
  }
};

export const Layout: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(() => {

    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);


  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      
      
      if (desktop) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };


    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

    
      <div className={`flex flex-col min-h-screen transition-all duration-300 ${
        isDesktop 
          ? (sidebarCollapsed ? 'ml-16' : 'ml-64') 
          : 'ml-0'
      }`}>
        
        <Header title={pageTitle} />

        
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}; 
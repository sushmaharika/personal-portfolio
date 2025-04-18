import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import { AnimatePresence, motion } from 'framer-motion';

// Import custom CSS *after* Bootstrap potentially in index.js
// import './styles/Global.css'; // Moved to index.js

// Example 3D transition variants (Keep if desired)
const pageVariants = {
  initial: {
    opacity: 0,
    rotateY: -90, scale: 0.9, transformOrigin: 'center left',
  },
  in: {
    opacity: 1,
    rotateY: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }
  },
  out: {
    opacity: 0,
    rotateY: 90, scale: 0.9, transformOrigin: 'center right',
    transition: { ease: 'easeInOut', duration: 0.3 }
  }
};

function AppContent({ theme, toggleTheme }) { // Receive theme props
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  // Sync login status
  useEffect(() => {
    const syncLoginStatus = () => {
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    };
    // Listen for changes in other tabs/windows
    window.addEventListener('storage', syncLoginStatus);
    // Check immediately
    syncLoginStatus();
    return () => window.removeEventListener('storage', syncLoginStatus);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
            <Signup />
          </motion.div>
        } />
        <Route path="/login" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
            <Login setIsLoggedIn={setIsLoggedIn} />
          </motion.div>
        } />
        <Route
          path="/portfolio"
          element={
            isLoggedIn ? (
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                {/* Pass theme state and toggle function to Portfolio */}
                <Portfolio theme={theme} toggleTheme={toggleTheme} />
              </motion.div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/portfolio" : "/login"} replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Centralized Theme State
  const [theme, setTheme] = useState(() => {
     const savedTheme = localStorage.getItem('theme');
     return savedTheme || 'light';
  });

  // Effect to apply theme using Bootstrap's method and save to localStorage
  useEffect(() => {
    // Set data-bs-theme attribute on the HTML element
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      {/* Pass theme state and toggle function down */}
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
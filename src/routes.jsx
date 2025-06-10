// React Router routes for the magazine
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Article1 from './pages/Article1.jsx';
import Article2 from './pages/Article2.jsx';
import Article3 from './pages/Article3.jsx';
import Article4 from './pages/Article4.jsx';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article-1" element={<Article1 />} />
        <Route path="/article-2" element={<Article2 />} />
        <Route path="/article-3" element={<Article3 />} />
        <Route path="/article-4" element={<Article4 />} />
      </Routes>
    </Router>
  );
}

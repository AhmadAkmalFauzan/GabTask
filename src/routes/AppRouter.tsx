// File: src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Tambahkan rute lain di sini jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
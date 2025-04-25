import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from "./pages/SettingPage"
import Hero from './pages/Hero';

function App() {
  return (
    <div className='flex justify-center'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path='/' element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

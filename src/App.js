import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import AdminDashboard from './components/AdminDashboard';
import Blog from './components/Blog';
import Booking from './components/Booking';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Notifications from './components/Notifications';
import ProfilePage from './components/ProfilePage';
import SalonDashboard from './components/SalonDashboard';
import SalonPage from './components/SalonPage';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salon/:id" element={<SalonPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/salon-dashboard" element={<SalonDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

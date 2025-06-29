import React, { Profiler } from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App

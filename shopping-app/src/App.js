import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Favorites from './pages/Favorites'
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css'
import ErrorPage from './components/errorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="*" element={<ErrorPage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

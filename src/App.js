import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

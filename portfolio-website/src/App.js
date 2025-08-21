// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const toggleDarkMode = () => setDarkMode((v) => !v);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
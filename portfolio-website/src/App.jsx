const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case 'skills':
        return <Skills darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      default:
        return <Home darkMode={darkMode} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {renderCurrentPage()}
    </div>
  );
};

export default Portfolio;
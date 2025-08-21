const Home = ({ darkMode, setCurrentPage }) => {
    const quickLinks = [
        {
            title: "About Me",
            description: "A reflection of my journey and motivations that define me as a developer.",
            icon: User,
            color: "from-blue-500 to-blue-600",
            page: "about"
        },
        {
            title: "My Projects",
            description: "Here are some of the projects i have built",
            icon: FolderOpen,
            color: "from-purple-500 to-purple-600",
            page: "projects"
        },
        {
            title: "Technical Skills",
            description: "The programming languages, frameworks,and tools I specialize in.",
            icon: Award,
            color: "from-purple-500 to-purple-600",
            page: "skills"
        },
        {
            title: "Get In Touch",
            description: "Open to collaborations,opportunities,and meaningful conversations - always ready to learn and grow",
            icon: MessageCircle,
            color: "from-pink-500 to-pink-600",
            page: "contact"
        }
    ];

    return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1">
              <div className={`w-full h-full rounded-full ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } flex items-center justify-center text-5xl font-bold`}>
                TM
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Terrence Mbelenga
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Software Developer
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate about solving real-world problems through technology. I believe in doing hard things 
            and creating meaningful impact through code. Always curious and eager to learn,
            I embrace challenges as opportunities to grow.”
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('projects')}
              className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-xl flex items-center justify-center"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`px-10 py-4 border-2 font-semibold rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center ${
                darkMode 
                  ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white' 
                  : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
              }`}
            >
              <MessageCircle size={20} className="mr-2" />
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Explore My Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.page}
                  onClick={() => setCurrentPage(link.page)}
                  className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-lg hover:scale-105 transition-all duration-300 text-left group`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center mt-4 text-purple-500 group-hover:translate-x-2 transition-transform duration-200">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                3+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
            </div>
            
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
                6
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Technologies Learned</p>
            </div>
            
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Passion for Learning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
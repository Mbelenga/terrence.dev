const Skills = ({ darkMode, setCurrentPage }) => {
  const skills = [
    { name: "Python", level: 90, icon: Code, color: "from-blue-500 to-blue-600", description: "My strongest language - building everything from scripts to web applications" },
    { name: "Django", level: 85, icon: Globe, color: "from-green-500 to-green-600", description: "Creating robust web applications and APIs" },
    { name: "HTML/CSS", level: 75, icon: Palette, color: "from-orange-500 to-orange-600", description: "Crafting responsive and beautiful user interfaces" },
    { name: "JavaScript", level: 70, icon: Code, color: "from-yellow-500 to-yellow-600", description: "Adding interactivity and dynamic functionality" },
    { name: "SQL", level: 75, icon: Database, color: "from-purple-500 to-purple-600", description: "Database design and complex query optimization" },
    { name: "React", level: 40, icon: Code, color: "from-cyan-500 to-cyan-600", description: "Currently learning - building this portfolio to practice!" }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-purple-500 hover:text-purple-600 mb-8 transition-colors"
          >
            ← Back to Home
          </button>
          
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Here's my technical toolkit. I'm always learning and adding new technologies to solve problems more effectively.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-transform duration-200`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {skill.description}
                  </p>
                  
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 mb-2`}>
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="font-medium">
                      {skill.level < 50 ? 'Learning' : skill.level < 80 ? 'Experienced' : 'Strong'}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => setCurrentPage('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg flex items-center mx-auto"
            >
              See These Skills in Action
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skills;
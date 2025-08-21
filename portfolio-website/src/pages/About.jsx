const About = ({ darkMode, setCurrentPage }) => {
    return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-purple-500 hover:text-purple-600 mb-8 transition-colors"
          >
            ← Back to Home
          </button>
          
          <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I'm passionate about solving complex real-World problems and finding solutions to them through code. 
                For me being a developer is more than just writing code, it's about continous learning and also embracing challenges
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                I embrace the mindset of "doing hard things." Every challenging project is an opportunity 
                to grow, every bug is a puzzle to solve, and every new technology is a chance to expand my toolkit.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                With a strong foundation in Python and Django, I'm always exploring new ways to create 
                impact through code while continuously learning modern technologies like React.
              </p>
              
              <button 
                onClick={() => setCurrentPage('skills')}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 flex items-center"
              >
                View My Skills
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <Code className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I approach every challenge with curiosity and determination
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <Palette className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Creative Thinker</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Combining technical precision with innovative solutions
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <Globe className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Impact Focused</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building technology that makes a real difference
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

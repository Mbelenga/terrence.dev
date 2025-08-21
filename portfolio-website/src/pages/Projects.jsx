const Projects = ({ darkMode, setCurrentPage }) => {
    const[filter, setFilter] = useState('All');

const Projects = [
    {
        id: 1,
        title: "BookHub",
        description: "A web app for book lovers to share, review, rate and discover new books.",
        technologies: ["Python", "Flask", "HTML", "Css", "SQL"],
        category: "Full-stack",
        image: "#",
        github: "https://github.com/Mbelenga/Book-Hub",
        live: "#"
    },
    {
        id: 2,
        title: "ExploreEase",
        description: "A travel website platform to simplify trip planning and exploration",
        status: "In Development",
    },
];

const categories = ['All', 'Frontend', 'Backend', 'Full-Stack'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-purple-500 hover:text-purple-600 mb-8 transition-colors"
          >
            ← Back to Home
          </button>
          
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Here's a showcase of projects I've built while learning and growing as a developer. 
            Each project represents a step in my journey and a problem I've solved.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} hover:scale-105`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-all duration-300 group`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.category === 'Frontend' ? 'bg-blue-500 text-white' :
                      project.category === 'Backend' ? 'bg-green-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-purple-500 hover:text-purple-600 transition-colors font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-purple-500 hover:text-purple-600 transition-colors font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
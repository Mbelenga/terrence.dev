import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, ArrowRight, User, FolderOpen, Award, MessageCircle } from 'lucide-react';

// ==========================================
// FILE: components/Header.js
// ==========================================
const Header = ({ darkMode, toggleDarkMode, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const pages = [
    { id: 'home', name: 'Home', icon: User },
    { id: 'about', name: 'About', icon: User },
    { id: 'projects', name: 'Projects', icon: FolderOpen },
    { id: 'skills', name: 'Skills', icon: Award },
    { id: 'contact', name: 'Contact', icon: MessageCircle }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${
      darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
    } border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => navigateToPage('home')}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            TM
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateToPage(page.id)}
                className={`hover:text-purple-500 transition-colors duration-200 font-medium ${
                  currentPage === page.id ? 'text-purple-500' : ''
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="px-4 py-2 space-y-2">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => navigateToPage(page.id)}
                  className={`flex items-center w-full text-left py-3 px-2 rounded-lg hover:text-purple-500 transition-colors ${
                    currentPage === page.id ? 'text-purple-500 bg-purple-500/10' : ''
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  {page.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

// ==========================================
// FILE: pages/Home.js
// ==========================================
const Home = ({ darkMode, setCurrentPage }) => {
  const quickLinks = [
    {
      title: "About Me",
      description: "Learn about my journey, philosophy, and what drives me as a developer",
      icon: User,
      color: "from-blue-500 to-blue-600",
      page: "about"
    },
    {
      title: "My Projects", 
      description: "Explore the applications and solutions I've built",
      icon: FolderOpen,
      color: "from-green-500 to-green-600",
      page: "projects"
    },
    {
      title: "Technical Skills",
      description: "Discover my technical expertise and technologies I work with",
      icon: Award,
      color: "from-purple-500 to-purple-600", 
      page: "skills"
    },
    {
      title: "Get In Touch",
      description: "Ready to collaborate? Let's discuss your next project",
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
            and creating meaningful impact through code. Welcome to my digital space where creativity meets functionality.
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

// ==========================================
// FILE: pages/About.js
// ==========================================
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
                I'm passionate about transforming complex challenges into elegant solutions through code. 
                What drives me isn't just writing software—it's the belief that technology can genuinely 
                improve people's lives.
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

// ==========================================
// FILE: pages/Projects.js
// ==========================================
const Projects = ({ darkMode, setCurrentPage }) => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Django and React. Features user authentication, payment integration, and admin dashboard.",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing sales data with real-time charts and filtering capabilities.",
      technologies: ["Python", "Django", "Chart.js", "SQL"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description: "Mobile-responsive app for tracking expenses and budgets with intuitive UI and data visualization.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    }
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

// ==========================================
// FILE: pages/Skills.js
// ==========================================
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

// ==========================================
// FILE: pages/Contact.js
// ==========================================
const Contact = ({ darkMode, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to tackle your next challenge? I'd love to hear about your project and explore how we can bring it to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border resize-none ${
                      darkMode 
                        ? 'bg-gray
const Contact = ({ darkMode, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Other ways to reach me</h2>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mbelengaterence@gmail.com"
                  className={`flex items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors shadow-lg group`}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">terrence@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Mbelenga"
                  className={`flex items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors shadow-lg group`}
                >
                  <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-300">@Mbelenga</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/terence-mbelenga-61a379282/"
                  className={`flex items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors shadow-lg group`}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-300">Terrence Mbelenga</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
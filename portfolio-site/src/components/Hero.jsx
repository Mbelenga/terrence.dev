const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Terrence</h1>
        <p className="mt-4 text-xl">Software Developer | Python & React Developer</p>
        <a href="#projects" className="inline-block mt-6 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
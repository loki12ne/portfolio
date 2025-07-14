import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  GraduationCap,
  User,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      name: 'Pacman Search Algorithm',
      description: 'Implementation and research of various search algorithms for Pacman AI agent navigation and pathfinding optimization.',
      techStack: ['Python', 'AI', 'Search Algorithms', 'Game AI'],
      githubUrl: 'https://github.com/loki12ne/PACMAN-SEARCH-ALGORITHM',
      type: 'Research'
    },
    {
      name: 'Gem Hunter FOL',
      description: 'First-Order Logic research project implementing intelligent gem hunting strategies using logical reasoning and inference.',
      techStack: ['Python', 'FOL', 'Logic Programming', 'AI'],
      githubUrl: 'https://github.com/loki12ne/gem-hunter',
      type: 'Research'
    },
    {
      name: 'Eye Detect Drowsiness',
      description: 'Computer vision system using CNN to detect driver drowsiness in real-time through eye monitoring and facial analysis.',
      techStack: ['Python', 'OpenCV', 'CNN', 'TensorFlow', 'Computer Vision'],
      githubUrl: 'https://github.com/loki12ne/eye-detect-drowness',
      type: 'Machine Learning'
    },
    {
      name: 'CNN Image Classification',
      description: 'Deep learning project implementing Convolutional Neural Networks for image classification with high accuracy performance.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Deep Learning'],
      githubUrl: '#',
      type: 'Deep Learning'
    },
    {
      name: 'Machine Learning Portfolio',
      description: 'Collection of machine learning algorithms and models including regression, classification, and clustering implementations.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      githubUrl: '#',
      type: 'Machine Learning'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo/Icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                <svg width="20" height="20" viewBox="0 0 100 100" className="text-white">
                  <g fill="currentColor">
                    {/* Code brackets */}
                    <path d="M25 35 L15 50 L25 65" stroke="currentColor" strokeWidth="6" fill="none"/>
                    <path d="M75 35 L85 50 L75 65" stroke="currentColor" strokeWidth="6" fill="none"/>
                    {/* Pisces symbol */}
                    <path d="M35 45 Q40 40 45 45 Q40 50 35 45 M55 45 Q60 40 65 45 Q60 50 55 45" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="4"/>
                  </g>
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900">
                Dương Thành Lộc
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                      activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Hi, I'm <span className="text-blue-600">Dương Thành Lộc</span>
                </h1>
                <div className="text-lg text-gray-600 mb-6">
                  <p className="mb-2">3rd-year Student at <span className="font-semibold">University of Science</span></p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Data Analyst</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI Researcher</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Computer Scientist</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Data Scientist</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="../avatar.png" 
                  alt="Dương Thành Lộc"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-xl";
                      parent.innerHTML = '<svg class="text-blue-600" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-lg text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  I'm a passionate person when it comes to work, but unfortunately, my bed often wins the battle—especially on cold rainy days. ☔
                </p>
                <p>
                  As a 3rd-year Computer Science student at the University of Science, I'm deeply fascinated by the intersection of artificial intelligence, data science, and algorithmic problem-solving. My journey involves exploring complex search algorithms, first-order logic systems, and the beautiful world of data analysis.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Focus</h3>
                  <p className="text-gray-600">AI algorithms, search optimization, and logical reasoning systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Journey</h3>
                  <p className="text-gray-600">Computer Science at University of Science, specializing in AI and data science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Experience</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              
              {/* Timeline Item */}
              <div className="relative flex items-center mb-8">
                <div className="flex-shrink-0 w-8 h-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center mb-3">
                      <Briefcase className="text-blue-600 mr-3" size={20} />
                      <h3 className="text-xl font-semibold text-gray-900">3rd-year Student</h3>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">University of Science</p>
                    <p className="text-gray-600 text-sm mb-3">2022 - Present</p>
                    <p className="text-gray-700">
                      Pursuing Computer Science degree with focus on artificial intelligence, data analysis, and algorithmic research. 
                      Engaged in various research projects involving search algorithms and logical reasoning systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    {project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.githubUrl !== '#' ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                    >
                      <Github size={18} className="mr-2" />
                      View on GitHub
                      <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 font-medium">
                      <Github size={18} className="mr-2" />
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-12">
              Interested in collaboration or have questions about my work? I'd love to hear from you!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a 
                href="mailto:thanhlocdeptrai21@gmail.com"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">thanhlocdeptrai21@gmail.com</p>
              </a>
              
              <a 
                href="https://linkedin.com/in/thanhloc2102"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">linkedin.com/in/thanhloc2102</p>
              </a>
              
              <a 
                href="https://github.com/loki12ne"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Github className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">github.com/loki12ne</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Dương Thành Lộc. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

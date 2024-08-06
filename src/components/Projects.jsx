const Projects = () => {
  const projects = [
    {
      title: 'Algorithmic Trading System',
      description: 'Developed a high-frequency trading system using Python and machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'SQL'],
    },
    {
      title: 'Risk Assessment Tool',
      description: 'Created a comprehensive risk assessment tool for portfolio management using R and Shiny.',
      technologies: ['R', 'Shiny', 'Statistical Modeling'],
    },
    {
      title: 'Financial Data Visualization Dashboard',
      description: 'Built an interactive dashboard for visualizing complex financial data using D3.js and React.',
      technologies: ['JavaScript', 'D3.js', 'React'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

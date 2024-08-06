const Skills = () => {
  const skills = [
    { name: 'Financial Modeling', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Risk Management', level: 85 },
    { name: 'SQL', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

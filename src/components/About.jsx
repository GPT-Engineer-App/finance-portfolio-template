const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg" alt="John Doe" className="rounded-full w-64 h-64 mx-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi, I'm John Doe, a finance professional with a strong technical background. I specialize in quantitative analysis, algorithmic trading, and financial modeling.
            </p>
            <p className="text-lg mb-4">
              With over 10 years of experience in the financial industry, I've developed a unique skill set that combines financial expertise with programming and data analysis.
            </p>
            <p className="text-lg">
              I'm passionate about leveraging technology to solve complex financial problems and drive data-driven decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

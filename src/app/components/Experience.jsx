const experiences = [
  {
    role: "Software Developer",
    company: "Tech Solutions",
    time: "2019 - Present",
    description:
      "Developed and maintained web and mobile applications using React and Next.js.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Experts",
    time: "2016 - 2019",
    description:
      "Worked with Node.js, React, and databases to build scalable web solutions.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold">
              {exp.role} - {exp.company}
            </h3>
            <p className="text-gray-400">{exp.time}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

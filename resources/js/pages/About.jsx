import MainLayout from "../layouts/MainLayout";

export default function About() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "Laravel", category: "Backend" },
    { name: "Node.js (Express)", category: "Backend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "MySQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "JavaScript", category: "Language" },
    { name: "Bootstrap 4", category: "Frontend" },
    { name: "SQL", category: "Database" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "Figma", category: "Design" },
  ];

  const experiences = [
    {
      title: "IT Developer",
      company: "PT Putra Aulia Konsultan",
      description: "Developing and maintaining web applications for business solutions",
    },
    {
      title: "Web Developer",
      company: "Emergency IoT Monitoring Project",
      description: "Built real-time monitoring system for IoT devices",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-gray-500">Get to know me better</p>
        </div>

        {/* Introduction */}
        <section className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 mb-12 shadow-sm">
          <p className="text-lg text-gray-600 leading-relaxed">
            An Information Technology graduate from{" "}
            <span className="text-purple-500 font-medium">President University</span> with a
            strong focus on Fullstack Development. Proficient in React, Laravel, Node.js,
            SQL, and Docker. Experienced in building real-world applications and integrating
            systems to solve complex business problems.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-purple-300 hover:shadow-sm transition-all duration-300 group"
              >
                <span className="text-gray-700 group-hover:text-purple-500 transition-colors">
                  {skill.name}
                </span>
                <p className="text-xs text-gray-400 mt-1">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-purple-500 mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

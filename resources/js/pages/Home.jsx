import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";
import { Link } from "@inertiajs/react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Attendance & Payroll System",
      desc: "Employee attendance and salary system built with Laravel and MySQL",
      link: "https://github.com/okrinul22"
    },
    {
      id: 2,
      title: "Reporting System",
      desc: "Project reporting system using Node.js (Express)",
      link: "https://github.com/okrinul22"
    },
    {
      id: 3,
      title: "Risk Management System",
      desc: "Web-based system for managing and monitoring risks with structured data tracking and reporting features",
      link: "https://github.com/okrinul22/next-risk-app"
    },
    {
      id: 4,
      title: "Airplane Booking App",
      desc: "Flight booking application with ticket reservation, scheduling, and user-friendly interface for travel management",
      link: "https://github.com/okrinul22/airplane-booking-app"
    },
    {
      id: 5,
      title: "Warehouse Shop System",
      desc: "Inventory and warehouse management system to track stock, manage products, and handle transactions efficiently",
      link: "https://github.com/okrinul22/warehouse_shop"
    },
    {
      id: 6,
      title: "Student Grade Management",
      desc: "Application to manage student grades, calculate scores, and organize academic performance data",
      link: "https://github.com/okrinul22/grade_student-app"
    }
  ];

  const skills = ["React", "Laravel", "Node.js", "Tailwind", "SQL", "Docker", "TypeScript", "MySQL"];

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm text-purple-600 mb-6">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
            Hi, I'm{" "}
            <span className="gradient-text">Okrinul Hamdi</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Fullstack Developer —{" "}
            <span className="text-purple-500">React</span>,{" "}
            <span className="text-pink-500">Laravel</span>,{" "}
            <span className="text-indigo-500">Node.js</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:border-purple-400 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* About Short */}
        <section className="py-16 text-center">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
            <p className="text-lg text-gray-600 leading-relaxed">
              IT graduate from{" "}
              <span className="text-purple-500 font-medium">President University</span>{" "}
              focused on fullstack development, experienced in building scalable web
              applications, integrating systems, and solving real-world problems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-purple-400 hover:text-purple-500 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <Link
              href="/projects"
              className="text-purple-500 hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

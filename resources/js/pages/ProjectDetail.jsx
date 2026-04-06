import MainLayout from "../layouts/MainLayout";
import { Link, usePage } from "@inertiajs/react";

const allProjects = [
  {
    id: 1,
    title: "Attendance & Payroll System",
    desc: "Laravel + MySQL system for employee attendance tracking and salary calculation",
    fullDesc: "A comprehensive attendance and payroll management system built with Laravel and MySQL. Features include employee management, attendance tracking with check-in/check-out functionality, automatic salary calculation based on working hours, and report generation.",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    github: "https://github.com/okrinul22",
    demo: "https://attendance-demo.example.com",
  },
  {
    id: 2,
    title: "Reporting System",
    desc: "Node.js (Express) based reporting system for project management",
    fullDesc: "A reporting system built with Node.js and Express for project management. Allows teams to create, update, and track project progress with visual reports and analytics dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/okrinul22",
    demo: "https://reporting-demo.example.com",
  },
  {
    id: 3,
    title: "Risk Management System",
    desc: "Web-based system for managing and monitoring risks with structured data tracking and reporting features",
    fullDesc: "A web-based risk management application that helps organizations identify, assess, and mitigate risks. Features include risk categorization, probability/impact analysis, mitigation tracking, and comprehensive reporting.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/okrinul22/next-risk-app",
    demo: "https://risk-demo.example.com",
  },
  {
    id: 4,
    title: "Airplane Booking App",
    desc: "Flight booking application with ticket reservation, scheduling, and user-friendly interface for travel management",
    fullDesc: "A full-featured airplane booking application that allows users to search for flights, make reservations, select seats, and manage bookings. Includes admin panel for flight scheduling and management.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/okrinul22/airplane-booking-app",
    demo: "https://flight-demo.example.com",
  },
  {
    id: 5,
    title: "Warehouse Shop System",
    desc: "Inventory and warehouse management system to track stock, manage products, and handle transactions efficiently",
    fullDesc: "A comprehensive warehouse management system for tracking inventory, managing stock levels, processing orders, and generating inventory reports. Features barcode scanning support and real-time stock updates.",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/okrinul22/warehouse_shop",
    demo: "https://warehouse-demo.example.com",
  },
  {
    id: 6,
    title: "Student Grade Management",
    desc: "Application to manage student grades, calculate scores, and organize academic performance data",
    fullDesc: "A student grade management system that allows teachers to input grades, calculate averages, and generate student performance reports. Features include class management, subject organization, and export functionality.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/okrinul22/grade_student-app",
    demo: "https://grade-demo.example.com",
  },
];

export default function ProjectDetail() {
  const { id } = usePage().props;
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium"
          >
            Back to Projects
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-10">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-500 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-6">
            {project.id}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500">{project.desc}</p>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Project</h2>
          <p className="text-gray-600 leading-relaxed">{project.fullDesc}</p>
        </div>

        {/* Tech Stack */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 rounded-xl text-white font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

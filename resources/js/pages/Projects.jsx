import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Attendance & Payroll System",
      desc: "Laravel + MySQL system for employee attendance tracking and salary calculation",
      link: "https://github.com/okrinul22"
    },
    {
      id: 2,
      title: "Reporting System",
      desc: "Node.js (Express) based reporting system for project management",
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

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in fullstack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

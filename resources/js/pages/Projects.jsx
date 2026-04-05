import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Attendance & Payroll System",
      desc: "Laravel + MySQL system for employee management",
      link: "https://github.com/okrinul22"
    },
    {
      id: 2,
      title: "Reporting System",
      desc: "Node.js reporting system",
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
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </MainLayout>
  );
}
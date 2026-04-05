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

  return (
    <MainLayout>
        <div className="max-w-6xl mx-auto">
      
      {/* Hero */}
<section className="text-center mt-20">
  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
    Hi, I'm Okrinul Hamdi
  </h1>

  <p className="mt-4 text-lg text-gray-600">
    Fullstack Developer — React, Laravel, Node.js
  </p>

  <div className="mt-6 flex justify-center gap-4">
    <Link href="/projects" className="px-5 py-2 bg-black text-white rounded-lg">
      View Projects
    </Link>
    <Link href="/contact" className="px-5 py-2 border rounded-lg">
      Contact Me
    </Link>
  </div>
</section>

      {/* About Short */}
      <section className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-600">
          IT graduate from President University focused on fullstack development,
          experienced in building scalable web applications, integrating systems,
          and solving real-world problems.
        </p>
      </section>

      {/* Project Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">
          My Projects
        </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <section className="mt-20 text-center">
  <h2 className="text-2xl font-bold mb-4">Skills</h2>

  <div className="flex flex-wrap justify-center gap-3">
    {["React", "Laravel", "Node.js", "Tailwind", "SQL"].map(s => (
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition">        {s}
      </span>
    ))}
  </div>
</section>
</div>
    </MainLayout>
  );
}
import { Link } from "@inertiajs/react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
      {/* Project icon/number */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">
        {project.id}
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
        {project.desc}
      </p>

      <Link
        href={`/projects/${project.id}`}
        className="inline-flex items-center gap-2 text-purple-500 hover:text-pink-500 text-sm font-medium transition-colors group/link"
      >
        View Details
        <svg
          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

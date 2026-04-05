export default function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border">
      
      <h3 className="text-lg font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        {project.desc}
      </p>

      <a 
        href={project.link}
        target="_blank"
        className="text-blue-500 text-sm font-medium hover:underline"
      >
        View Project →
      </a>

    </div>
  );
}
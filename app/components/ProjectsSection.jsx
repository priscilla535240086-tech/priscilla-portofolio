'use client';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all hover:transform hover:scale-105"
        >
          <div className="text-6xl mb-4">{project.image}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  activeProject: number | null;
  setActiveProject: (id: number | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  activeProject,
  setActiveProject
}) => {
  const isActive = activeProject === project.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ${
        isActive ? 'scale-[1.02]' : 'scale-100'
      }`}
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
    >
      <div 
        className="h-48 bg-gray-200 dark:bg-gray-700 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
<a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
>
  Open Project →
</a>

      </div>
    </motion.div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/resumeData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white relative inline-block">
            Projects
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-500"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
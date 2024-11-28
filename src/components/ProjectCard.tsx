import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <button className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            {t('portfolio.viewProject')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
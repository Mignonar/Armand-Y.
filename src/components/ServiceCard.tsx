import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Palette, Globe, Briefcase, Package } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { motion } from 'framer-motion';

export const ServicesOverview: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-indigo-600" />,
      title: t('services.graphicDesign.title'),
      description: t('services.graphicDesign.description')
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description')
    },
    {
      icon: <Briefcase className="w-12 h-12 text-indigo-600" />,
      title: t('services.branding.title'),
      description: t('services.branding.description')
    },
    {
      icon: <Package className="w-12 h-12 text-indigo-600" />,
      title: t('services.packaging.title'),
      description: t('services.packaging.description')
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {t('services.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Palette, Globe, Briefcase, Package } from 'lucide-react';

export const ServicesPage: React.FC = () => {
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
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h1>
        <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
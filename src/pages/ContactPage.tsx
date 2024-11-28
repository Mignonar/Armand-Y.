import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      title: t('contact.location'),
      content: '123 Design Street, Creative City'
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600" />,
      title: t('contact.phone'),
      content: '+1 234 567 890'
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: t('contact.email_address'),
      content: 'contact@designstudio.com'
    }
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h1>
        <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              {t('contact.send')}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">{info.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            </div>
          ))}
          <div className="h-64 mt-8 rounded-lg overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647856687320!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
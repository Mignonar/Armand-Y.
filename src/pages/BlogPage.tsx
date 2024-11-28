import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Web Design',
    excerpt: 'Exploring upcoming trends and technologies shaping the web design landscape.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Creating Effective Brand Identities',
    excerpt: 'Key principles and strategies for developing memorable brand identities.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80'
  },
  // Add more blog posts as needed
];

export const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h1>
        <p className="text-xl text-gray-600">{t('blog.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700">
                {t('blog.readMore')} →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
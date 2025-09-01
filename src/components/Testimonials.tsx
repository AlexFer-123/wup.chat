import { useTranslation } from 'next-i18next';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const { t } = useTranslation('common');
  const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
  }>;

  const stats = [
    { value: t('stats.customers'), label: t('stats.customersLabel'), color: 'text-primary-600' },
    { value: t('stats.messages'), label: t('stats.messagesLabel'), color: 'text-green-600' },
    { value: t('stats.satisfaction'), label: t('stats.satisfactionLabel'), color: 'text-purple-600' },
    { value: t('stats.uptime'), label: t('stats.uptimeLabel'), color: 'text-blue-600' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-100 dark:border-gray-700">
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100 dark:border-gray-700"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-primary-600" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {review.role}
                  </div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {review.company}
                  </div>
                </div>
              </div>

              {/* Industry badges */}
              <div className="absolute top-6 left-6">
                {index === 0 && (
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                    🏥 Healthcare
                  </div>
                )}
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    🏨 Hospitality
                  </div>
                )}
                {index === 2 && (
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                    🍽️ Restaurant
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60 dark:opacity-40">
            {/* Mock company logos */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 mb-4">
              <span className="text-gray-600 dark:text-gray-400 font-semibold">HealthCare Plus</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 mb-4">
              <span className="text-gray-600 dark:text-gray-400 font-semibold">Grand Hotels</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 mb-4">
              <span className="text-gray-600 dark:text-gray-400 font-semibold">Bella Vista</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 mb-4">
              <span className="text-gray-600 dark:text-gray-400 font-semibold">MediCenter</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 mb-4">
              <span className="text-gray-600 dark:text-gray-400 font-semibold">Resort Paradise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

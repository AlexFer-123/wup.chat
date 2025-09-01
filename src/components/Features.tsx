import { useTranslation } from 'next-i18next';
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: SparklesIcon,
      title: t('features.aiAutomation.title'),
      description: t('features.aiAutomation.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('features.multiChannel.title'),
      description: t('features.multiChannel.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ChartBarIcon,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CogIcon,
      title: t('features.integration.title'),
      description: t('features.integration.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: UserGroupIcon,
      title: t('features.realTime.title'),
      description: t('features.realTime.description'),
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: ShieldCheckIcon,
      title: t('features.security.title'),
      description: t('features.security.description'),
      color: 'from-gray-500 to-gray-700',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            <SparklesIcon className="h-4 w-4 mr-2" />
            And much more...
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover all the powerful features that make Wup.chat the best choice for your business
          </p>
          <button className="btn-primary">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}

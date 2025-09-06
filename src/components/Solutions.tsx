import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import {
  HeartIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function Solutions() {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState('healthcare');

  const solutions = [
    {
      id: 'healthcare',
      icon: HeartIcon,
      title: t('solutions.healthcare.title'),
      description: t('solutions.healthcare.description'),
      features: t('solutions.healthcare.features', { returnObjects: true }) as string[],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/10',
      textColor: 'text-red-600 dark:text-red-400',
      image: '🏥',
    },
    {
      id: 'hotels',
      icon: BuildingOfficeIcon,
      title: t('solutions.hotels.title'),
      description: t('solutions.hotels.description'),
      features: t('solutions.hotels.features', { returnObjects: true }) as string[],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      textColor: 'text-blue-600 dark:text-blue-400',
      image: '🏨',
    },
    {
      id: 'restaurants',
      icon: ChatBubbleLeftRightIcon,
      title: t('solutions.restaurants.title'),
      description: t('solutions.restaurants.description'),
      features: t('solutions.restaurants.features', { returnObjects: true }) as string[],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      textColor: 'text-green-600 dark:text-green-400',
      image: '🍽️',
    },
  ];

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized automation solutions designed for your industry's unique needs
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === solution.id
                    ? `${solution.bgColor} ${solution.textColor} shadow-md`
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <solution.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{solution.title}</span>
                <span className="sm:hidden text-2xl">{solution.image}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active solution content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${activeSolution.color} rounded-2xl mb-6`}>
                <span className="text-3xl">{activeSolution.image}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeSolution.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeSolution.description}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {activeSolution.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${activeSolution.color} rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200`}>
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center btn-primary group">
                Get Started for {activeSolution.title}
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="flex items-center btn-secondary">
                View Demo
              </button>
            </div>
          </div>

          {/* Visual/Mockup */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Mock header */}
              <div className={`${activeSolution.bgColor} px-6 py-4 border-b border-gray-200 dark:border-gray-700`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${activeSolution.color} rounded-full flex items-center justify-center`}>
                    <activeSolution.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${activeSolution.textColor}`}>
                      {activeSolution.title} Assistant
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      AI-Powered Automation
                    </p>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="inline-flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock chat */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto">
                {activeTab === 'healthcare' && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Hi! I can help you schedule an appointment. What type of service do you need?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">I need a general checkup</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Perfect! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?</p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'hotels' && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Welcome to Grand Hotel! How can I assist you today?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">I'd like to book a room for this weekend</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Great! I have deluxe rooms available. Would you prefer ocean view or city view?</p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'restaurants' && (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Hi! Welcome to Bella Vista. Would you like to make a reservation or see our menu?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">Table for 4 tonight at 7 PM</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex-1">
                        <p className="text-sm">Perfect! I have a table available at 7 PM. May I have your name and phone number?</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mock input */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Type a message...</span>
                  </div>
                  <button className={`w-10 h-10 bg-gradient-to-br ${activeSolution.color} rounded-full flex items-center justify-center`}>
                    <ArrowRightIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">+40%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Efficiency</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

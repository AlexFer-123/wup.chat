import { useTranslation } from 'next-i18next';
import { PlayIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { 
  ChatBubbleLeftRightIcon, 
  DevicePhoneMobileIcon, 
  HeartIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Hero() {
  const { t } = useTranslation('common');

  const socialIcons = [
    { icon: '📱', name: 'WhatsApp', color: 'text-whatsapp' },
    { icon: '👥', name: 'Facebook', color: 'text-facebook' },
    { icon: '📷', name: 'Instagram', color: 'text-instagram' },
    { icon: '💬', name: 'Messenger', color: 'text-primary-600' },
  ];

  const industries = [
    { icon: HeartIcon, name: 'Healthcare', color: 'text-red-500' },
    { icon: BuildingOfficeIcon, name: 'Hotels', color: 'text-blue-500' },
    { icon: ChatBubbleLeftRightIcon, name: 'Restaurants', color: 'text-green-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <SparklesIcon className="h-4 w-4 mr-2" />
            {t('hero.trustedBy')}
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            <span className="block">{t('hero.title').split(' ').slice(0, 3).join(' ')}</span>
            <span className="block text-gradient">
              {t('hero.title').split(' ').slice(3).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            {t('hero.subtitle')}
          </p>

          {/* Social platforms */}
          <div className="flex justify-center items-center space-x-6 mb-8 animate-slide-up animation-delay-400">
            {socialIcons.map((social, index) => (
              <div
                key={social.name}
                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-2xl mb-1">{social.icon}</span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {social.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up animation-delay-600">
            <button className="btn-primary text-lg px-8 py-4 group">
              {t('hero.cta')}
              <SparklesIcon className="h-5 w-5 ml-2 group-hover:animate-spin" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 group">
              <PlayIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('hero.watchDemo')}
            </button>
          </div>

          {/* Industries */}
          <div className="flex justify-center items-center space-x-8 animate-slide-up animation-delay-800">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Perfect for:
            </span>
            {industries.map((industry, index) => (
              <div key={industry.name} className="flex items-center space-x-2">
                <industry.icon className={`h-5 w-5 ${industry.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration/mockup */}
        <div className="mt-16 relative animate-slide-up animation-delay-1000">
          <div className="relative mx-auto max-w-4xl">
            {/* Main dashboard mockup */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Mock header */}
              <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Wup.chat Dashboard
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Mock content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Chat preview */}
                  <div className="md:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 flex-1 shadow">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Hello! How can I help you today? 🤖
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary-500 rounded-lg p-3 max-w-xs shadow">
                          <p className="text-sm text-white">
                            I'd like to book an appointment
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 flex-1 shadow">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            I'd be happy to help! What type of service are you looking for?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
                      <div className="text-sm text-green-700 dark:text-green-300">Response Rate</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                      <div className="text-sm text-blue-700 dark:text-blue-300">Availability</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2M+</div>
                      <div className="text-sm text-purple-700 dark:text-purple-300">Messages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center text-2xl animate-bounce-slow">
              📱
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-facebook text-white rounded-full flex items-center justify-center text-2xl animate-bounce-slow animation-delay-1000">
              👥
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-instagram text-white rounded-full flex items-center justify-center text-2xl animate-bounce-slow animation-delay-2000">
              📷
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

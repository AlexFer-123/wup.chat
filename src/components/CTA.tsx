import { useTranslation } from 'next-i18next';
import { SparklesIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function CTA() {
  const { t } = useTranslation('common');

  const benefits = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
    'Full feature access',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
      <div className="absolute inset-0 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4 mr-2" />
          Start your automation journey today
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('cta.title')}
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="flex items-center space-x-2 text-white/90">
              <CheckIcon className="h-5 w-5 text-green-300 flex-shrink-0" />
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group text-lg">
            {t('cta.button')}
            <ArrowRightIcon className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
            Schedule Demo
          </button>
        </div>

        {/* Fine print */}
        <p className="text-white/70 text-sm">
          {t('cta.noCredit')}
        </p>

        {/* Social proof */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">500+ companies already joined</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <SparklesIcon key={i} className="h-4 w-4 text-yellow-300" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 customer satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

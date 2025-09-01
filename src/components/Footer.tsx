import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Logo from './Logo';
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const { t } = useTranslation('common');

  const footerLinks = {
    product: [
      { name: t('footer.features'), href: '#features' },
      { name: t('footer.pricing'), href: '#pricing' },
      { name: t('footer.integrations'), href: '#integrations' },
    ],
    company: [
      { name: t('footer.about'), href: '#about' },
      { name: t('footer.careers'), href: '#careers' },
      { name: t('footer.blog'), href: '#blog' },
    ],
    support: [
      { name: t('footer.helpCenter'), href: '#help' },
      { name: t('footer.documentation'), href: '#docs' },
      { name: t('footer.community'), href: '#community' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '#privacy' },
      { name: t('footer.terms'), href: '#terms' },
      { name: t('footer.cookies'), href: '#cookies' },
    ],
  };

  const socialLinks = [
    { name: 'WhatsApp', icon: '📱', href: '#', color: 'hover:text-whatsapp' },
    { name: 'Facebook', icon: '👥', href: '#', color: 'hover:text-facebook' },
    { name: 'Instagram', icon: '📷', href: '#', color: 'hover:text-instagram' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                <span>hello@wup.chat</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="h-5 w-5 text-primary-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 text-2xl hover:scale-110 transform transition-transform`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-semibold mb-4 capitalize">
                    {t(`footer.${category}`)}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest news, updates, and tips delivered to your inbox
              </p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© 2024 Wup.chat. {t('footer.rights')}</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

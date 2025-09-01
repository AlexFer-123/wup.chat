import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Wup.chat - AI-Powered Communication Automation for Healthcare, Hotels & Restaurants</title>
        <meta 
          name="description" 
          content="Streamline WhatsApp, Facebook, Instagram automation with AI. Perfect for healthcare centers, hotels, and restaurants. Boost efficiency and customer satisfaction." 
        />
        <meta name="keywords" content="WhatsApp automation, AI chatbot, healthcare communication, hotel booking, restaurant reservations, social media automation, Wup.chat" />
        <meta property="og:title" content="Wup.chat - AI-Powered Communication Automation" />
        <meta property="og:description" content="Streamline WhatsApp, Facebook, Instagram automation with AI for healthcare, hotels, and restaurants." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wup.chat" />
        <meta property="og:image" content="https://wup.chat/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wup.chat - AI-Powered Communication Automation" />
        <meta name="twitter:description" content="Streamline WhatsApp, Facebook, Instagram automation with AI for healthcare, hotels, and restaurants." />
        <meta name="twitter:image" content="https://wup.chat/twitter-image.jpg" />
        <link rel="canonical" href="https://wup.chat" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <main>
          <Hero />
          <Features />
          <Solutions />
          <Testimonials />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wup.chat - AI-powered communication automation for healthcare, hotels, and restaurants. Streamline WhatsApp, Facebook, Instagram interactions." />
        <meta name="keywords" content="WhatsApp automation, AI chatbot, healthcare communication, hotel booking, restaurant reservations, social media automation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wup.chat" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

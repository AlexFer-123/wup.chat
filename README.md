# Wup.chat - AI-Powered Communication Automation

A modern Next.js landing page for Wup.chat, an AI-powered communication automation platform designed for healthcare centers, hotels, and restaurants.

## 🚀 Features

- **Multi-language Support**: English (EN-US), Portuguese (PT-BR), and Spanish (ES-MX)
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Industry-Specific Solutions**: Tailored content for healthcare, hospitality, and restaurants
- **Social Media Integration**: WhatsApp, Facebook, Instagram automation focus
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Internationalization**: next-i18next
- **Theme**: next-themes for dark/light mode
- **Icons**: Heroicons and Lucide React
- **Animations**: Framer Motion and CSS animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/wup-chat-landing.git
cd wup-chat-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Internationalization

The application supports three languages:
- **English** (default): `/` or `/en`
- **Portuguese**: `/pt`
- **Spanish**: `/es`

Translation files are located in `public/locales/{locale}/common.json`.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. Primary colors use a blue palette with custom brand colors for social platforms:
- WhatsApp: `#25D366`
- Facebook: `#1877F2`
- Instagram: `#E4405F`

### Content
All content is stored in translation files for easy customization and localization.

### Components
Reusable components are located in `src/components/`:
- `Header.tsx` - Navigation with language/theme toggles
- `Hero.tsx` - Main hero section with CTA
- `Features.tsx` - Feature showcase grid
- `Solutions.tsx` - Industry-specific solutions
- `Testimonials.tsx` - Customer reviews and stats
- `CTA.tsx` - Call-to-action section
- `Footer.tsx` - Footer with links and contact info

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Other Platforms
Build the project:
```bash
npm run build
npm start
```

## 📱 Industry Focus

The platform is specifically designed for:

### 🏥 Healthcare Centers
- Appointment scheduling automation
- Patient reminders and follow-ups
- Symptom assessment chatbots
- HIPAA/LGPD compliant communication

### 🏨 Hotels & Hospitality
- Room booking automation
- Guest service chatbots
- Check-in/check-out assistance
- Concierge services

### 🍽️ Restaurants
- Table reservation management
- Menu inquiries and recommendations
- Order taking and delivery coordination
- Customer feedback collection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://wup.chat)
- [Documentation](https://docs.wup.chat)
- [Support](mailto:support@wup.chat)

---

Built with ❤️ for the future of business communication automation.

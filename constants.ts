import { Bot, Link as LinkIcon, BarChart3, Zap, Shield, Globe, MessageSquare, Layout, Cpu } from 'lucide-react';

// Chatbot URL - Update this to point to your chatbot deployment
// Use relative path to keep on same domain/port, or absolute URL if needed
export const CHATBOT_URL = 'https://ai-rovoxa-chatbot-ieak3ptg5-mujtabas-projects-9c87e9c0.vercel.app/';

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#pages' },
  { label: 'Pricing', href: '#pricing' },
];

export const TRUSTED_BRANDS = [
  { name: 'Vision', icon: Zap },
  { name: 'Greenish', icon: Globe },
  { name: 'Glossy', icon: Layout },
  { name: 'Ebooks', icon: Cpu },
  { name: 'Proline', icon: BarChart3 },
];

export const FEATURES = [
  {
    title: 'Train your bot',
    description: 'Add your data or connect with your knowledge base to make it smart.',
    icon: Bot,
  },
  {
    title: 'Deploy anywhere',
    description: 'Website, messenger, slack, or your own custom app integration.',
    icon: LinkIcon,
  },
  {
    title: 'Track & improve',
    description: 'Use analytics to refine conversations in real-time and grow.',
    icon: BarChart3,
  },
];

export const PRICING_PLANS = [
  {
    name: 'Starter Plan',
    description: 'Perfect for small teams or startups getting started with AI chatbots.',
    price: '$19',
    period: '/month',
    features: [
      '1 AI chatbot',
      'Up to 1,000 conversations/month',
      'Multi-platform support (Web & Messenger)',
      'Basic chatbot customization',
      'Email support',
      'SSL security'
    ],
    highlight: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Premium Plan',
    description: 'For growing teams who need more power, customization, and advanced AI features.',
    price: '$49',
    period: '/month',
    features: [
      'Includes Everything in Starter, plus:',
      'Unlimited AI chatbots',
      'Unlimited conversations',
      'Advanced NLP & learning capabilities',
      'Full workflow automation',
      'Analytics & conversation insights',
      'API & integrations access'
    ],
    highlight: true,
    cta: 'Get Started'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Finally, a chatbot that's easy to set up and actually works.",
    author: "Oliver Jack",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
  },
  {
    quote: "We saw a 30% increase in lead conversions in just 3 weeks.",
    author: "Sarah Smith",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
  },
  {
    quote: "Rovoxa's custom workflows are a game-changer for our support.",
    author: "James Doe",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
  },
  {
    quote: "The best investment we've made for our customer success team.",
    author: "Emily Chen",
    role: "VP of Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100"
  },
  {
    quote: "Seamless integration with our existing stack. Highly recommended.",
    author: "Michael Brown",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100"
  },
  {
    quote: "Our response times dropped by 80% within the first month.",
    author: "Lisa Wang",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=100&h=100"
  }
];
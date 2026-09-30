import { 
  NavigationItem, 
  ServiceCard, 
  ProjectCard, 
  TimelineItem, 
  ContactInfo, 
  SocialLink, 
  StatCard,
  ImpactStat,
  Translation
} from '@/types';

// Page order; in Arabic (RTL) the first item sits next to the logo.
// Hrefs start with "/" so they also work from sub-pages such as /work/vego.
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '/#about', label: { ar: 'نبذة', en: 'About' } },
  { href: '/#expertise', label: { ar: 'الخبرات', en: 'Expertise' } }, // TODO: review EN copy
  { href: '/#work', label: { ar: 'الأعمال', en: 'Work' } }, // TODO: review EN copy
  { href: '/#insights', label: { ar: 'المقالات', en: 'Insights' } }, // TODO: review EN copy
  { href: '/#contact', label: { ar: 'تواصل', en: 'Contact' } },
];

export const SERVICES: ServiceCard[] = [
  {
    icon: 'strategy',
    title: { 
      ar: 'استشارات الأعمال الاستراتيجية', 
      en: 'Strategic Business Consulting' 
    },
    description: { 
      ar: 'خدمات متخصصة تهدف إلى تمكين المؤسسات من صياغة رؤيتها المستقبلية، واتخاذ قرارات مهمة تعزز قدرتها على المنافسة والنمو، ووضع خطط طويلة المدى من خلال تحليل السوق والفرص والتحديات.', 
      en: 'Specialized services designed to empower organizations to craft their future vision, make pivotal decisions that strengthen competitiveness, and build long-term plans through thorough market, opportunity, and challenge analysis.' 
    },
  },
  {
    icon: 'ev_station',
    title: { 
      ar: 'إيجاد حلول للتنقل الكهربائي', 
      en: 'Electric Mobility Solutions' 
    },
    description: { 
      ar: 'حلول التنقل الكهربائي هي منظومة من التقنيات ووسائل نقل تعمل بالطاقة الكهربائية، وتشمل السكوترات والدراجات والمركبات الكهربائية ومحطات الشحن، بهدف تقليل الانبعاثات وتحسين التنقل.', 
      en: 'Electric mobility encompasses a range of electric-powered transport technologies — scooters, bicycles, EVs, and charging infrastructure — aimed at reducing emissions and improving the quality of urban movement.' 
    },
  },
  {
    icon: 'factory',
    title: { 
      ar: 'تطوير العمليات الصناعية', 
      en: 'Industrial Process Development' 
    },
    description: { 
      ar: 'عملية منهجية تهدف إلى التحسين المستمر لأساليب العمل في المصانع، باستخدام أدوات مثل الأتمتة والرقمنة وتوحيد الإجراءات وإعادة هندسة العمليات.', 
      en: 'A systematic approach to continuous improvement of manufacturing workflows — leveraging automation, digitization, procedure standardization, and business process re-engineering to achieve higher output, better quality, and lower cost.' 
    },
  },
  {
    icon: 'domain',
    title: { 
      ar: 'بروبتك الاستشارية', 
      en: 'PropTech Advisory' 
    },
    description: { 
      ar: 'مساعدة شركات العقارات والتكنولوجيا على تبني الحلول الرقمية وتبسيط العمليات المتعلقة بالإدارة والتسويق والمبيعات، لسد الفجوة بين الابتكار التكنولوجي والممارسات العقارية التقليدية.', 
      en: 'Helping real estate and technology companies adopt digital solutions and streamline management, marketing, and sales operations — bridging the gap between technological innovation and traditional real estate practices.' 
    },
  },
  {
    icon: 'brand_awareness',
    title: { 
      ar: 'بناء مشروع وعلامة تجارية تتماشى مع رؤية السعودية 2030', 
      en: 'Building a Business & Brand Aligned with Saudi Vision 2030' 
    },
    description: { 
      ar: 'إنشاء هوية تجارية سعودية تعكس الابتكار والاستدامة والتقدم الاقتصادي، وتدعم القطاعات المستهدفة في الرؤية، مع إبراز مساهمة المشروع في تنمية الاقتصاد وجذب المستثمرين والشركاء.', 
      en: 'Creating a Saudi business identity that reflects innovation, sustainability, and economic advancement, supporting the Vision\'s targeted sectors while showcasing the project\'s contribution to economic growth and attracting investors and strategic partners.' 
    },
    wide: true,
  },
];

export const PROJECTS: ProjectCard[] = [
  {
    id: 'vego',
    name: { ar: 'فيجو (Vego)', en: 'Vego' },
    description: { 
      ar: 'أول شركة سعودية متخصصة في تصنيع حلول النقل الكهربائي عالميًا، تأسست عام ٢٠٢٠م بمهمة واضحة — تحويل طريقة تعامل العالم مع النقل من خلال تقديم حلول نقل مستدامة ومبتكرة، للمساهمة في تكوين بيئة نظيفة وأكثر خضرة.', 
      en: 'Saudi Arabia\'s first company specializing in the global manufacturing of electric transport solutions, founded in 2020 with a clear mission — to transform the world\'s approach to mobility through sustainable, innovative transport solutions that contribute to a cleaner and greener planet.' 
    },
    image: '/images/vego-group.webp',
    tags: [
      { ar: 'كهربائي', en: 'Electric' },
      { ar: 'استدامة', en: 'Sustainability' },
      { ar: 'نقل', en: 'Mobility' },
      { ar: 'رؤية 2030', en: 'Vision 2030' },
    ],
    link: 'https://www.vego.sa/',
    featured: true,
  },
  {
    id: 'digital-real-estate',
    name: { 
      ar: 'مبادرة التحول الرقمي العقاري', 
      en: 'Real Estate Digital Transformation' 
    },
    description: { 
      ar: 'تطوير حلول تقنية متكاملة لإدارة الأصول العقارية وتسهيل العمليات الاستثمارية.', 
      en: 'Developing integrated technology solutions for real estate asset management and streamlining investment operations.' 
    },
    image: '/images/digital-real-estate.jpg',
    tags: [],
  },
  {
    id: 'energy-efficiency',
    name: { 
      ar: 'مركز كفاءة الطاقة', 
      en: 'Energy Efficiency Center' 
    },
    description: { 
      ar: 'تقديم استشارات متخصصة لرفع كفاءة استهلاك الطاقة في المنشآت الصناعية الكبرى.', 
      en: 'Providing specialized consulting to improve energy consumption efficiency across large industrial facilities.' 
    },
    image: '/images/energy-efficiency-industry.jpg',
    tags: [],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    title: { ar: 'دبلوم الحوكمة الإلكترونية', en: 'e-Governance Diploma' },
    date: '2021',
    active: true,
  },
  {
    title: { ar: 'بكالوريوس إدارة الأعمال', en: 'Bachelor\'s — Business Administration' },
    subtitle: { ar: 'جامعة مؤتة', en: 'Mu\'tah University' },
    date: '2020',
  },
  {
    title: { ar: 'بكالوريوس – كلية الآداب', en: 'Bachelor of Arts' },
    subtitle: { ar: 'جامعة الملك فيصل', en: 'King Faisal University' },
    date: '2012',
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'location_on',
    label: { ar: 'الموقع', en: 'Location' },
    value: 'الرياض، المملكة العربية السعودية',
  },
  {
    icon: 'mail',
    label: { ar: 'البريد الإلكتروني', en: 'Email' },
    value: 'contact@abdulaziz.life',
  },
  {
    icon: 'call',
    label: { ar: 'رقم الجوال', en: 'Phone' },
    value: '+966 55 507 1670',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdalaziz-alsbaie-9ba1b61bb',
    icon: 'fab fa-linkedin-in',
  },
  {
    platform: 'Snapchat',
    url: '#',
    icon: 'fab fa-snapchat-ghost',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/966555071670',
    icon: 'fab fa-whatsapp',
  },
];

export const STATS: StatCard[] = [
  {
    icon: 'history',
    value: '+15',
    label: { ar: 'سنة خبرة مهنية', en: 'Years of Experience' },
  },
  {
    icon: 'category',
    value: '3',
    label: { ar: 'قطاعات استراتيجية', en: 'Strategic Sectors' },
  },
  {
    icon: 'rocket_launch',
    value: 'مؤسس شركة فيجو',
    label: { ar: 'الريادة في النقل الكهربائي', en: 'Pioneer in Electric Mobility' },
    wide: true,
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: '+ 15',
    label: { ar: 'سنوات الخبرة', en: 'Years of Experience' },
    description: { ar: 'عبر الاستراتيجية والتحول وبناء المشاريع', en: 'Across strategy, transformation and venture building' }, // TODO: review EN copy
  },
  {
    value: '03',
    label: { ar: 'قطاعات استراتيجية', en: 'Strategic Sectors' },
    description: { ar: 'الأعمال، التكنولوجيا، والتنقل', en: 'Business, technology and mobility' }, // TODO: review EN copy
  },
  {
    value: '+ 04',
    label: { ar: 'مشاريع ومبادرات', en: 'Ventures & Initiatives' }, // TODO: review EN copy
    description: { ar: 'تأسيسًا ومشاركةً في المملكة العربية السعودية', en: 'Founded and co-founded in Saudi Arabia' }, // TODO: review EN copy
  },
  {
    value: '2030',
    label: { ar: 'أثر موجَّه نحو المستقبل', en: 'Future-Focused Impact' }, // TODO: review EN copy
    description: { ar: 'متوافق مع رؤية 2030 وصناعات العصر القادم', en: 'Aligned with Vision 2030 and next-generation industries' }, // TODO: review EN copy
  },
];

export const BIO_INFO = {
  name: { ar: 'عبدالعزيز السبيعي', en: 'Abdulaziz Al-Suabie' },
  location: { ar: 'الرياض، السعودية', en: 'Riyadh, Saudi Arabia' },
  specialty: { ar: 'إدارة أعمال', en: 'Business Administration' },
  university: { ar: 'جامعة الملك فيصل', en: 'King Faisal University' },
  email: 'contact@abdulaziz.life',
  phone: '+966 55 507 1670',
};

export const LANGUAGES: Translation[] = [
  { ar: 'العربية (اللغة الأم)', en: 'Arabic (Native)' },
  { ar: 'الإنجليزية (احترافية)', en: 'English (Professional)' },
];

// Arrows are part of the copy: "←" points forward in Arabic, "→" in English.
export const HERO = {
  title: { ar: 'نبني ما يستحق أن يستمر.', en: 'Building what lasts.' }, // TODO: review EN copy
  intro: {
    ar: 'رائد أعمال سعودي ومستشار استراتيجي يعمل في مجالات التحول التجاري وبناء المشاريع والصناعات المستقبلية. مقيم في الرياض.',
    en: 'A Saudi entrepreneur and strategic advisor working across business transformation, venture building and future industries. Based in Riyadh.', // TODO: review EN copy
  },
  primaryCta: { ar: 'استكشف الأعمال ←', en: 'Explore the Work →' }, // TODO: review EN copy
  secondaryCta: { ar: 'احجز استشارة ↗', en: 'Book a Consultation ↗' },
  locationLabel: { ar: 'مقيم في', en: 'Based in' }, // TODO: review EN copy
  location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
} satisfies Record<string, Translation>;

export const CONSULTATION_TYPES: Translation[] = [
  { ar: '— اختر نوع الاستشارة —', en: '— Select consultation type —' },
  { ar: 'ريادة أعمال', en: 'Entrepreneurship' },
  { ar: 'إنشاء الشركات', en: 'Company Formation' },
  { ar: 'نموذج العمل Business Model', en: 'Business Model' },
  { ar: 'الاستثمار', en: 'Investment' },
  { ar: 'هيكلة الشركات', en: 'Company Structuring' },
  { ar: 'طريقة التخارج', en: 'Exit Strategy' },
];

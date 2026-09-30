import { 
  NavigationItem, 
  ProjectCard, 
  TimelineItem, 
  ContactInfo, 
  SocialLink, 
  ImpactStat,
  ExpertiseArea,
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

export const EXPERTISE = {
  heading: {
    ar: 'نحوّل الرؤية إلى استراتيجيات عملية، ونقود الأعمال نحو نمو مستدام وأثر ملموس.',
    en: 'We turn vision into practical strategy and lead businesses toward sustainable growth and tangible impact.', // TODO: review EN copy
  },
  note: {
    ar: 'أربعة مجالات متكاملة من الخبرة والممارسة — مبنية على أكثر من 15 عامًا في السوق السعودية.',
    en: 'Four integrated areas of expertise and practice — built on more than 15 years in the Saudi market.', // TODO: review EN copy
  },
  location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
  cta: { ar: 'ناقش متطلباتك ←', en: 'Discuss your needs →' }, // TODO: review EN copy
};

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    title: { ar: 'استراتيجية الأعمال', en: 'Business Strategy' }, // TODO: review EN copy
    subtitle: { ar: 'التوجه الاستراتيجي والنمو', en: 'Strategic direction & growth' }, // TODO: review EN copy
    description: {
      ar: 'الاستراتيجية ونماذج الأعمال وتوجهات النمو والشراكات والتموضع طويل المدى للمؤسسات الراسخة والمشاريع الجديدة في المملكة العربية السعودية والمنطقة.',
      en: 'Strategy, business models, growth direction, partnerships and long-term positioning for established organisations and new ventures in Saudi Arabia and the region.', // TODO: review EN copy
    },
  },
  {
    title: { ar: 'بناء المشاريع', en: 'Venture Building' }, // TODO: review EN copy
    subtitle: { ar: 'من الفكرة إلى التنفيذ', en: 'From idea to execution' }, // TODO: review EN copy
    description: {
      ar: 'تصور المشاريع الجديدة وتأسيسها وتوسيع نطاقها من الصفر — تطوير المنتجات ودخول الأسواق وبناء المنظمات المصممة للاستدامة.',
      en: 'Conceiving, founding and scaling new ventures from the ground up — product development, market entry and building organisations designed to last.', // TODO: review EN copy
    },
  },
  {
    title: { ar: 'الابتكار والتكنولوجيا', en: 'Innovation & Technology' }, // TODO: review EN copy
    subtitle: { ar: 'الفرص المدفوعة بالتكنولوجيا', en: 'Technology-driven opportunity' }, // TODO: review EN copy
    description: {
      ar: 'التنقل الكهربائي والتحول الرقمي ونماذج الأعمال الناشئة. تحويل التحولات التكنولوجية إلى ميزة تنافسية ملموسة ومواقع سوقية جديدة.',
      en: 'Electric mobility, digital transformation and emerging business models — turning technological shifts into real competitive advantage and new market positions.', // TODO: review EN copy
    },
  },
  {
    title: { ar: 'التحول المؤسسي', en: 'Organisational Transformation' }, // TODO: review EN copy
    subtitle: { ar: 'التطور التنظيمي', en: 'Organisational development' }, // TODO: review EN copy
    description: {
      ar: 'مساعدة المنظمات على التطور وتحسين العمليات وبناء قدرة نمو مستدامة — متوافقة مع متطلبات رؤية 2030 والاقتصاد السعودي المتطور.',
      en: 'Helping organisations evolve, improve operations and build sustainable growth capacity — aligned with Vision 2030 and the evolving Saudi economy.', // TODO: review EN copy
    },
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
  { title: { ar: 'دبلوم في الحوكمة الإلكترونية', en: 'e-Governance Diploma' }, date: '2021' },
  {
    title: { ar: 'بكالوريوس إدارة الأعمال', en: "Bachelor's — Business Administration" },
    subtitle: { ar: 'جامعة مؤتة', en: "Mu'tah University" },
    date: '2020',
  },
  {
    title: { ar: 'بكالوريوس آداب', en: 'Bachelor of Arts' },
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
  location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
  specialty: { ar: 'إدارة الأعمال', en: 'Business Administration' },
  email: 'contact@abdulaziz.life',
  phone: '+966 55 507 1670',
};

export const ABOUT = {
  heading: {
    ar: 'نبني أعمالًا أقوى، نقود تحولًا مؤثرًا، ونصنع أثرًا يدوم.',
    en: 'Stronger businesses, meaningful transformation, lasting impact.', // TODO: review EN copy
  },
  intro: {
    ar: 'رائد أعمال يمتلك خبرة تتجاوز 15 عامًا في قيادة الابتكار والمشاريع التحولية عبر قطاعات الطاقة والمقاولات والتقنية المالية. يركّز على الاستفادة من التقنيات المتقدمة لبناء نماذج أعمال مستدامة وفعّالة تتوافق مع رؤية المملكة العربية السعودية 2030.',
    en: 'An entrepreneur with more than 15 years of experience leading innovation and transformative projects across energy, contracting and financial technology. He focuses on using advanced technologies to build sustainable, effective business models aligned with Saudi Vision 2030.', // TODO: review EN copy
  },
  // Rendered as one line of the first two, then the third; the second is faded.
  pillars: [
    { ar: 'بناء الأعمال.', en: 'Building businesses.' }, // TODO: review EN copy
    { ar: 'قيادة التحول.', en: 'Leading transformation.' }, // TODO: review EN copy
    { ar: 'صناعة الأثر.', en: 'Creating impact.' }, // TODO: review EN copy
  ],
  roles: [
    { ar: 'رائد أعمال وباني مشاريع', en: 'Entrepreneur & venture builder' }, // TODO: review EN copy
    { ar: 'مستشار استراتيجي', en: 'Strategic advisor' }, // TODO: review EN copy
    { ar: 'قطاع التنقل والتكنولوجيا', en: 'Mobility & technology' }, // TODO: review EN copy
    { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
  ],
  bio: [
    {
      ar: 'عبدالعزيز السبيعي رائد أعمال سعودي ومستشار استراتيجي يمتلك خبرة تتجاوز 15 عامًا في بناء الشركات وقيادة التحول المؤسسي وتطوير الاستراتيجيات في قطاعات الأعمال والتكنولوجيا والتنقل. يتمحور عمله حول صناعة أثر حقيقي ودائم يتوافق مع رؤية المملكة العربية السعودية 2030.',
      en: 'Abdulaziz Al-Suabie is a Saudi entrepreneur and strategic advisor with more than 15 years of experience building companies, leading organisational transformation and developing strategy across business, technology and mobility. His work centres on creating real, lasting impact aligned with Saudi Vision 2030.', // TODO: review EN copy
    },
    {
      ar: 'يجمع عمله بين العزيمة الريادية والانضباط التنفيذي — محوّلًا الأفكار إلى مؤسسات، والتحديات التجارية إلى فرص حقيقية.',
      en: 'His work combines entrepreneurial drive with executive discipline — turning ideas into institutions and business challenges into real opportunities.', // TODO: review EN copy
    },
  ],
  quote: { ar: '"نبني للمستقبل، ونصنع أثرًا حقيقيًا."', en: '"We build for the future, and create real impact."' }, // TODO: review EN copy
  moreLink: { ar: '← المزيد عن عبدالعزيز', en: 'More about Abdulaziz →' }, // TODO: review EN copy
  profileLabel: { ar: 'الملف الشخصي', en: 'Profile' }, // TODO: review EN copy
  profileFields: {
    name: { ar: 'الاسم', en: 'Name' },
    location: { ar: 'الموقع', en: 'Location' },
    specialty: { ar: 'التخصص', en: 'Specialty' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    phone: { ar: 'الهاتف', en: 'Phone' },
  },
  educationLabel: { ar: 'التعليم', en: 'Education' },
  sectorsTitle: { ar: 'القطاعات الاستراتيجية', en: 'Strategic Sectors' },
};

// The small Latin label beside each sector comes from the design ("ENERGY"); in English the Arabic name is shown there instead.
export const SECTORS: Translation[] = [
  { ar: 'الطاقة', en: 'Energy' },
  { ar: 'الصناعة', en: 'Industry' },
  { ar: 'التقنية المالية', en: 'Fintech' },
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

import { 
  NavigationItem, 
  TimelineItem, 
  ContactInfo, 
  SocialLink, 
  ImpactStat,
  ExpertiseArea,
  WorkProject,
  Insight,
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
    en: 'Turning vision into strategy, and strategy into sustainable growth.', // TODO: review EN copy
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

export const WORK = {
  heading: {
    ar: 'نحوّل الأفكار إلى حلول، والطموحات إلى نتائج، ونصنع أثرًا حقيقيًا يدفع الأعمال إلى الأمام.',
    en: 'Ideas into solutions, ambition into results — and real impact.', // TODO: review EN copy
  },
  note: {
    ar: 'أعمال ومبادرات وتحولات مبنية عبر الاستراتيجية والابتكار وإنشاء المشاريع.',
    en: 'Work, initiatives and transformations built through strategy, innovation and venture creation.', // TODO: review EN copy
  },
  viewProject: { ar: 'عرض المشروع ←', en: 'View project →' }, // TODO: review EN copy
};

// Tags are listed in reading order. Only projects with a caseStudy route get "view project" links.
export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'vego',
    title: { ar: 'VEGO', en: 'VEGO' },
    category: { ar: 'حركة كهربائية · مؤسس · 2022 – الآن', en: 'Electric mobility · Founder · 2022 – present' }, // TODO: review EN copy
    tagline: { ar: 'إعادة تصور التنقل عبر الطاقة النظيفة.', en: 'Reimagining mobility through clean energy.' }, // TODO: review EN copy
    description: {
      ar: 'أول شركة سعودية متخصصة في التنقل الكهربائي — بناء البنية التحتية والمركبات والمنظومة المتكاملة لمستقبل خالٍ من الانبعاثات.',
      en: "Saudi Arabia's first company dedicated to electric mobility — building the infrastructure, vehicles and ecosystem for a zero-emission future.", // TODO: review EN copy
    },
    tags: [
      { ar: 'تقنية نظيفة', en: 'Clean tech' }, // TODO: review EN copy
      { ar: 'تنقل', en: 'Mobility' }, // TODO: review EN copy
      { ar: 'مشروع', en: 'Venture' }, // TODO: review EN copy
    ],
    image: '/images/work/vego.jpg',
    caseStudy: '/work/vego',
  },
  {
    id: 'business-transformation',
    title: { ar: 'تحول الأعمال', en: 'Business Transformation' }, // TODO: review EN copy
    category: { ar: 'استراتيجية واستشارات · مستشار استراتيجي', en: 'Strategy & advisory · Strategic advisor' }, // TODO: review EN copy
    tagline: { ar: 'استشارات استراتيجية للمؤسسة السعودية المتطورة.', en: 'Strategic advisory for the evolving Saudi enterprise.' }, // TODO: review EN copy
    description: {
      ar: 'العمل مع المؤسسات السعودية الراسخة في تكليفات تشمل الاستراتيجية المؤسسية وإعادة تصميم العمليات والتموضع طويل المدى.',
      en: 'Working with established Saudi organisations on mandates spanning corporate strategy, operating-model redesign and long-term positioning.', // TODO: review EN copy
    },
    tags: [
      { ar: 'تحول', en: 'Transformation' }, // TODO: review EN copy
      { ar: 'استشارات', en: 'Advisory' }, // TODO: review EN copy
      { ar: 'استراتيجية', en: 'Strategy' }, // TODO: review EN copy
    ],
    image: '/images/work/business-transformation.jpg',
  },
  {
    id: 'venture-ecosystem',
    title: { ar: 'منظومة المشاريع', en: 'Venture Ecosystem' }, // TODO: review EN copy
    category: { ar: 'بناء المشاريع · شريك مؤسس ومستشار', en: 'Venture building · Co-founder & advisor' }, // TODO: review EN copy
    tagline: { ar: 'البناء جنبًا إلى جنب مع جيل المؤسسين السعودي القادم.', en: 'Building alongside the next generation of Saudi founders.' }, // TODO: review EN copy
    description: {
      ar: 'دعم المشاريع الجديدة من مرحلة الفكرة حتى دخول السوق — بناء أعمال متينة هيكليًا ومتموضعة استراتيجيًا.',
      en: 'Supporting new ventures from idea to market entry — building businesses that are structurally sound and strategically positioned.', // TODO: review EN copy
    },
    tags: [
      { ar: 'استشارات', en: 'Advisory' }, // TODO: review EN copy
      { ar: 'منظومة', en: 'Ecosystem' }, // TODO: review EN copy
      { ar: 'مشاريع', en: 'Ventures' }, // TODO: review EN copy
    ],
    image: '/images/work/ventures-ecosystem.jpg',
  },
  {
    id: 'mamsa',
    title: { ar: 'ممسى', en: 'Mamsa' }, // TODO: review EN copy
    category: { ar: 'منصة فندقية', en: 'Hospitality platform' }, // TODO: review EN copy
    tagline: {
      ar: 'تجربة رقمية متكاملة لاستكشاف واستئجار الوحدات السكنية والفندقية.',
      en: 'An end-to-end digital experience for finding and renting residential and hotel units.', // TODO: review EN copy
    },
    description: {
      ar: 'منصة فندقية تتيح للمستخدمين اكتشاف وحجز واستئجار مجموعة متنوعة من الوحدات السكنية والفندقية، مع تجربة سلسة لإدارة الحجوزات والإقامات.',
      en: 'A hospitality platform for discovering, booking and renting a wide range of residential and hotel units, with a seamless way to manage bookings and stays.', // TODO: review EN copy
    },
    tags: [
      { ar: 'عقارات', en: 'Real estate' }, // TODO: review EN copy
      { ar: 'تطوير', en: 'Development' }, // TODO: review EN copy
      { ar: 'استثمار', en: 'Investment' }, // TODO: review EN copy
    ],
    image: '/images/work/mamsa.png',
    logo: { src: '/logos/mamsa.svg', width: 200, height: 95 },
  },
  {
    id: 'ithaba',
    title: { ar: 'إثابة', en: 'Ithaba' }, // TODO: review EN copy
    category: { ar: 'تطوير واستثمار', en: 'Development & investment' }, // TODO: review EN copy
    tagline: { ar: 'تمليك عقاري يفتح فرصًا استثمارية مستدامة.', en: 'Property ownership that opens sustainable investment opportunities.' }, // TODO: review EN copy
    description: {
      ar: 'منصة استثمار عقاري تتيح للمستثمرين امتلاك حصص جزئية في عقارات مختارة، وفتح فرص الاستثمار العقاري أمام شريحة أكبر من المستثمرين بمبالغ أكثر مرونة.',
      en: 'A real-estate investment platform that lets investors own fractional shares in selected properties, opening real-estate investing to more people with more flexible amounts.', // TODO: review EN copy
    },
    tags: [
      { ar: 'تطوير', en: 'Development' }, // TODO: review EN copy
      { ar: 'عمران', en: 'Urban' }, // TODO: review EN copy
      { ar: 'قيمة', en: 'Value' }, // TODO: review EN copy
    ],
    image: '/images/work/ithaba.png',
    logo: { src: '/logos/ithaba.svg', width: 99.84, height: 61 },
  },
  {
    id: 'ev-share',
    title: { ar: 'EV Share', en: 'EV Share' },
    category: { ar: 'التنقل الكهربائي', en: 'Electric mobility' }, // TODO: review EN copy
    tagline: { ar: 'حلول مبتكرة للتنقل الكهربائي المستدام.', en: 'Innovative solutions for sustainable electric mobility.' }, // TODO: review EN copy
    description: {
      ar: 'العمل على تطوير حلول تنقل كهربائي تُمكّن الأفراد والمؤسسات من الوصول إلى المركبات الكهربائية واستخدامها بطريقة أكثر مرونة وكفاءة.',
      en: 'Developing electric-mobility solutions that let individuals and organisations access and use electric vehicles more flexibly and efficiently.', // TODO: review EN copy
    },
    // Same tags as Mamsa in the design (including "عقارات").
    // TODO: confirm EV Share tags
    tags: [
      { ar: 'عقارات', en: 'Real estate' }, // TODO: review EN copy
      { ar: 'تطوير', en: 'Development' }, // TODO: review EN copy
      { ar: 'استثمار', en: 'Investment' }, // TODO: review EN copy
    ],
    image: '/images/work/ev-share.png',
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

export const VISION = {
  heading: {
    ar: 'نبني اليوم برؤية تصنع فرص الغد، ونحوّل التحديات إلى نمو مستدام وأثر حقيقي.',
    en: "Building today for tomorrow's opportunities — and lasting impact.", // TODO: review EN copy
  },
  stripeQuote: {
    ar: '"أفضل الأعمال لا تكتفي بالتكيّف مع المستقبل، بل تساعد على بنائه."',
    en: '"The best businesses don\'t just adapt to the future — they help build it."', // TODO: review EN copy
  },
  pillars: [
    {
      title: { ar: 'الأعمال', en: 'Business' }, // TODO: review EN copy
      description: { ar: 'بناء مؤسسات تتجاوز الاتجاهات وتصمد أمام الزمن.', en: 'Building institutions that outlast trends and stand the test of time.' }, // TODO: review EN copy
    },
    {
      title: { ar: 'التكنولوجيا', en: 'Technology' }, // TODO: review EN copy
      description: { ar: 'توظيف الابتكار بدقة وهدف.', en: 'Applying innovation with precision and purpose.' }, // TODO: review EN copy
    },
    {
      title: { ar: 'التنقل', en: 'Mobility' }, // TODO: review EN copy
      description: { ar: 'تشكيل مستقبل حركة الناس والبضائع.', en: 'Shaping the future of how people and goods move.' }, // TODO: review EN copy
    },
    {
      title: { ar: 'الاستدامة', en: 'Sustainability' }, // TODO: review EN copy
      description: { ar: 'نمو يصنع قيمة للأجيال القادمة.', en: 'Growth that creates value for generations to come.' }, // TODO: review EN copy
    },
  ],
};

// Article pages don't exist yet, so rows are not links.
export const INSIGHTS = {
  heading: { ar: 'وجهات نظر في الأعمال والتغيير.', en: 'Perspectives on business and change.' }, // TODO: review EN copy
  articles: [
    {
      title: { ar: 'التنقل الكهربائي والفرصة السعودية', en: 'Electric mobility and the Saudi opportunity' }, // TODO: review EN copy
      category: { ar: 'تنقل', en: 'Mobility' }, // TODO: review EN copy
      year: '2024',
    },
    {
      title: { ar: 'التحول ما وراء الرقمي: ما تطلبه رؤية 2030', en: 'Beyond digital: what Vision 2030 demands of transformation' }, // TODO: review EN copy
      category: { ar: 'استراتيجية', en: 'Strategy' }, // TODO: review EN copy
      year: '2024',
    },
    {
      title: { ar: 'بناء مشاريع في بيئة ناشئة', en: 'Building ventures in an emerging ecosystem' }, // TODO: review EN copy
      category: { ar: 'بناء المشاريع', en: 'Venture building' }, // TODO: review EN copy
      year: '2023',
    },
  ] satisfies Insight[],
};

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

export function createProductOverview({ intro, whyItems, problemItems, whyBody, problemBody, areas }) {
  const whyCard = {
    id: 'why-exists',
    title: whyBody ? 'The Challenge We Identified' : 'The challenge we identified',
    ...(whyBody ? { body: whyBody } : { items: whyItems }),
  }

  const problemCard = {
    id: 'problem',
    title: problemBody ? 'Our Solution' : 'Our solution',
    ...(problemBody ? { body: problemBody } : { items: problemItems }),
  }

  return {
    id: 'product-overview',
    title: 'Product Overview',
    type: 'product-overview',
    intro,
    cards: [
      whyCard,
      problemCard,
      {
        id: 'core-areas',
        title: 'Core Product Areas',
        areas,
      },
    ],
  }
}

const area = (label, icon, description) => ({ label, icon, description })

export const stockDecisionOverview = createProductOverview({
  intro:
    'StockDecision is a comprehensive digital investment platform designed to transform how individuals research and navigate the Colombo Stock Exchange (CSE). Born out of a need to modernize the local investing landscape, the platform consolidates complex company data, advanced analytical tools, vibrant community discussions, and curated learning resources into a single, intuitive ecosystem.',
  whyBody:
    'CSE investors currently waste time navigating fragmented, complex sources for reports, updates, and dividends. Beginner investors especially struggle to interpret this dense financial information. StockDecision exists to consolidate these scattered resources into a single, structured, and beginner-friendly experience.',
  problemBody:
    'It eliminates market confusion and fragmented research by centralizing data, simplifying complex insights, and providing intuitive investment tools. By combining company reports, AI-driven analysis, visual data, and educational resources into one platform, it enables faster decision-making while streamlining portfolio tracking and investor collaboration.',
  areas: [
    area(
      'AI Analysis',
      'ai',
      'Discuss any CSE company with our AI-powered assistant.',
    ),
    area(
      'Investor Forum',
      'forum',
      'Connect with fellow CSE investors and share market insights.',
    ),
    area(
      'Dividend Calendar',
      'calendar',
      'Track upcoming payout dates, ex-dates, and yields.',
    ),
    area(
      'News & Announcements',
      'news',
      'Real-time CSE announcements and low-latency market feeds.',
    ),
    area(
      'Portfolio',
      'portfolio',
      'Aggregate your assets and track risk-adjusted performance.',
    ),
    area(
      'Single Stock View',
      'chart',
      'Centralizes key fundamentals and insights for every CSE company.',
    ),
    area(
      'Learning Hub',
      'learning',
      'Step-by-step courses from beginner to advanced investing strategies.',
    ),
    area(
      'Market Research',
      'research',
      'Comprehensive blog articles packed with detailed charts and data.',
    ),
  ],
})

export const etoolsbuddyOverview = createProductOverview({
  intro:
    'etoolsbuddy is an all-in-one SaaS platform designed for freelancers and entrepreneurs to streamline daily operations and improve productivity. The platform combines task management, time tracking, expense analytics, invoicing, and a diverse collection of financial, engineering, IT, AI, and business tools within a single workspace, enabling users to manage work, finances, and essential utilities more efficiently.',
  whyBody:
    'Freelancers and entrepreneurs waste time juggling fragmented, disconnected apps to manage tasks, finances, and invoices. This constant context-switching disrupts focus and drains productivity. The goal was to eliminate this digital clutter and replace a scattered tech stack with a single, seamless platform.',
  problemBody:
    'etoolsbuddy centralizes productivity, business operations, utilities, and AI assistance into one intuitive dashboard. Users can manage projects, track expenses, generate invoices, and access built-in tools without disrupting their workflow. This unified ecosystem bridges everyday tasks and advanced business needs, empowering users to work faster and smarter.',
  areas: [
    area(
      'Task Management',
      'goals',
      'Kanban Boards, Time Tracking, Task Scheduling, Deadline Tracking, Calendar Sync, Milestone Tracking & Journey View.',
    ),
    area(
      'Expense Management',
      'finance',
      'Income & Expense Tracking, Quick Data Entry, Monthly & Yearly Financial Summaries, Visual Charts & Reports.',
    ),
    area(
      'Invoice & Document Generation',
      'tasks',
      'Online Invoice & Quotation Generator, Salary Slip Generator, Workspace Document Integration, Personal Storage Drive.',
    ),
    area(
      'Business & Financial Utilities',
      'calendar',
      'Loan & Investment Calculator, Subnet & Wire Gauge Calculators, Resistor Color Code Calculator, QR Code Generator, BMI Calculator.',
    ),
    area(
      'AI Tools',
      'ai',
      'Text to Speech Generator, Text to Image Generator, AI Chatbot Assistants.',
    ),
    area(
      'Developer Tools & APIs',
      'tools',
      'API Showcase & Playground, JSON Validator, Text Comparison Tool.',
    ),
  ],
})

export const greetingAngelOverview = createProductOverview({
  intro:
    'Greeting Angel is a personalized gifting platform where users customize products, add messages, and create memorable gift experiences. The goal is to make thoughtful gifting feel simple, visual, and emotionally engaging.',
  whyItems: [
    'Shoppers struggle to find gifts that feel personal beyond generic cards',
    'Customization flows on many stores are confusing or limited',
    'Message and design options are often split across different steps',
    'Greeting Angel brings product choice, personalization, and checkout together',
  ],
  problemItems: [
    'Users can preview custom designs before they order.',
    'Message templates and layouts help non-designers create polished gifts.',
    'Product categories guide shoppers toward occasion-appropriate ideas.',
    'Saved drafts make it easy to return and finish a gift later.',
    'Checkout keeps personalization details attached to each item.',
    'The experience supports both quick gifts and highly custom creations.',
  ],
  areas: [
    area('Product Catalog', 'catalog'),
    area('Customizer', 'customizer'),
    area('Message Studio', 'message'),
    area('Preview', 'preview'),
    area('Occasions', 'occasions'),
    area('Cart', 'cart'),
    area('Orders', 'orders'),
    area('Inspiration', 'inspiration'),
  ],
})

export const travelSearchOverview = createProductOverview({
  intro:
    'TravelSearchAI is an AI-powered travel platform for Sri Lanka that helps travelers discover stays while empowering local hotel and villa owners. The goal is to make discovery intuitive for guests and visibility fair for hosts.',
  whyItems: [
    'Travelers compare listings across many sites with inconsistent information',
    'Local properties often lack polished presentation and discoverability',
    'Planning stays in Sri Lanka can feel fragmented for international visitors',
    'TravelSearchAI connects search, booking context, and host tools in one place',
  ],
  problemItems: [
    'Travelers discover stays through AI-guided search and filters.',
    'Listings highlight amenities, location, and availability more clearly.',
    'Hosts can manage property details from a dedicated dashboard.',
    'Smart recommendations surface relevant regions and property types.',
    'Maps and media help users evaluate places before they book.',
    'The platform supports both guest discovery and host growth.',
  ],
  areas: [
    area('AI Search', 'ai'),
    area('Listings', 'listings'),
    area('Map View', 'map'),
    area('Host Dashboard', 'host'),
    area('Bookings', 'bookings'),
    area('Reviews', 'reviews'),
    area('Regions', 'regions'),
    area('Insights', 'insights'),
  ],
})

export const wowScienceOverview = createProductOverview({
  intro:
    'WowScienceFacts is a science content platform for articles, discoveries, and educational material, with a shop for science-related products. The goal is to make learning engaging while connecting readers to curated resources.',
  whyItems: [
    'Science content online is often scattered across blogs, journals, and videos',
    'Readers want trustworthy summaries without heavy academic language',
    'Educational resources and products are rarely connected in one experience',
    'WowScienceFacts combines reading, discovery, and commerce in a clear structure',
  ],
  problemItems: [
    'Articles and latest discoveries are organized for quick browsing.',
    'Educational content is presented with readable hierarchy and visuals.',
    'Topic tags help readers follow interests across the platform.',
    'The shop links learning themes to relevant products.',
    'Newsletter and featured stories highlight timely science updates.',
    'The experience supports casual readers and curious learners alike.',
  ],
  areas: [
    area('Articles', 'articles'),
    area('Discoveries', 'discoveries'),
    area('Topics', 'topics'),
    area('Shop', 'shop'),
    area('Newsletter', 'newsletter'),
    area('Featured', 'featured'),
    area('Search', 'search'),
    area('Community', 'community'),
  ],
})

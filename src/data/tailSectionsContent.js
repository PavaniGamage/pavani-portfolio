import heroSectionImage from '../assets/HumanBrain.png'
import userDashboardVideo from '../assets/etoolsbuddy/User dashboard_UI.mp4'
import searchWithAIVideo from '../assets/etoolsbuddy/SearchWithAI_UI.mp4'
import taskManagerVideo from '../assets/etoolsbuddy/TaskManager_UI.mp4'
import expenseManagerVideo from '../assets/etoolsbuddy/ExpenseManager_UI.mp4'
import clientVideo from '../assets/etoolsbuddy/Client_UI.mp4'
import aiChat from '../assets/StockDecision/Other/AI Chat.png'
import cseNews from '../assets/StockDecision/Other/News.png'
import dividendCalendar from '../assets/StockDecision/Other/Dividend_Calendar.png'
import portfolioManagement from '../assets/StockDecision/Other/Portfolio_Management.png'
import singleStockView from '../assets/StockDecision/Other/Single stock view.png'
import stockScreener from '../assets/StockDecision/Other/Stock Screener.png'
import discussionForum from '../assets/StockDecision/Discussion Forum/DiscussionForum_version 1.1.png'
import learningHub01 from '../assets/StockDecision/LearningHub/LearningHub_01.png'
import learningHub02 from '../assets/StockDecision/LearningHub/LearningHub_02.png'
import learningHub03 from '../assets/StockDecision/LearningHub/LearningHub_03.png'
import learningHub04 from '../assets/StockDecision/LearningHub/LearningHub_04.png'
import learningHubBlog from '../assets/StockDecision/LearningHub/Blog.png'
import learningHubBooks from '../assets/StockDecision/LearningHub/Books_at_a_Glance.png'

export const projectOrder = [
  'stockdecision',
  'etoolsbuddy',
  'travelsearchai',
  'greeting-angel',
  'wowsciencefacts',
]

export function getNextProjectSlug(currentSlug) {
  const index = projectOrder.indexOf(currentSlug)
  if (index === -1 || index === projectOrder.length - 1) return null
  return projectOrder[index + 1]
}

const feature = (title, bullets, image = heroSectionImage, options = {}) => ({
  title,
  bullets,
  image,
  imageAlt: title,
  ...options,
})

const featureVideo = (title, bullets, video, options = {}) => ({
  title,
  bullets,
  video,
  mediaType: 'video',
  imageAlt: title,
  ...options,
})

export const stockDecisionKeyFeatures = {
  id: 'key-features',
  title: 'Key Features & UI Showcase',
  type: 'key-features',
  spaciousLayout: 'extra',
  mediaBorder: true,
  intro:
    'StockDecision brings together key investment tools including AI-powered stock analysis, single stock research views, portfolio tracking, dividend calendar, stock screener, and market news. The UI is designed to simplify complex financial information and provide a structured experience for CSE investors.',
  features: [
    feature('1. AI – CSE Stock Analysis Assistant', [
      'CSE-focused AI assistant for discussing stocks, market trends, and investment-related queries in a conversational format.',
      'Persistent bottom input bar allows continuous interaction.',
    ], aiChat),
    feature('2. Single Stock View', [
      'Centralized Company Hub Provides a dedicated page for each CSE company containing an Overview, Financials, Profile, and Shareholders.',
      'Market Context Integrates real-time News and user-voted Forecasts for crowdsourced price predictions.',
    ], singleStockView),
    feature('3. Portfolio Management', [
      'Track holdings, performance, and allocation in one structured dashboard.',
      'Helps investors monitor progress and review portfolio changes over time.',
    ], portfolioManagement),
    feature('4. Dividend Calendar', [
      'Calendar and table views help investors track upcoming and past dividend events.',
      'Designed to make dividend schedules easier to scan and compare across companies.',
    ], dividendCalendar),
    feature('5. Stock Screener', [
      'Filter and compare CSE stocks based on selected criteria and metrics.',
      'Helps investors discover opportunities faster across the market.',
    ], stockScreener),
    feature('6. Discussion Forum', [
      'Community discussions create space for investors to share ideas and market perspectives.',
      'Integrated within the broader investing workflow.',
    ], discussionForum),
    feature('7. CSE News', [
      'Dedicated news section surfaces company updates and market headlines in one place.',
      'Helps investors stay informed without switching between external sources.',
    ], cseNews),
  ],
}

export const stockDecisionReflection = {
  id: 'reflection',
  title: 'Reflection & Learnings',
  type: 'reflection',
  items: [
    {
      number: '01',
      title: 'Understanding the Investment Domain',
      body: 'Studied core stock market concepts and CSE workflows through educational materials, annual reports, and quarterly financial statements.',
    },
    {
      number: '02',
      title: 'Working with Financial Data',
      body: 'Contributed to validating and organizing company data by analyzing annual and quarterly reports before approval and publication.',
    },
    {
      number: '03',
      title: 'Visualizing Complex Information',
      body: 'Used charts, diagrams, and visual summaries to present financial data more effectively instead of relying solely on numerical tables.',
    },
    {
      number: '04',
      title: 'Designing Data-Heavy Interfaces',
      body: 'Learned how to structure large amounts of financial information while maintaining clarity, consistency, and ease of navigation.',
    },
    {
      number: '05',
      title: 'Improving Mobile Usability',
      body: 'Large financial tables were difficult to use on smaller screens, leading to a card-based mobile experience that improved readability and scanning.',
    },
  ],
}

export const stockDecisionCurrentStatus = {
  id: 'current-status',
  title: 'Current Status',
  type: 'current-status',
  intro:
    'StockDecision is currently in development. The first version focuses on core investing workflows such as portfolio tracking, stock analysis, and market updates. The system is designed to evolve over time based on user needs and platform growth. To deliver a seamless cross-platform experience, mobile app development is also underway to bring these powerful analytics tools directly to users on the go.',
  introEmphasis: ['mobile app'],
  copy: {
    subtitle: 'Learning Hub (Version 2.0 Feature)',
    description:
      'A structured learning experience designed to support investors at different skill levels.',
    bullets: [
      'Beginner, Intermediate, and Advanced learning paths',
      'Curated books, blogs, and educational resources',
      'Guided content for understanding investing concepts',
      'Designed to reduce the learning curve for new investors',
    ],
  },
  images: [
    { image: learningHub01, imageAlt: 'Learning Hub overview' },
    { image: learningHub02, imageAlt: 'Learning Hub learning paths' },
    { image: learningHub03, imageAlt: 'Learning Hub resources' },
    { image: learningHub04, imageAlt: 'Learning Hub guided content' },
    { image: learningHubBlog, imageAlt: 'Learning Hub blog section' },
    { image: learningHubBooks, imageAlt: 'Learning Hub books at a glance' },
  ],
}

function adaptKeyFeatures(projectName, domain) {
  return {
    id: 'key-features',
    title: 'Key Features & UI Showcase',
    type: 'key-features',
    intro: `${projectName} brings together core ${domain} tools in one structured experience. The UI is designed to simplify complex information and support clearer decision-making for users.`,
    features: [
      feature(`1. ${projectName} Dashboard`, [
        `Central hub for ${domain} workflows and daily tasks.`,
        'Clear hierarchy helps users find the most important actions quickly.',
      ]),
      feature('2. Core Feature Module', [
        'Primary workflows are organized into focused, scannable sections.',
        'Designed to reduce friction during repeat use.',
      ]),
      feature('3. Search & Discovery', [
        'Users can filter, search, and compare options more efficiently.',
        'Supports faster exploration without leaving the platform.',
      ]),
      feature('4. Insights & Recommendations', [
        'Guided suggestions help users understand what to do next.',
        'Balances automation with user control.',
      ]),
    ],
  }
}

function adaptReflection(projectName) {
  return {
    id: 'reflection',
    title: 'Reflection & Learnings',
    type: 'reflection',
    items: [
      {
        number: '01',
        title: `Understanding the ${projectName} domain`,
        body: `Studied user needs, existing tools, and domain workflows to design with more context.`,
      },
      {
        number: '02',
        title: 'Structuring complex information',
        body: 'Learned to organize dense content into clearer sections, cards, and visual hierarchy.',
      },
      {
        number: '03',
        title: 'Improving mobile usability',
        body: 'Adjusted layouts and components for smaller screens to improve readability and touch interaction.',
      },
      {
        number: '04',
        title: 'Iterating with feedback',
        body: 'Refined flows based on usability observations and stakeholder input throughout the process.',
      },
      {
        number: '05',
        title: 'Designing scalable patterns',
        body: `Created reusable UI patterns that can support future growth of ${projectName}.`,
      },
    ],
  }
}

function adaptCurrentStatus(projectName) {
  return {
    id: 'current-status',
    title: 'Current Status',
    type: 'current-status',
    intro: `${projectName} is currently in development. The first version focuses on core user workflows and a scalable foundation that can evolve based on feedback and product growth.`,
    slides: [
      {
        image: heroSectionImage,
        imageAlt: `${projectName} current preview`,
        subtitle: 'Foundation Release',
        description: `The initial release establishes core ${projectName} experiences and validates primary user journeys.`,
        bullets: [
          'Core dashboard and navigation',
          'Essential user workflows',
          'Responsive layout foundation',
          'Room for future feature expansion',
        ],
      },
      {
        image: heroSectionImage,
        imageAlt: `${projectName} mobile preview`,
        subtitle: 'Mobile Experience',
        description: 'Mobile layouts support on-the-go access to key product areas.',
        bullets: [
          'Touch-friendly components',
          'Simplified mobile navigation',
          'Readable content on small screens',
          'Consistent patterns across devices',
        ],
      },
    ],
  }
}

export const etoolsbuddyKeyFeatures = {
  id: 'key-features',
  title: 'Key Features & UI Showcase',
  type: 'key-features',
  spaciousLayout: true,
  compactTop: true,
  intro:
    'etoolsbuddy brings together productivity, finance, and business operations in one connected workspace. The UI is designed to reduce context-switching and help freelancers and entrepreneurs manage daily work from a single platform.',
  features: [
    featureVideo('1. User Dashboard', [
      'Centralized hub for managing activities, tracking progress, and accessing key platform features.',
      'Quick links, task calendar, and categorized navigation improve discoverability across the growing tool suite.',
    ], userDashboardVideo),
    featureVideo('2. Search with AI', [
      'Primary interaction layer for finding tools, running commands, and completing tasks through conversational AI.',
      'Dedicated workflows and shortcuts help users move from search to action with less navigation effort.',
    ], searchWithAIVideo),
    featureVideo('3. Task Manager', [
      'Kanban boards, scheduling, deadline tracking, and calendar sync support end-to-end task planning.',
      'Designed to keep planning and execution connected within the broader productivity workflow.',
    ], taskManagerVideo),
    featureVideo('4. Expense Manager', [
      'Track income and expenses with quick data entry and structured financial summaries.',
      'Monthly and yearly charts help freelancers monitor business performance at a glance.',
    ], expenseManagerVideo),
    featureVideo('5. Employees, Subcontractors & Clients', [
      'Manage collaborators and client relationships within the same business workspace.',
      'Flexible records support different collaborator types as teams and client networks grow.',
    ], clientVideo),
  ],
}
export const greetingAngelKeyFeatures = adaptKeyFeatures('Greeting Angel', 'gifting')
export const travelSearchKeyFeatures = adaptKeyFeatures('TravelSearchAI', 'travel')
export const wowScienceKeyFeatures = adaptKeyFeatures('WowScienceFacts', 'science')

export const etoolsbuddyReflection = {
  id: 'reflection',
  title: 'Reflection & Learnings',
  type: 'reflection',
  items: [
    {
      number: '01',
      title: 'Understanding the etoolsbuddy domain',
      body: 'Studied user needs, existing tools, and domain workflows to design with more context.',
    },
    {
      number: '02',
      title: 'Structuring complex information',
      body: 'Learned to organize dense content into clearer sections, cards, and visual hierarchy.',
    },
    {
      number: '03',
      title: 'Iterating with feedback',
      body: 'Refined flows based on usability observations and stakeholder input throughout the process.',
    },
  ],
}
export const greetingAngelReflection = adaptReflection('Greeting Angel')
export const travelSearchReflection = adaptReflection('TravelSearchAI')
export const wowScienceReflection = adaptReflection('WowScienceFacts')

export const etoolsbuddyCurrentStatus = {
  id: 'current-status',
  title: 'Current Status',
  type: 'current-status',
  intro:
    'etoolsbuddy is actively in development, evolving continuously based on user insights and strategic product growth.',
}
export const greetingAngelCurrentStatus = adaptCurrentStatus('Greeting Angel')
export const travelSearchCurrentStatus = adaptCurrentStatus('TravelSearchAI')
export const wowScienceCurrentStatus = adaptCurrentStatus('WowScienceFacts')

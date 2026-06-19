import heroSectionImage from '../assets/HumanBrain.png'
import stockDecisionLandingWireframe from '../assets/StockDecision/Landing page.png'
import stockDecisionSingleStockWireframe from '../assets/StockDecision/Single Stock View.png'
import landingV10 from '../assets/StockDecision/Landing Page/Landing page Version 1.0.svg'
import landingV11 from '../assets/StockDecision/Landing Page/Landing page Version 1.1.svg'
import singleStockV10 from '../assets/StockDecision/SingleStockView/Single Stock View  Version 1.0.svg'
import singleStockV11 from '../assets/StockDecision/SingleStockView/Single stock view Version 1.1.svg'
import forumV10 from '../assets/StockDecision/Discussion Forum/Discussion Forum Version 1.0.svg'
import forumV11 from '../assets/StockDecision/Discussion Forum/Discuusion forum Version 1.1.svg'
import etoolsbuddyDashboardWireframe from '../assets/etoolsbuddy/User dashboard.png'
import etoolsbuddySearchWithAIWireframe from '../assets/etoolsbuddy/Search with AI.png'
import etoolsbuddyStructure from '../assets/etoolsbuddy/etoolsbuddy structure.svg'

const evolutionStages = () => [
  { label: 'Wireframe', image: heroSectionImage },
  { label: 'Version 1.0', image: heroSectionImage },
  { label: 'Version 1.1', image: heroSectionImage },
]

const evolutionRow = (title) => ({
  title,
  stages: evolutionStages(),
})

export function createDesignApproachSection({ intro, parts }) {
  return {
    id: 'design-approach',
    title: 'Design Approach',
    type: 'design-approach',
    intro,
    parts,
    placeholderImage: heroSectionImage,
  }
}

export const stockDecisionDesignApproach = createDesignApproachSection({
  intro:
    'The design approach focused on creating a clear and intuitive investment experience by understanding user needs, defining key challenges, exploring wireframes, and continuously refining the product through feedback and iteration.',
  parts: [
    {
      number: '01',
      title: 'Discover User Behavior',
      layout: 'discover',
      cards: [
        {
          id: 'research',
          heading: 'Research Sources',
          icon: 'research',
          sources: [
            {
              text: 'Reviewed existing educational materials about the Colombo Stock Exchange.',
              icon: 'book',
            },
            {
              text: 'Studied Sri Lankan investor communities to find common user pain points.',
              icon: 'users',
            },
            {
              text: 'Evaluated local broker websites and collected direct user insights.',
              icon: 'globe',
            },
            {
              text: 'Researched international stock market applications for global design standards.',
              icon: 'chart',
            },
            {
              text: "Analyzed stakeholder requirements to align the product with the company's vision.",
              icon: 'badge',
            },
          ],
        },
        {
          id: 'observed',
          heading: 'What I observed',
          icon: 'eye',
          observations: [
            'Important updates spread across channels',
            'Financial data feels difficult for beginners',
            'Lack of one guided experience',
            'Comparing opportunities takes time',
            'Multiple disconnected research sources',
          ],
        },
      ],
    },
    {
      number: '02',
      title: 'Define Core Problems',
      layout: 'define-problems',
      image: heroSectionImage,
      imageAlt: 'Problem to solution mapping',
      problems: [
        {
          title: 'Fragmented research journey',
          detail: 'Investors move between reports, news, and discussions without one guided flow.',
        },
        {
          title: 'Hard-to-read financial data',
          detail: 'Key metrics and reports feel dense, especially for newer investors.',
        },
        {
          title: 'Beginner uncertainty',
          detail: 'Users need clearer guidance before they feel confident exploring stocks.',
        },
        {
          title: 'Slow stock comparison',
          detail: 'Comparing opportunities across companies takes too many steps.',
        },
      ],
      mappings: [
        { from: 'Fragmented experience', to: 'Centralized investing workflow' },
        { from: 'Complex information', to: 'Simplified decision support' },
        { from: 'Beginner uncertainty', to: 'Clearer guidance before exploring stocks' },
        { from: 'Slow stock comparison', to: 'Faster comparison across companies' },
      ],
    },
    {
      number: '03',
      title: 'Design Principles',
      layout: 'principles',
      principles: [
        {
          title: 'Clear and accessible information',
          body: 'Present financial data in a way that helps both beginners and experienced investors understand what matters.',
        },
        {
          title: 'Centralized investor workflow',
          body: 'Reduce switching between tools by bringing research, updates, and analysis into one structured experience.',
        },
        {
          title: 'Support for different investor levels',
          body: 'Balance simple entry points with deeper analysis for users who need more detail.',
        },
        {
          title: 'Actionable insights for decision-making',
          body: 'Help users move from reading data to understanding opportunities with confidence.',
        },
      ],
    },
    {
      number: '04',
      title: 'Structure & Wireframes',
      layout: 'wireframes',
      wireframes: [
        {
          label: 'Home',
          image: stockDecisionLandingWireframe,
          imageAlt: 'StockDecision home wireframe',
        },
        {
          label: 'Single Stock View',
          image: stockDecisionSingleStockWireframe,
          imageAlt: 'StockDecision single stock wireframe',
        },
      ],
    },
    {
      number: '05',
      title: 'Feedback',
      layout: 'feedback-table',
      rows: [
        {
          feedback: 'News and announcements were difficult to distinguish when presented together.',
          decision: 'Separated News and Announcements into dedicated sections.',
          outcome: 'Improved clarity and information discovery.',
        },
        {
          feedback: 'Dividend information felt bulky in a table-only layout.',
          decision: 'Added both Calendar View and Table View.',
          outcome: 'Made dividend schedules easier to visualize and review.',
        },
        {
          feedback: 'Noticed investors increasingly accessing market information on mobile devices.',
          decision: 'Decided to design a dedicated mobile app experience.',
          outcome: 'Planned feature rollouts to improve accessibility and cross-device usability.',
        },
      ],
    },
    {
      number: '06',
      title: 'Iteration & Refinement',
      layout: 'iteration',
      versions: [
        {
          title: 'Version 1.0 — Foundation Release',
          description:
            'As a startup product, Version 1.0 focused on building a practical and developer-friendly foundation. The goal was to establish the core investor workflows, organize information clearly, and validate key features before investing in more advanced functionality and refinements.',
          listTitle: 'Core Features',
          items: [
            'Stock Screener',
            'Single Stock View',
            'Dividend Calendar',
            'Discussion Forum',
            'Company News & Announcements',
          ],
        },
        {
          title: 'Version 1.1 — Product Evolution',
          description:
            'Version 1.1 expands StockDecision beyond research and analysis by introducing new tools that support portfolio management, investor discussions, and smarter decision-making.',
          listTitle: 'New Features & Enhancements',
          items: [
            'AI-Powered Stock Analysis',
            'Dashboard',
            'Portfolio Management',
            'Community Discussions within Single Stock Pages',
            'Technical Analysis',
            'Price Alerts & Notifications',
            'Favorites & Watchlist',
            'Enhanced Key Metrics',
            'Improved Discussion Forum Experience',
          ],
        },
      ],
      comparisons: [
        {
          title: 'Landing Page',
          version10: landingV10,
          version11: landingV11,
          version10Alt: 'Landing page Version 1.0',
          version11Alt: 'Landing page Version 1.1',
        },
        {
          title: 'Single Stock View',
          version10: singleStockV10,
          version11: singleStockV11,
          version10Alt: 'Single Stock View Version 1.0',
          version11Alt: 'Single Stock View Version 1.1',
        },
        {
          title: 'Discussion Forum',
          version10: forumV10,
          version11: forumV11,
          version10Alt: 'Discussion Forum Version 1.0',
          version11Alt: 'Discussion Forum Version 1.1',
        },
      ],
    },
  ],
})

function adaptDesignApproach(projectName, domain) {
  return createDesignApproachSection({
    intro: `The design approach for ${projectName} focused on transforming a growing set of standalone tools into a unified, workflow-driven productivity system. I prioritized clarity, connected experiences, and a scalable structure to improve usability, reduce friction, and create a more cohesive product experience across the platform.`,
    parts: [
      {
        number: '01',
        title: 'Discover User Behavior',
        layout: 'discover',
        cards: [
          {
            id: 'research',
            heading: 'Research Sources',
            icon: 'research',
            sources: [
              'etoolsbuddy usage data and navigation analytics',
              'Early user feedback and informal interviews',
              'Competitor analysis of productivity platforms',
              'Observation of freelancer and small business workflows',
              'Self-review of structure and usability during feature growth',
            ],
          },
          {
            id: 'observed',
            heading: 'What I observed',
            icon: 'eye',
            observations: [
              'Users were unclear whether eToolsBuddy was a tool suite or a unified productivity platform',
              'Frequent tool switching caused a fragmented experience',
              'Key features were hard to find due to weak structure and hierarchy',
              'Tools like tasks, finance, and utilities felt disconnected from each other',
              'Navigation didn’t scale as features grew, slowing access to workflows',
            ],
          },
        ],
      },
      {
        number: '02',
        title: 'Define Core Problems',
        layout: 'define-problems',
        image: heroSectionImage,
        imageAlt: `${projectName} problem mapping`,
        problems: [
          {
            title: 'Fragmented user journey',
            detail: 'Key tasks are spread across multiple screens and tools, disrupting flow.',
          },
          {
            title: 'Information overload',
            detail: 'Users struggle to quickly identify relevant actions and priorities.',
          },
          {
            title: 'Low confidence for new users',
            detail: 'New users need clearer structure and guidance to get started.',
          },
          {
            title: 'Slow task completion',
            detail: 'Common workflows require unnecessary steps, reducing efficiency.',
          },
        ],
        mappings: [
          { from: 'Fragmented experience', to: 'Unified product workflow' },
          { from: 'Complex information', to: 'Simplified decision support' },
          { from: 'Low confidence', to: 'Clearer structure and onboarding guidance' },
          { from: 'Slow task completion', to: 'Streamlined workflows with fewer steps' },
        ],
      },
      {
        number: '03',
        title: 'Design Principles',
        layout: 'principles',
        principles: [
          {
            title: 'Clarity over complexity',
            body: 'Prioritize simple, readable layouts and clear actions before introducing advanced functionality.',
          },
          {
            title: 'Consistency across flows',
            body: 'Use shared patterns and interactions to create a predictable and familiar experience throughout the platform.',
          },
          {
            title: 'Flexible for different usage needs',
            body: 'Design to support both quick, simple tasks and deeper, more detailed workflows without bias toward user expertise levels.',
          },
          {
            title: 'Iterate with real feedback',
            body: 'Continuously refine the experience based on internal testing, observations, and evolving product needs.',
          },
        ],
      },
      {
        number: '04',
        title: 'Structure & Wireframes',
        layout: 'wireframes',
        note: 'To support the transition from a tool suite to a productivity platform, I redesigned the core structure of etoolsbuddy around connected workflows. The Search with AI feature became the primary interaction layer, helping users access tools and complete tasks more efficiently. The Dashboard was redesigned as a centralized hub for managing activities, tracking progress, and accessing key features. To support the growing platform, a categorized navigation system was introduced to improve discoverability and make it easier for users to find relevant tools and workflows.',
        noteEmphasis: 'Scroll to view the full wireframe designs.',
        wireframes: [
          {
            label: 'User Dashboard',
            image: etoolsbuddyDashboardWireframe,
            imageAlt: 'etoolsbuddy User Dashboard wireframe',
          },
          {
            label: 'Search with AI View',
            image: etoolsbuddySearchWithAIWireframe,
            imageAlt: 'etoolsbuddy Search with AI wireframe',
          },
        ],
      },
      {
        number: '05',
        title: 'Feedback',
        layout: 'feedback-table',
        rows: [
          {
            feedback: 'Users needed faster access to frequently used tools from the dashboard.',
            decision: 'Added a dedicated Quick Links to Tools section within the dashboard.',
            outcome: 'Reduced navigation effort and improved tool discoverability.',
          },
          {
            feedback: 'The AI Search experience lacked clear pathways to perform common actions.',
            decision: 'Introduced dedicated commands and workflows (e.g., invoice creation shortcuts and tool-specific actions).',
            outcome: 'Improved task completion speed and usability of AI-assisted workflows.',
          },
          {
            feedback: 'The Calendar felt disconnected from task management.',
            decision: 'Redesigned it as a Task Calendar with task creation and management capabilities.',
            outcome: 'Created a more integrated planning and productivity experience.',
          },
          {
            feedback: 'The Employees, Subcontractors & Clients module lacked flexibility.',
            decision: 'Expanded the feature to better support employee and subcontractor management.',
            outcome: 'Improved usability for businesses managing different types of collaborators.',
          },
        ],
      },
      {
        number: '06',
        title: 'Iteration & Refinement',
        layout: 'iteration',
        versions: [
          {
            title: 'Version 1.0 — Foundation Release',
            description: `The first release focused on validating the core ${domain} workflows and establishing a scalable UI foundation for future modules.`,
            listTitle: 'Core Features',
            items: [
              'Primary dashboard',
              'Core user workflow',
              'Essential settings',
              'Search and filtering',
              'Account management',
            ],
          },
          {
            title: 'Version 1.2 — Product Evolution',
            description: `Later iterations expanded ${projectName} with smarter tools, improved navigation, and features shaped by user feedback.`,
            listTitle: 'New Features & Enhancements',
            items: [
              'Enhanced dashboard insights',
              'Improved mobile experience',
              'Expanded content modules',
              'Better notification patterns',
              'Refined visual hierarchy',
              'Performance and usability improvements',
            ],
          },
        ],
       
        initialEvolutionCount: 2,
        evolution: [
          evolutionRow('1. Hero Section'),
          evolutionRow('2. Market Today'),
          evolutionRow('3. Single Stock View'),
          evolutionRow('4. Key Metrics'),
          evolutionRow('5. Financial'),
          evolutionRow('6. Discussion Forum'),
        ],
        galleryTitle: 'Other Version 1.1 updates',
        gallery: [
          { label: 'Feature Module A', image: heroSectionImage },
          { label: 'Feature Module B', image: heroSectionImage },
          { label: 'Dashboard', image: heroSectionImage },
          { label: 'Settings', image: heroSectionImage },
          { label: 'Mobile View', image: heroSectionImage },
          { label: 'Reports', image: heroSectionImage },
        ],
      },
    ],
  })
}

export const etoolsbuddyDesignApproach = (() => {
  const approach = adaptDesignApproach('etoolsbuddy', 'productivity')
  const discoverPart = approach.parts.find((part) => part.layout === 'discover')

  if (discoverPart) {
    const researchCard = discoverPart.cards.find((card) => card.id === 'research')
    const observedCard = discoverPart.cards.find((card) => card.id === 'observed')

    if (researchCard?.sources) {
      researchCard.sources = researchCard.sources.slice(1)
    }

    if (observedCard?.observations) {
      observedCard.observations = observedCard.observations.slice(1)
    }
  }

  const wireframesPart = approach.parts.find((part) => part.layout === 'wireframes')
  if (wireframesPart) {
    delete wireframesPart.noteEmphasis
    wireframesPart.compactFrame = true
    wireframesPart.narrowNote = true
    wireframesPart.prominentStructure = true
    wireframesPart.structureNote =
      'The platform features a bottom-anchored, persistent AI navigation bar that serves as a universal command center. By unifying core tools, administrative tasks become completely contextual, such as automatically prompting and generating an invoice draft the moment a user marks a task as completed on the Kanban board.'
    wireframesPart.staticWireframes = [
      {
        image: etoolsbuddyStructure,
        imageAlt: 'etoolsbuddy platform structure overview',
      },
    ]
  }

  const iterationPart = approach.parts.find((part) => part.layout === 'iteration')
  if (iterationPart) {
    delete iterationPart.gallery
    delete iterationPart.galleryTitle
    delete iterationPart.evolution
    delete iterationPart.comparisons
    delete iterationPart.initialEvolutionCount

    iterationPart.versions = [
      {
        variant: 'foundation',
        title: 'The Initial Concept (Isolated Tool Suite)',
        description:
          'Initially, the platform functioned purely as a multi-category utility directory. While functionally diverse, it required heavy manual data entry, and users had to navigate distinct menus to use individual tools.',
        items: [
          'Financial Tools: Invoice & Quotation Generator, Loan & Investment Calculator, Salary Slip Generator',
          'Engineering Utilities: Subnet Calculator, Resistor Color Code Calculator, Wire Gauge Calculator',
          'Health & IT Tools: BMI Calculator, QR Code Generator, Text Comparison Tool, JSON Validator',
          'Early AI Components: Standalone Text-to-Speech, Text-to-Image, and a basic chatbot',
        ],
      },
      {
        variant: 'evolution',
        title: 'The Evolution: Smart Workspace',
        description:
          'To eliminate friction, the platform evolved into a unified workspace where native management tools and a central AI ecosystem automate manual tasks.',
        listTitle: 'Key Enhancements & Automation Upgrades',
        items: [
          'From Tools to Workspaces: Integrated a Kanban task manager, expense tracker, achievement hub, a central dashboard, and collaborative spaces for clients, subcontractors, and employees.',
          {
            text: 'Automated Cross-Tool Workflows: Connected project tracking directly to utility actions.',
            italic:
              'Example: Moving a task to "Done" automatically triggers a draft invoice using tracked log data.',
          },
          'Contextual AI Command Center: A bottom-anchored AI assistant handles document generation (invoices, slips, etc.) instantly via chat commands.',
        ],
      },
    ]
  }

  return approach
})()
export const greetingAngelDesignApproach = adaptDesignApproach(
  'Greeting Angel',
  'gifting',
)
export const travelSearchDesignApproach = adaptDesignApproach(
  'TravelSearchAI',
  'travel discovery',
)
export const wowScienceDesignApproach = adaptDesignApproach(
  'WowScienceFacts',
  'science content',
)

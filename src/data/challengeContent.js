export function createChallengeSection({ intro, cards }) {
  return {
    id: 'the-challenge',
    title: 'The Challenge',
    type: 'the-challenge',
    intro,
    cards,
  }
}

const card = (number, title, items, userConcern, icon) => ({
  number,
  title,
  items,
  userConcern,
  icon,
})

export const stockDecisionChallenge = createChallengeSection({
  intro:
    'Designing StockDecision introduced key UX challenges around investor trust, simplifying complex financial information, and creating an experience that supports both beginner and experienced CSE investors.',
  cards: [
    card(
      '01',
      'Building trust in digital investment platforms',
      [
        'Many Sri Lankan investors rely heavily on brokers, social media, or personal recommendations. To succeed, a new digital platform must first earn user trust.',
      ],
      'Can I trust this data?',
      'shield',
    ),
    card(
      '02',
      'Making financial information easier to understand',
      [
        'Financial statements, company reports, and market announcements are often too complex for beginners. The UI needs to make data clear and accessible without losing critical details.',
      ],
      'Which numbers matter most?',
      'chart',
    ),
    card(
      '03',
      'Managing scattered investment research',
      [
        'Investors constantly jump between fragmented data sources, news feeds, and different discussion spaces. Bringing everything into one hub requires clean, logical organization.',
      ],
      'Am I missing important updates?',
      'network',
    ),
    card(
      '04',
      'Supporting both beginner and experienced investors',
      [
        'The platform must cater to diverse user needs. Beginners require guided learning and simpler explanations, while seasoned pros demand deep analytical tools and fast access to raw data.',
      ],
      'Is this easy enough to understand?',
      'users',
    ),
    card(
      '05',
      'Helping users stay updated with market activity',
      [
        'CSE market updates, corporate announcements, and dividend schedules move quickly. The challenge was ensuring critical, time-sensitive information is easy to track and notice.',
      ],
      'When is the next dividend date?',
      'updates',
    ),
    card(
      '06',
      'Creating confidence during investment decisions',
      [
        'Investing naturally involves financial uncertainty. The UI needed to empower users with smart insights and learning resources while ensuring they always feel in control of their final decisions.'
      ],
      'Am I understanding the company correctly?',
      'confidence',
    ),
  ],
})

export const etoolsbuddyChallenge = createChallengeSection({
  intro:
    'etoolsbuddy began as a collection of standalone utility tools that expanded over time. As the platform evolved, I redesigned the experience to transform it from a growing tool suite into a cohesive product with a clearer structure, intuitive navigation, and a stronger sense of purpose.',
  cards: [
    card(
      '01',
      'Creating a clear product vision',
      [
        'etoolsbuddy started as a fragmented collection of standalone utilities with no unified direction. The redesign establishes a cohesive identity, positioning the platform as a complete productivity ecosystem.',
      ],
      'Why should I use this instead of individual tools?',
    ),
    card(
      '02',
      'Connecting isolated tools into meaningful workflows',
      [
        'Tools like invoicing, expense tracking, and utilities existed independently. The redesign connects these features into logical, natural workflows so users don\'t treat each tool as a separate product.',
      ],
      'How do these tools work together?',
    ),
    card(
      '03',
      'Improving discoverability as the platform grew',
      [
        'As the tool library expanded, navigation became increasingly complex. The redesign introduces a scalable structure that helps users instantly find relevant features and easily figure out where to start.',
      ],
      'Can I find what I need quickly?',
    ),
  ],
})

export const greetingAngelChallenge = createChallengeSection({
  intro:
    'Designing Greeting Angel meant solving for emotional gifting moments, flexible customization, and checkout flows that still feel personal under time pressure.',
  cards: [
    card(
      '01',
      'Making personalization feel special, not complicated',
      [
        'Gift customization can quickly become overwhelming with too many options on one screen.',
        'The flow needed to guide users step by step while preserving creative freedom.',
      ],
      'Will this look good when printed?',
    ),
    card(
      '02',
      'Balancing speed and sentiment',
      [
        'Many shoppers buy gifts close to an event date and need fast decisions.',
        'Templates and previews had to reduce anxiety without feeling generic.',
      ],
      'Can I finish this in time?',
    ),
    card(
      '03',
      'Helping users choose the right product',
      [
        'Large catalogs can cause choice paralysis, especially for occasion-based shopping.',
        'Clear categories and curated picks were needed to narrow options early.',
      ],
      'Which product fits this person?',
    ),
    card(
      '04',
      'Previewing emotional messages clearly',
      [
        'Custom text and layouts are hard to judge from small thumbnails alone.',
        'Readable previews were essential before users commit to an order.',
      ],
      'Will the message read well?',
    ),
    card(
      '05',
      'Supporting mobile gifting behavior',
      [
        'A meaningful share of users browse and customize from phones.',
        'Touch-friendly controls and responsive previews were critical.',
      ],
      'Can I do this on my phone?',
    ),
    card(
      '06',
      'Building trust before checkout',
      [
        'Personalized products are harder to return mentally, even when policies allow it.',
        'Transparent pricing, delivery expectations, and proof previews built confidence.',
      ],
      'What will they actually receive?',
    ),
  ],
})

export const travelSearchChallenge = createChallengeSection({
  intro:
    'Designing TravelSearchAI required balancing traveler discovery, local host needs, and AI recommendations that feel helpful rather than opaque in a regional travel context.',
  cards: [
    card(
      '01',
      'Earning trust for local stays',
      [
        'Travelers may hesitate when comparing lesser-known villas and boutique hotels online.',
        'Listings needed strong photos, clear policies, and credible host information.',
      ],
      'Is this place really as shown?',
    ),
    card(
      '02',
      'Simplifying search across regions',
      [
        'Sri Lanka offers diverse regions with different travel styles and stay types.',
        'Filters and maps had to help users orient quickly without endless scrolling.',
      ],
      'Where should we stay?',
    ),
    card(
      '03',
      'Supporting hosts with limited digital tools',
      [
        'Many property owners are not full-time hospitality operators.',
        'Host dashboards needed plain language and forgiving editing flows.',
      ],
      'Can I update this myself?',
    ),
    card(
      '04',
      'Making AI recommendations explainable',
      [
        'Users want to know why a stay is suggested, not just that an algorithm chose it.',
        'Context labels and comparison cues helped recommendations feel transparent.',
      ],
      'Why is this recommended?',
    ),
    card(
      '05',
      'Mobile planning while traveling',
      [
        'Travelers often search on the move with uneven connectivity and short attention spans.',
        'Key actions like saving, comparing, and contacting hosts had to stay visible.',
      ],
      'Can I book this quickly?',
    ),
    card(
      '06',
      'Highlighting availability and pricing clearly',
      [
        'Hidden fees or unclear calendars create frustration late in the booking journey.',
        'Pricing and date states needed to be obvious before users invest time.',
      ],
      'Is it available on our dates?',
    ),
  ],
})

export const wowScienceChallenge = createChallengeSection({
  intro:
    'Designing WowScienceFacts meant organizing dense science content for curious readers while connecting articles, discovery feeds, and shop items without breaking the learning flow.',
  cards: [
    card(
      '01',
      'Making science content approachable',
      [
        'Topics can become intimidating when jargon appears too early in an article.',
        'Readable hierarchy and plain summaries helped wider audiences stay engaged.',
      ],
      'Is this too advanced for me?',
    ),
    card(
      '02',
      'Keeping discovery fresh and credible',
      [
        'Readers want timely discoveries without sensational headlines that erode trust.',
        'Featured stories and sources needed clear labeling and consistent tone.',
      ],
      'Can I trust this summary?',
    ),
    card(
      '03',
      'Organizing topics across many themes',
      [
        'Science spans physics, biology, space, health, and more with different reader interests.',
        'Topic navigation had to support browsing without overwhelming the homepage.',
      ],
      'Where should I explore next?',
    ),
    card(
      '04',
      'Connecting reading to the shop naturally',
      [
        'Commerce can feel disruptive if product cards appear unrelated to content.',
        'The shop needed thematic links to articles and learning paths.',
      ],
      'Why is this product here?',
    ),
    card(
      '05',
      'Supporting repeat visits and newsletters',
      [
        'Educational platforms grow when readers know what is new since their last visit.',
        'Updates, newsletters, and saved topics encouraged return engagement.',
      ],
      'What did I miss this week?',
    ),
    card(
      '06',
      'Designing for mobile reading sessions',
      [
        'Many users consume short articles on phones during commutes or breaks.',
        'Typography, spacing, and media loading were tuned for smaller screens.',
      ],
      'Can I read this comfortably?',
    ),
  ],
})

import heroSectionImage from '../assets/HumanBrain.png'
import stockDecisionTopImage from '../assets/StockDecision/StockDecision_TopImage.svg'
import etoolsbuddyTopImage from '../assets/etoolsbuddy/etoolsbuddy_TopImage.svg'
import {
  etoolsbuddyChallenge,
  greetingAngelChallenge,
  stockDecisionChallenge,
  travelSearchChallenge,
  wowScienceChallenge,
} from './challengeContent'
import {
  etoolsbuddyDesignApproach,
  greetingAngelDesignApproach,
  stockDecisionDesignApproach,
  travelSearchDesignApproach,
  wowScienceDesignApproach,
} from './designApproachContent'
import {
  etoolsbuddyOverview,
  greetingAngelOverview,
  stockDecisionOverview,
  travelSearchOverview,
  wowScienceOverview,
} from './productOverviewContent'
import {
  etoolsbuddyCurrentStatus,
  etoolsbuddyKeyFeatures,
  etoolsbuddyReflection,
  greetingAngelCurrentStatus,
  greetingAngelKeyFeatures,
  greetingAngelReflection,
  stockDecisionCurrentStatus,
  stockDecisionKeyFeatures,
  stockDecisionReflection,
  travelSearchCurrentStatus,
  travelSearchKeyFeatures,
  travelSearchReflection,
  wowScienceCurrentStatus,
  wowScienceKeyFeatures,
  wowScienceReflection,
} from './tailSectionsContent'

const buildSections = (overview, challenge, designApproach, keyFeatures, reflection, currentStatus) => [
  overview,
  challenge,
  designApproach,
  keyFeatures,
  reflection,
  currentStatus,
]

const caseStudyMeta = {
  role: 'UI/UX Designer',
  timeline: '2024 – Present',
  status: 'Active Evolution',
}

export const caseStudies = {
  stockdecision: {
    slug: 'stockdecision',
    title: 'StockDecision',
    year: '2025',
    heroImage: stockDecisionTopImage,
    heroAlt: 'StockDecision case study hero',
    meta: { ...caseStudyMeta, platform: 'Web App, Mobile App' },
    sections: buildSections(
      stockDecisionOverview,
      stockDecisionChallenge,
      stockDecisionDesignApproach,
      stockDecisionKeyFeatures,
      stockDecisionReflection,
      stockDecisionCurrentStatus,
    ),
  },
  etoolsbuddy: {
    slug: 'etoolsbuddy',
    title: 'etoolsbuddy',
    year: '2025',
    heroImage: etoolsbuddyTopImage,
    heroAlt: 'etoolsbuddy case study hero',
    meta: {
      ...caseStudyMeta,
      role: 'UI/UX Designer, Frontend Developer',
      platform: 'Web App',
    },
    sections: buildSections(
      etoolsbuddyOverview,
      etoolsbuddyChallenge,
      etoolsbuddyDesignApproach,
      etoolsbuddyKeyFeatures,
      etoolsbuddyReflection,
      etoolsbuddyCurrentStatus,
    ),
  },
  'greeting-angel': {
    slug: 'greeting-angel',
    title: 'Greeting Angel',
    year: '2025',
    heroImage: heroSectionImage,
    heroAlt: 'Greeting Angel hero',
    meta: { ...caseStudyMeta, platform: 'Web & Mobile App' },
    sections: buildSections(
      greetingAngelOverview,
      greetingAngelChallenge,
      greetingAngelDesignApproach,
      greetingAngelKeyFeatures,
      greetingAngelReflection,
      greetingAngelCurrentStatus,
    ),
  },
  travelsearchai: {
    slug: 'travelsearchai',
    title: 'TravelSearchAI',
    year: '2025',
    heroImage: heroSectionImage,
    heroAlt: 'TravelSearchAI hero',
    meta: { ...caseStudyMeta, platform: 'Web & Mobile App' },
    sections: buildSections(
      travelSearchOverview,
      travelSearchChallenge,
      travelSearchDesignApproach,
      travelSearchKeyFeatures,
      travelSearchReflection,
      travelSearchCurrentStatus,
    ),
  },
  wowsciencefacts: {
    slug: 'wowsciencefacts',
    title: 'WowScienceFacts',
    year: '2025',
    heroImage: heroSectionImage,
    heroAlt: 'WowScienceFacts hero',
    meta: { ...caseStudyMeta, platform: 'Web App' },
    sections: buildSections(
      wowScienceOverview,
      wowScienceChallenge,
      wowScienceDesignApproach,
      wowScienceKeyFeatures,
      wowScienceReflection,
      wowScienceCurrentStatus,
    ),
  },
}

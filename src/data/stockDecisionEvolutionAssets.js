import heroWireframe from '../assets/StockDecision/Home/HeroSection_wireframe.png'
import heroV10 from '../assets/StockDecision/Home/HeroSection_version 1.0.png'
import heroV11 from '../assets/StockDecision/Home/HeroSection_version 1.1.png'

import marketWireframe from '../assets/StockDecision/Market_Today/MarketToday_wireframe.png'
import marketV10 from '../assets/StockDecision/Market_Today/MarketToday_version 1.0.png'
import marketV11 from '../assets/StockDecision/Market_Today/MarketToday_version 1.1.png'

import singleStockWireframe from '../assets/StockDecision/SingleStockView/SingleStockView_wireframe.png'
import singleStockV10 from '../assets/StockDecision/SingleStockView/SingleStockView_version 1.0.png'
import singleStockV11 from '../assets/StockDecision/SingleStockView/SingleStockView_version 1.1.png'

import keyMetricsWireframe from '../assets/StockDecision/Key Metrics/Key Metrics_wireframe.png'
import keyMetricsV10 from '../assets/StockDecision/Key Metrics/Key Metrics_version 1.0.png'
import keyMetricsV11 from '../assets/StockDecision/Key Metrics/Key Metrics_version 1.1.png'

import financialWireframe from '../assets/StockDecision/Financial/Financial_wireframe.png'
import financialV10 from '../assets/StockDecision/Financial/Financial_version 1.0.png'
import financialV11 from '../assets/StockDecision/Financial/Financial_version 1.1.png'

import forumWireframe from '../assets/StockDecision/Discussion Forum/DiscussionForum_wireframe.png'
import forumV10 from '../assets/StockDecision/Discussion Forum/DiscussionForum_version 1.0.png'
import forumV11 from '../assets/StockDecision/Discussion Forum/DiscussionForum_version 1.1.png'

export function createEvolutionRow(title, wireframe, version10, version11) {
  return {
    title,
    stages: [
      { label: 'Wireframe', image: wireframe },
      { label: 'Version 1.0', image: version10 },
      { label: 'Version 1.1', image: version11 },
    ],
  }
}

export const stockDecisionEvolutionRows = [
  createEvolutionRow('1. Hero Section', heroWireframe, heroV10, heroV11),
  createEvolutionRow('2. Market Today', marketWireframe, marketV10, marketV11),
  createEvolutionRow('3. Single Stock View', singleStockWireframe, singleStockV10, singleStockV11),
  createEvolutionRow('4. Key Metrics', keyMetricsWireframe, keyMetricsV10, keyMetricsV11),
  createEvolutionRow('5. Financial', financialWireframe, financialV10, financialV11),
  createEvolutionRow('6. Discussion Forum', forumWireframe, forumV10, forumV11),
]

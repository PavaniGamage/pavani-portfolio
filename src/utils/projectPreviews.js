import etoolsbuddyPreview1 from '../assets/etoolsbuddy_Preview_1.svg'
import etoolsbuddyPreview2 from '../assets/etoolsbuddy_Preview_2.svg'
import etoolsbuddyPreview3 from '../assets/etoolsbuddy_Preview_3.svg'
import etoolsbuddyPreview4 from '../assets/etoolsbuddy_Preview_4.svg'
import etoolsbuddyPreview5 from '../assets/etoolsbuddy_Preview_5.svg'
import etoolsbuddyPreview6 from '../assets/etoolsbuddy_Preview_6.svg'
import etoolsbuddyPreview7 from '../assets/etoolsbuddy_Preview_7.svg'
import greetingAngelPreview1 from '../assets/GreetingAngel_Preview 1.svg'
import greetingAngelPreview2 from '../assets/GreetingAngel_Preview 2.svg'
import greetingAngelPreview3 from '../assets/GreetingAngel_Preview 3.svg'
import greetingAngelPreview4 from '../assets/GreetingAngel_Preview 4.svg'
import stockDecisionPreview from '../assets/StockDecision_Preview.svg'
import travelSearchPreview1 from '../assets/TravelSearchAI_Preview 1.svg'
import travelSearchPreview2 from '../assets/TravelSearchAI_Preview 2.svg'
import travelSearchPreview3 from '../assets/TravelSearchAI_Preview 3.svg'
import travelSearchPreview4 from '../assets/TravelSearchAI_Preview 4.svg'
import travelSearchPreview5 from '../assets/TravelSearchAI_Preview 5.svg'
import wowSciencePreview1 from '../assets/WowScienceFacts_Preview 1.svg'
import wowSciencePreview2 from '../assets/WowScienceFacts_Preview 2.svg'
import wowSciencePreview3 from '../assets/WowScienceFacts_Preview 3.svg'
import wowSciencePreview4 from '../assets/WowScienceFacts_Preview 4.svg'
import wowSciencePreview5 from '../assets/WowScienceFacts_Preview 5.svg'

const projectPreviews = {
  stockdecision: {
    type: 'image',
    src: stockDecisionPreview,
    rounded: true,
  },
  etoolsbuddy: {
    type: 'swiper',
    rounded: true,
    bordered: true,
    slides: [
      etoolsbuddyPreview1,
      etoolsbuddyPreview2,
      etoolsbuddyPreview3,
      etoolsbuddyPreview4,
      etoolsbuddyPreview5,
      etoolsbuddyPreview6,
      etoolsbuddyPreview7,
    ],
  },
  'greeting-angel': {
    type: 'swiper',
    rounded: true,
    bordered: true,
    slides: [
      greetingAngelPreview1,
      greetingAngelPreview2,
      greetingAngelPreview3,
      greetingAngelPreview4,
    ],
  },
  travelsearchai: {
    type: 'swiper',
    rounded: true,
    bordered: true,
    slides: [
      travelSearchPreview1,
      travelSearchPreview2,
      travelSearchPreview3,
      travelSearchPreview4,
      travelSearchPreview5,
    ],
  },
  wowsciencefacts: {
    type: 'swiper',
    rounded: true,
    bordered: true,
    slides: [
      wowSciencePreview1,
      wowSciencePreview2,
      wowSciencePreview3,
      wowSciencePreview4,
      wowSciencePreview5,
    ],
  },
}

export function getProjectPreview(slug) {
  return projectPreviews[slug] ?? projectPreviews.stockdecision
}

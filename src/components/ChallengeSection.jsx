import { useEffect, useRef, useState } from 'react'
import {
  LuBadgeCheck,
  LuBell,
  LuChartBar,
  LuShield,
  LuShare2,
  LuUsers,
} from 'react-icons/lu'
import SwiperNavIcon from './SwiperNavIcon'

const DESKTOP_VISIBLE = 3
const ICON_STROKE = 1.5

const challengeIconMap = {
  shield: LuShield,
  chart: LuChartBar,
  network: LuShare2,
  users: LuUsers,
  updates: LuBell,
  confidence: LuBadgeCheck,
}

function ChallengeCardIcon({ type }) {
  const Icon = challengeIconMap[type] ?? LuChartBar

  return (
    <span className="challenge-card-icon" aria-hidden="true">
      <Icon size={24} color="currentColor" strokeWidth={ICON_STROKE} />
    </span>
  )
}

function ChallengeSection({ section }) {
  const viewportRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(DESKTOP_VISIBLE)
  const cards = section.cards
  const maxIndex = Math.max(0, cards.length - visibleCount)

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      if (!viewport) return

      const isMobile = window.matchMedia('(max-width: 1024px)').matches
      const count = isMobile ? 1 : DESKTOP_VISIBLE
      setVisibleCount(count)

      const card = viewport.querySelector('.challenge-swiper-card')
      const track = viewport.querySelector('.challenge-swiper-track')
      const gap = track ? parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 32 : 32
      if (card) {
        setStepPx(card.offsetWidth + gap)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [cards.length])

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex))
  }, [maxIndex])

  const goNext = () => {
    setActiveIndex((index) => Math.min(index + 1, maxIndex))
  }

  const goPrev = () => {
    setActiveIndex((index) => Math.max(index - 1, 0))
  }

  return (
    <section id={section.id} className="case-section case-section--challenge">
      <div className="challenge-header">
        <h2>{section.title}</h2>
        <p className="challenge-intro">{section.intro}</p>
      </div>

      <div className="challenge-swiper" ref={viewportRef}>
        <div
          className="challenge-swiper-track"
          style={{ transform: `translateX(-${activeIndex * stepPx}px)` }}
        >
          {cards.map((item) => (
            <article key={item.number} className="challenge-swiper-card challenge-card">
              <div className="challenge-card-top">
                <span className="challenge-card-number">{item.number}</span>
                {item.icon && <ChallengeCardIcon type={item.icon} />}
              </div>

              <h3>{item.title}</h3>

              <ul className="challenge-card-list">
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="challenge-user-concern">
                <span className="challenge-user-concern-label">User Concerns...</span>
                <p>{item.userConcern}</p>
              </div>
            </article>
          ))}
        </div>

        {activeIndex > 0 && (
          <button
            type="button"
            className="swiper-nav-btn swiper-nav-btn--prev"
            onClick={goPrev}
            aria-label="Previous challenges"
          >
            <SwiperNavIcon direction="prev" />
          </button>
        )}
        {activeIndex < maxIndex && (
          <button
            type="button"
            className="swiper-nav-btn swiper-nav-btn--next"
            onClick={goNext}
            aria-label="Next challenges"
          >
            <SwiperNavIcon direction="next" />
          </button>
        )}
      </div>
    </section>
  )
}

export default ChallengeSection

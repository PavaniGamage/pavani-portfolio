import { useState } from 'react'
import ImageScrollFrame from './ImageScrollFrame'
import SwiperNavIcon from './SwiperNavIcon'

function renderIntroWithEmphasis(intro, emphasisTerms = []) {
  if (!emphasisTerms.length) return intro

  const pattern = new RegExp(`(${emphasisTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = intro.split(pattern)

  return parts.map((part, index) =>
    emphasisTerms.includes(part) ? (
      <strong key={`${part}-${index}`} className="current-status-intro-emphasis">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

function CurrentStatusSection({ section }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const images =
    section.images ??
    section.slides?.map((slide) => ({
      image: slide.image,
      imageAlt: slide.imageAlt,
    })) ??
    []

  const copy =
    section.copy ??
    (section.slides?.[0]
      ? {
          subtitle: section.slides[0].subtitle,
          description: section.slides[0].description,
          bullets: section.slides[0].bullets,
        }
      : null)

  const goNext = () => {
    setActiveIndex((index) => Math.min(index + 1, images.length - 1))
  }

  const goPrev = () => {
    setActiveIndex((index) => Math.max(index - 1, 0))
  }

  return (
    <section id={section.id} className="case-section case-section--current-status">
      <div className="current-status-header">
        <h2>{section.title}</h2>
        <p className="current-status-intro">
          {renderIntroWithEmphasis(section.intro, section.introEmphasis)}
        </p>
      </div>

      {(images.length > 0 || copy) && (
      <div className="current-status-panel">
        <div className="current-status-swiper">
          <div
            className="current-status-swiper-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((item, index) => (
              <figure key={item.imageAlt ?? `current-status-${index}`} className="current-status-slide">
                <ImageScrollFrame
                  src={item.image}
                  alt={item.imageAlt}
                  variant="current-status"
                  showMaximize
                />
              </figure>
            ))}
          </div>

          <div className="current-status-swiper-controls">
            {activeIndex > 0 && (
              <button
                type="button"
                className="swiper-nav-btn swiper-nav-btn--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <SwiperNavIcon direction="prev" />
              </button>
            )}
            {activeIndex < images.length - 1 && (
              <button
                type="button"
                className="swiper-nav-btn swiper-nav-btn--next"
                onClick={goNext}
                aria-label="Next image"
              >
                <SwiperNavIcon direction="next" />
              </button>
            )}
          </div>
        </div>

        {copy && (
          <div className="current-status-copy">
            <div className="current-status-copy-inner">
              <h3>{copy.subtitle}</h3>
              <p>{copy.description}</p>
              <ul>
                {copy.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      )}
    </section>
  )
}

export default CurrentStatusSection

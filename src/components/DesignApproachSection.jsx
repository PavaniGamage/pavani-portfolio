import { useEffect, useRef, useState } from 'react'
import {
  LuBadgeCheck,
  LuBookOpen,
  LuChartBar,
  LuCircleCheck,
  LuClock,
  LuCompass,
  LuEye,
  LuFileText,
  LuGitBranch,
  LuGlobe,
  LuLayoutGrid,
  LuLightbulb,
  LuMegaphone,
  LuMessageSquare,
  LuNewspaper,
  LuRadio,
  LuRocket,
  LuScanSearch,
  LuShare2,
  LuSparkles,
  LuUsers,
  LuWaypoints,
} from 'react-icons/lu'
import ImageScrollFrame from './ImageScrollFrame'
import SwiperNavIcon from './SwiperNavIcon'

const ACCENT_COLOR = '#FFBF00'
const ICON_STROKE = 1.5

const RESEARCH_SOURCE_ICONS = [
  LuFileText,
  LuLayoutGrid,
  LuUsers,
  LuNewspaper,
  LuScanSearch,
]

const RESEARCH_SOURCE_ICON_MAP = {
  book: LuBookOpen,
  file: LuFileText,
  grid: LuLayoutGrid,
  users: LuUsers,
  newspaper: LuNewspaper,
  search: LuScanSearch,
  globe: LuGlobe,
  chart: LuChartBar,
  badge: LuBadgeCheck,
}

const OBSERVATION_ICONS = [LuRadio, LuChartBar, LuCompass, LuClock, LuShare2]

function getPrincipleIcon(title) {
  const normalized = title.toLowerCase()

  if (normalized.includes('clear') || normalized.includes('accessible') || normalized.includes('clarity')) {
    return LuEye
  }

  if (normalized.includes('centralized') || normalized.includes('consistency')) {
    return LuWaypoints
  }

  if (
    normalized.includes('support') ||
    normalized.includes('flexible') ||
    normalized.includes('different')
  ) {
    return LuUsers
  }

  if (
    normalized.includes('actionable') ||
    normalized.includes('insights') ||
    normalized.includes('iterate') ||
    normalized.includes('feedback')
  ) {
    return LuRocket
  }

  return LuSparkles
}

function PartHeading({ number, title }) {
  return (
    <h3 className="design-part-heading">
      <span className="design-part-number-badge">{number}</span>
      <span className="design-part-title">{title}</span>
    </h3>
  )
}

function DiscoverPanelIcon({ type }) {
  const iconProps = {
    size: 18,
    color: ACCENT_COLOR,
    strokeWidth: ICON_STROKE,
  }

  if (type === 'eye') {
    return <LuEye {...iconProps} />
  }

  return <LuChartBar {...iconProps} />
}

function ResearchSourceIcon({ index, iconKey }) {
  const Icon =
    (iconKey && RESEARCH_SOURCE_ICON_MAP[iconKey]) ??
    RESEARCH_SOURCE_ICONS[index % RESEARCH_SOURCE_ICONS.length]

  return (
    <span className="design-discover-source-icon" aria-hidden="true">
      <Icon size={22} color="#6b7280" strokeWidth={ICON_STROKE} />
    </span>
  )
}

function ObservationCardIcon({ index }) {
  const Icon = OBSERVATION_ICONS[index % OBSERVATION_ICONS.length]

  return (
    <span className="design-observed-card-icon" aria-hidden="true">
      <Icon size={28} color={ACCENT_COLOR} strokeWidth={ICON_STROKE} />
    </span>
  )
}

function DiscoverPart({ part }) {
  const researchCard = part.cards.find((card) => card.sources || card.diagram?.nodes)
  const observedCard = part.cards.find((card) => card.observations)
  const insightCard = part.cards.find((card) => card.flow)
  const sourceItems = researchCard?.sources ?? researchCard?.diagram?.nodes ?? []

  return (
    <>
      <div className="design-discover-layout">
        <section className="design-discover-panel design-discover-panel--sources">
          <header className="design-discover-sources-header">
            <h4>{researchCard?.heading ?? 'Research Sources'}</h4>
          </header>

          <ul className="design-discover-source-list">
            {sourceItems.map((item, index) => {
              const text = typeof item === 'string' ? item : item.text
              const iconKey = typeof item === 'object' ? item.icon : undefined

              return (
                <li key={text} className="design-discover-source-item">
                  <ResearchSourceIcon index={index} iconKey={iconKey} />
                  <span className="design-discover-source-text">{text}</span>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="design-discover-panel design-discover-panel--observations">
          <div className="design-observed-grid">
            {(observedCard?.observations ?? []).map((observation, index) => (
              <article
                key={observation}
                className={`design-observed-card${
                  index === (observedCard?.observations?.length ?? 0) - 1 &&
                  (observedCard?.observations?.length ?? 0) % 2 === 1
                    ? ' design-observed-card--wide'
                    : ''
                }`}
              >
                <ObservationCardIcon index={index} />
                <span className="design-observed-label">
                  Observation {String(index + 1).padStart(2, '0')}
                </span>
                <p>{observation}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {insightCard?.flow && (
        <section className="design-insight-banner">
          <header className="design-discover-panel-header">
            <span className="design-discover-panel-icon" aria-hidden="true">
              <LuLightbulb size={18} color={ACCENT_COLOR} strokeWidth={ICON_STROKE} />
            </span>
            <h4>{insightCard.heading}</h4>
          </header>
          <div className="design-insight-flow">
            <p className="design-insight-from">{insightCard.flow.from}</p>
            <span className="design-insight-arrow" aria-hidden="true">
              <span className="design-insight-arrow-line" />
            </span>
            <p className="design-insight-to">{insightCard.flow.to}</p>
          </div>
        </section>
      )}
    </>
  )
}

function DefineProblemsPart({ part }) {
  const cards = part.problems.map((problem, index) => ({
    title: problem.title,
    problemState: problem.detail,
    solutionPath: part.mappings[index]?.to ?? '',
  }))

  return (
    <div className="design-define-cards">
      {cards.map((card) => (
        <article key={card.title} className="design-define-card">
          <header className="design-define-card-header">
            <h4>{card.title}</h4>
          </header>
          <div className="design-define-card-body">
            <span className="design-define-kicker">Problem State</span>
            <p className="design-define-problem-state">{card.problemState}</p>
            <div className="design-define-divider" aria-hidden="true" />
            <span className="design-define-kicker design-define-kicker--solution">Solution Path</span>
            <p className="design-define-solution-path">{card.solutionPath}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function PrinciplesPart({ part }) {
  return (
    <div className="design-principles-panel">
      <div className="design-principles-grid">
        {part.principles.map((principle) => {
          const Icon = getPrincipleIcon(principle.title)

          return (
            <article key={principle.title} className="design-principle-item">
              <span className="design-principle-icon-wrap" aria-hidden="true">
                <Icon size={22} color={ACCENT_COLOR} strokeWidth={ICON_STROKE} />
              </span>
              <h4>{principle.title}</h4>
              <p>{principle.body}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function WireframesPart({ part }) {
  return (
    <div className="design-wireframes">
      {(part.note || part.noteEmphasis) && (
        <p
          className={`design-wireframes-note${
            part.narrowNote ? ' design-wireframes-note--narrow' : ''
          }`}
        >
          {part.note}{' '}
          {part.noteEmphasis && <em>{part.noteEmphasis}</em>}
        </p>
      )}
      <div
        className={`design-wireframes-grid${
          part.compactFrame ? ' design-wireframes-grid--compact' : ''
        }${part.narrowNote ? ' design-wireframes-grid--spaced' : ''}`}
      >
        {part.wireframes.map((frame) => (
          <figure key={frame.label} className="design-wireframe-item">
            <figcaption>__ {frame.label} __</figcaption>
            <ImageScrollFrame
              src={frame.image}
              alt={frame.imageAlt}
              imageClassName="design-wireframe-image"
              variant="wireframe"
              showMaximize
            />
          </figure>
        ))}
      </div>

      {part.staticWireframes?.length > 0 && (
        <div
          className={`design-wireframes-structure${
            part.prominentStructure ? ' design-wireframes-structure--prominent' : ''
          }`}
        >
          {part.structureNote && (
            <p className="design-wireframes-structure-note">{part.structureNote}</p>
          )}
          {part.staticWireframes.map((frame, index) => (
            <figure
              key={frame.imageAlt ?? `static-wireframe-${index}`}
              className="design-wireframes-structure-item"
            >
              <img
                src={frame.image}
                alt={frame.imageAlt}
                className="design-wireframes-structure-image"
              />
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}

function FeedbackTablePart({ part }) {
  const headers = [
    { label: 'Feedback / Observation', icon: LuMessageSquare },
    { label: 'Decision', icon: LuGitBranch },
    { label: 'Outcome', icon: LuBadgeCheck },
  ]

  return (
    <div className="design-feedback-table-wrap">
      <table className="design-feedback-table">
        <thead>
          <tr>
            {headers.map(({ label, icon: Icon }) => (
              <th key={label}>
                <span className="design-feedback-th-content">
                  <span className="design-feedback-th-icon" aria-hidden="true">
                    <Icon size={22} color={ACCENT_COLOR} strokeWidth={2.25} />
                  </span>
                  {label}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {part.rows.map((row) => (
            <tr key={row.feedback}>
              <td>{row.feedback}</td>
              <td>{row.decision}</td>
              <td>{row.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function EvolutionArrow() {
  return (
    <span className="design-evolution-arrow" aria-hidden="true">
      <svg viewBox="0 0 32 20" fill="none">
        <path
          d="M2 10h18M16 5l6 5-6 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

const GALLERY_VISIBLE_DESKTOP = 2

function DesignGallerySwiper({ title, items }) {
  const viewportRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(GALLERY_VISIBLE_DESKTOP)
  const maxIndex = Math.max(0, items.length - visibleCount)

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      const card = viewport?.querySelector('.design-gallery-swiper-card')
      const gap = 20
      const isMobile = window.matchMedia('(max-width: 1024px)').matches
      const count = isMobile ? 1 : GALLERY_VISIBLE_DESKTOP
      setVisibleCount(count)
      if (card) {
        setStepPx(card.offsetWidth + gap)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [items.length])

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
    <section className="design-gallery">
      <h4 className="design-gallery-title">{title}</h4>
      <div className="design-gallery-swiper" ref={viewportRef}>
        <div
          className="design-gallery-swiper-track"
          style={{ transform: `translateX(-${activeIndex * stepPx}px)` }}
        >
          {items.map((item) => (
            <figure key={item.label} className="design-gallery-swiper-card design-gallery-item">
              <ImageScrollFrame
                src={item.image}
                alt={item.label}
                imageClassName="design-wireframe-image"
                variant="gallery"
                showMaximize
              />
              <figcaption>*{item.label}*</figcaption>
            </figure>
          ))}
        </div>

        {activeIndex > 0 && (
          <button
            type="button"
            className="swiper-nav-btn swiper-nav-btn--prev"
            onClick={goPrev}
            aria-label="Previous gallery items"
          >
            <SwiperNavIcon direction="prev" />
          </button>
        )}
        {activeIndex < maxIndex && (
          <button
            type="button"
            className="swiper-nav-btn swiper-nav-btn--next"
            onClick={goNext}
            aria-label="Next gallery items"
          >
            <SwiperNavIcon direction="next" />
          </button>
        )}
      </div>
    </section>
  )
}

function EvolutionRow({ row }) {
  return (
    <section className="design-evolution-row">
      <h4 className="design-evolution-title">{row.title}</h4>
      <div className="design-evolution-stages">
        {row.stages.map((stage, index) => (
          <div key={`${row.title}-${stage.label}`} className="design-evolution-stage-wrap">
            {index > 0 && <EvolutionArrow />}
            <figure className="design-evolution-stage">
              <ImageScrollFrame
                src={stage.image}
                alt={stage.label}
                imageClassName="design-evolution-image"
                variant="evolution"
                showMaximize
              />
              <figcaption>__ {stage.label} __</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}

function VersionListItemContent({ item }) {
  if (typeof item === 'string') {
    return item
  }

  return (
    <>
      {item.text}{' '}
      <em>{item.italic}</em>
    </>
  )
}

function VersionList({ items, variant }) {
  const iconColor = variant === 'evolution' ? ACCENT_COLOR : '#9ca3af'

  return (
    <ul className={`design-version-list design-version-list--${variant}`}>
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : `${item.text}-${item.italic}`}>
          <LuCircleCheck
            className="design-version-list-icon"
            size={18}
            color={iconColor}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>
            <VersionListItemContent item={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

function IterationComparisonArrow() {
  return (
    <span className="design-iteration-arrow" aria-hidden="true">
      <span className="design-iteration-arrow-progress" />
    </span>
  )
}

function IterationComparisonRow({ comparison }) {
  return (
    <section className="design-iteration-comparison-row">
      <h4 className="design-iteration-comparison-title">{comparison.title}</h4>
      <div className="design-iteration-comparison-stages">
        <figure className="design-iteration-comparison-stage">
          <figcaption>__ Version 1.0 __</figcaption>
          <ImageScrollFrame
            src={comparison.version10}
            alt={comparison.version10Alt}
            imageClassName="design-iteration-comparison-image"
            variant="iteration"
            showMaximize
          />
        </figure>
        <IterationComparisonArrow />
        <figure className="design-iteration-comparison-stage">
          <figcaption>__ Version 1.1 __</figcaption>
          <ImageScrollFrame
            src={comparison.version11}
            alt={comparison.version11Alt}
            imageClassName="design-iteration-comparison-image"
            variant="iteration"
            showMaximize
          />
        </figure>
      </div>
    </section>
  )
}

function IterationPart({ part }) {
  const hasComparisons = Array.isArray(part.comparisons) && part.comparisons.length > 0
  const [showMore, setShowMore] = useState(false)
  const initialCount = part.initialEvolutionCount ?? 2
  const visibleEvolution = showMore ? part.evolution : part.evolution?.slice(0, initialCount) ?? []

  return (
    <div className="design-iteration">
      <div className="design-version-cards">
        {part.versions.map((version) => {
          const isEvolution =
            version.variant === 'evolution' ||
            version.title.includes('Version 1.1') ||
            version.title.includes('Version 1.2')

          return (
            <section
              key={`${version.title}-${version.listTitle ?? 'list'}`}
              className={`design-version-card${
                isEvolution ? ' design-version-card--evolution' : ' design-version-card--foundation'
              }`}
            >
              <h4 className="design-version-title">{version.title}</h4>
              <p className="design-version-description">{version.description}</p>
              {version.listTitle && (
                <h5 className="design-version-list-title">{version.listTitle}</h5>
              )}
              <VersionList
                items={version.items}
                variant={isEvolution ? 'evolution' : 'foundation'}
              />
            </section>
          )
        })}
      </div>

      {hasComparisons ? (
        <div className="design-iteration-comparisons">
          {part.comparisons.map((comparison) => (
            <IterationComparisonRow key={comparison.title} comparison={comparison} />
          ))}
        </div>
      ) : (
        <>
          <div className="design-evolution">
            {visibleEvolution.map((row) => (
              <EvolutionRow key={row.title} row={row} />
            ))}
          </div>

          {part.evolution?.length > initialCount && (
            <div className="design-iteration-actions">
              <button
                type="button"
                className="design-view-more-btn"
                onClick={() => setShowMore((open) => !open)}
                aria-expanded={showMore}
              >
                {showMore ? 'Show Less Updates' : 'View More Updates'}
                <span className={`design-view-more-chevron ${showMore ? 'is-open' : ''}`}>
                  <SwiperNavIcon direction="down" />
                </span>
              </button>
            </div>
          )}

          {part.gallery?.length > 0 && (
            <DesignGallerySwiper title={part.galleryTitle} items={part.gallery} />
          )}
        </>
      )}
    </div>
  )
}

function renderPart(part) {
  switch (part.layout) {
    case 'discover':
      return <DiscoverPart part={part} />
    case 'define-problems':
      return <DefineProblemsPart part={part} />
    case 'principles':
      return <PrinciplesPart part={part} />
    case 'wireframes':
      return <WireframesPart part={part} />
    case 'feedback-table':
      return <FeedbackTablePart part={part} />
    case 'iteration':
      return <IterationPart part={part} />
    default:
      return null
  }
}

function DesignApproachSection({ section }) {
  return (
    <section id={section.id} className="case-section case-section--design-approach">
      <div className="design-approach-header">
        <h2>{section.title}</h2>
        <p className="design-approach-intro">{section.intro}</p>
      </div>

      {section.parts.map((part) => (
        <div key={part.number} className="design-approach-part">
          <PartHeading number={part.number} title={part.title} />
          {renderPart(part)}
        </div>
      ))}
    </section>
  )
}

export default DesignApproachSection

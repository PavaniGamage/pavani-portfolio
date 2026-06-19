import {
  LuBookOpen,
  LuBriefcase,
  LuCalendar,
  LuCalendarCheck,
  LuChartBar,
  LuClipboardList,
  LuEye,
  LuFileText,
  LuGift,
  LuGraduationCap,
  LuCircleCheck,
  LuLayoutGrid,
  LuList,
  LuListTodo,
  LuMail,
  LuMap,
  LuMapPin,
  LuMessageSquare,
  LuMessagesSquare,
  LuMonitor,
  LuNewspaper,
  LuPalette,
  LuScanSearch,
  LuSearch,
  LuShoppingBag,
  LuShoppingCart,
  LuSparkles,
  LuStar,
  LuStickyNote,
  LuTags,
  LuTarget,
  LuTelescope,
  LuTrendingUp,
  LuUsers,
  LuWallet,
  LuWrench,
} from 'react-icons/lu'

const ICON_STROKE = 1.5

const areaIconMap = {
  ai: LuSparkles,
  forum: LuMessagesSquare,
  calendar: LuCalendar,
  news: LuNewspaper,
  portfolio: LuBriefcase,
  chart: LuChartBar,
  learning: LuGraduationCap,
  research: LuScanSearch,
  tasks: LuListTodo,
  finance: LuWallet,
  goals: LuTarget,
  tools: LuWrench,
  notes: LuStickyNote,
  reports: LuFileText,
  catalog: LuLayoutGrid,
  customizer: LuPalette,
  message: LuMessageSquare,
  preview: LuEye,
  occasions: LuGift,
  cart: LuShoppingCart,
  orders: LuClipboardList,
  inspiration: LuSparkles,
  search: LuSearch,
  listings: LuList,
  map: LuMap,
  host: LuMonitor,
  bookings: LuCalendarCheck,
  reviews: LuStar,
  regions: LuMapPin,
  insights: LuTrendingUp,
  articles: LuBookOpen,
  discoveries: LuTelescope,
  topics: LuTags,
  shop: LuShoppingBag,
  newsletter: LuMail,
  featured: LuStar,
  community: LuUsers,
}

function AreaIcon({ icon }) {
  const Icon = areaIconMap[icon] ?? LuChartBar

  return (
    <span className="overview-area-icon" aria-hidden="true">
      <Icon size={20} color="#111827" strokeWidth={ICON_STROKE} />
    </span>
  )
}

const narrativeIconMap = {
  'why-exists': LuTarget,
  problem: LuCircleCheck,
}

function NarrativeCardIcon({ cardId }) {
  const Icon = narrativeIconMap[cardId]
  if (!Icon) return null

  return (
    <span className="overview-narrative-card-icon" aria-hidden="true">
      <Icon size={28} color="#111827" strokeWidth={ICON_STROKE} />
    </span>
  )
}

function NarrativeCard({ card }) {
  return (
    <article className="overview-narrative-card">
      <h3>
        <NarrativeCardIcon cardId={card.id} />
        <span>{card.title}</span>
      </h3>
      {card.body ? (
        <p className="overview-narrative-body">{card.body}</p>
      ) : (
        <ul className="overview-card-list">
          {card.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function ProductOverviewSection({ section }) {
  const narrativeCards = section.cards.filter((card) => !card.areas)
  const coreAreasCard = section.cards.find((card) => card.areas)

  return (
    <section id={section.id} className="case-section case-section--overview">
      <header className="overview-header">
        <h2>{section.title}</h2>
        <p className="overview-intro">{section.intro}</p>
      </header>

      <div className="overview-narrative-cards">
        {narrativeCards.map((card) => (
          <NarrativeCard key={card.id} card={card} />
        ))}
      </div>

      {coreAreasCard && (
        <div className="overview-core-areas">
          <header className="overview-core-areas-header">
            <h3>{coreAreasCard.title}</h3>
            <span className="overview-core-areas-divider" aria-hidden="true" />
          </header>

          <div className="overview-areas-grid">
            {coreAreasCard.areas.map((areaItem) => (
              <div key={areaItem.label} className="overview-area-tile">
                <AreaIcon icon={areaItem.icon} />
                <h4 className="overview-area-title">{areaItem.label}</h4>
                {areaItem.description && (
                  <p className="overview-area-description">{areaItem.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductOverviewSection

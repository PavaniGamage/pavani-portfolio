import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNextProjectSlug } from '../data/tailSectionsContent'
import CaseStudyNextButton from './CaseStudyNextButton'
import ChallengeSection from './ChallengeSection'
import CurrentStatusSection from './CurrentStatusSection'
import DesignApproachSection from './DesignApproachSection'
import FeatureShowcaseSection from './FeatureShowcaseSection'
import ProductOverviewSection from './ProductOverviewSection'
import ReflectionSection from './ReflectionSection'

function CaseStudy({ study }) {
  const [activeTab, setActiveTab] = useState(study.sections[0]?.id ?? '')
  const nextSlug =
    study.slug === 'stockdecision' ? getNextProjectSlug(study.slug) : null

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setActiveTab(sectionId)
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const sectionIds = study.sections.map((section) => section.id)

    const getScrollOffset = () => {
      const nav = document.querySelector('.top-nav')
      const tabs = document.querySelector('.case-study-tabs-sticky')
      return (
        (nav?.getBoundingClientRect().height ?? 72) +
        (tabs?.getBoundingClientRect().height ?? 72) +
        20
      )
    }

    const updateActiveTab = () => {
      const offset = getScrollOffset()
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24

      if (nearBottom && sectionIds.length > 0) {
        setActiveTab(sectionIds[sectionIds.length - 1])
        return
      }

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id
        }
      }

      setActiveTab(current)
    }

    updateActiveTab()
    window.addEventListener('scroll', updateActiveTab, { passive: true })
    window.addEventListener('resize', updateActiveTab)

    return () => {
      window.removeEventListener('scroll', updateActiveTab)
      window.removeEventListener('resize', updateActiveTab)
    }
  }, [study.sections])

  return (
    <article className="case-study">
      <header className="case-study-hero">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Work</Link>
          <span aria-hidden="true">/</span>
          <span className="case-study-breadcrumb-current">{study.title}</span>
        </nav>
        <h1>{study.title}</h1>
        <div className="case-study-hero-media">
          <img
            src={study.heroImage}
            alt={study.heroAlt}
            className={`case-study-hero-image${
              study.slug === 'etoolsbuddy' ? ' case-study-hero-image--large' : ''
            }`}
          />
        </div>

        {study.meta && (
          <dl className="case-study-meta">
            <div className="case-study-meta-item">
              <dt>Role</dt>
              <dd>{study.meta.role}</dd>
            </div>
            <div className="case-study-meta-item">
              <dt>Timeline</dt>
              <dd>{study.meta.timeline}</dd>
            </div>
            <div className="case-study-meta-item">
              <dt>Platform</dt>
              <dd>{study.meta.platform}</dd>
            </div>
            <div className="case-study-meta-item">
              <dt>Status</dt>
              <dd>{study.meta.status}</dd>
            </div>
          </dl>
        )}
      </header>

      <div className="case-study-tabs-sticky">
        <nav className="case-study-tabs" aria-label="Case study sections">
          {study.sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={activeTab === section.id ? 'active' : ''}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="case-study-sections">
        {study.sections.map((section) => {
          if (section.type === 'product-overview') {
            return <ProductOverviewSection key={section.id} section={section} />
          }

          if (section.type === 'the-challenge') {
            return <ChallengeSection key={section.id} section={section} />
          }

          if (section.type === 'design-approach') {
            return <DesignApproachSection key={section.id} section={section} />
          }

          if (section.type === 'key-features') {
            return <FeatureShowcaseSection key={section.id} section={section} />
          }

          if (section.type === 'reflection') {
            return <ReflectionSection key={section.id} section={section} />
          }

          if (section.type === 'current-status') {
            return <CurrentStatusSection key={section.id} section={section} />
          }

          return null
        })}
      </div>

      <CaseStudyNextButton nextSlug={nextSlug} />
    </article>
  )
}

export default CaseStudy

import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import heroSectionImage from '../assets/HumanBrain.png'
import { projects } from '../data/projects'
import { caseStudies } from '../data/caseStudies'
import ProjectPreview from '../components/ProjectPreview'

const comingSoonSlugs = new Set(['travelsearchai', 'greeting-angel', 'wowsciencefacts'])

function HomePage() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!location.state?.scrollToWork) return

    const section = document.getElementById('work')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.history.replaceState({}, '')
  }, [location.state])

  const scrollToWork = () => {
    const section = document.getElementById('work')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const openCaseStudy = (slug) => {
    if (!caseStudies[slug]) return
    navigate(`/work/${slug}`)
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="intro-text">Pavani Gamage. UI/UX Designer</p>
          <h1>
            <span>Human-First</span>
            <span>
              <span className="hero-accent">Digital</span> Experiences
            </span>
          </h1>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroSectionImage}
            alt="Hero section visual"
            className="hero-section-image"
          />
        </div>
        <button
          type="button"
          className="hero-scroll-down"
          onClick={scrollToWork}
          aria-label="Scroll to projects"
        >
          <span className="scroll-chevron scroll-chevron--down" aria-hidden="true" />
        </button>
      </section>

      <section id="work" className="projects-section">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1
          const leftAlignText =
            project.slug === 'etoolsbuddy' ||
            project.slug === 'travelsearchai' ||
            project.slug === 'greeting-angel'

          return (
          <article
            key={project.slug}
            className={`project-row${isReverse ? ' project-row--reverse' : ''}${
              leftAlignText ? ' project-row--text-left' : ''
            }`}
          >
            <div className="project-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {comingSoonSlugs.has(project.slug) ? (
                <span className="see-thinking-btn see-thinking-btn--coming-soon">
                  Coming Soon...
                </span>
              ) : (
                <button
                  type="button"
                  className="see-thinking-btn"
                  onClick={() => openCaseStudy(project.slug)}
                >
                  <span>See the Thinking</span>
                  <span className="see-thinking-arrow" aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="project-preview">
              <ProjectPreview slug={project.slug} title={project.title} />
            </div>
          </article>
          )
        })}
      </section>
    </>
  )
}

export default HomePage

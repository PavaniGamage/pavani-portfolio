import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import portfolioLogo from '../assets/Portfolio_Logo.png'
import ContactFooter from './ContactFooter'

function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [contactNavActive, setContactNavActive] = useState(false)
  const [workNavActive, setWorkNavActive] = useState(false)

  const pathname = location.pathname
  const isCaseStudyPage = pathname.startsWith('/work/')
  const isHomePage = pathname === '/'
  const isWorkActive = isHomePage && workNavActive && !contactNavActive
  const isAboutActive = pathname === '/about' && !contactNavActive

  useEffect(() => {
    document.body.classList.toggle('page-theme-light', isCaseStudyPage)
    return () => document.body.classList.remove('page-theme-light')
  }, [isCaseStudyPage])

  useEffect(() => {
    if (!isHomePage) {
      setWorkNavActive(false)
      return undefined
    }

    const updateWorkNav = () => {
      const workSection = document.getElementById('work')
      if (!workSection) {
        setWorkNavActive(false)
        return
      }

      const navHeight =
        document.querySelector('.top-nav')?.getBoundingClientRect().height ?? 72
      setWorkNavActive(workSection.getBoundingClientRect().top <= navHeight + 24)
    }

    updateWorkNav()
    window.addEventListener('scroll', updateWorkNav, { passive: true })
    window.addEventListener('resize', updateWorkNav)

    return () => {
      window.removeEventListener('scroll', updateWorkNav)
      window.removeEventListener('resize', updateWorkNav)
    }
  }, [isHomePage, pathname])

  useEffect(() => {
    if (!location.state?.scrollToWork) {
      window.scrollTo(0, 0)
    }
    setContactNavActive(false)
    setWorkNavActive(false)

    const studySlug = pathname.startsWith('/work/')
      ? pathname.replace('/work/', '')
      : null
    const studyTitle = studySlug
      ? studySlug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : null

    const pageTitles = {
      '/': 'Work',
      '/about': 'About',
    }

    const pageName = studyTitle ?? pageTitles[pathname] ?? 'Work'
    document.title = `${pageName} | Pavani Gamage`
  }, [pathname, location.state])

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 420)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToWork = (event) => {
    event.preventDefault()
    setContactNavActive(false)

    if (isHomePage) {
      setWorkNavActive(true)
      const section = document.getElementById('work')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    navigate('/', { state: { scrollToWork: true } })
  }

  const goToContact = (event) => {
    event.preventDefault()
    setContactNavActive(true)
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="hero-page">
      <header className="top-nav">
        <div className="top-nav-inner">
          <Link
            to="/"
            className="brand"
            aria-label="Go to home"
            onClick={() => setContactNavActive(false)}
          >
            <span className="brand-logo-wrap">
              <img src={portfolioLogo} alt="" className="brand-logo" />
            </span>
          </Link>
          <nav>
            <a
              href="#work"
              className={isWorkActive ? 'active' : ''}
              onClick={goToWork}
            >
              Work
            </a>
            <Link
              to="/about"
              className={isAboutActive ? 'active' : ''}
              onClick={() => setContactNavActive(false)}
            >
              About
            </Link>
            <a
              href="#contact"
              className={`contact-btn ${contactNavActive ? 'active' : ''}`}
              onClick={goToContact}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className={`page-content${isCaseStudyPage ? ' page-content--light' : ''}`}>
        <Outlet />
      </div>

      <ContactFooter />

      <button
        type="button"
        className={`scroll-to-top ${showScrollTop ? 'scroll-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="scroll-chevron scroll-chevron--up" aria-hidden="true" />
      </button>
    </main>
  )
}

export default Layout

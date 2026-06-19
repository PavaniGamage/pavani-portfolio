import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

function CaseStudyNextButton({ nextSlug }) {
  if (!nextSlug || !caseStudies[nextSlug]) return null

  const nextStudy = caseStudies[nextSlug]

  return (
    <div className="case-study-next-wrap">
      <Link to={`/work/${nextSlug}`} className="case-study-next-btn">
        <span className="case-study-next-label">Next</span>
        <span className="case-study-next-title">{nextStudy.title}</span>
      </Link>
    </div>
  )
}

export default CaseStudyNextButton

import { Navigate, useParams } from 'react-router-dom'
import CaseStudy from '../components/CaseStudy'
import { caseStudies } from '../data/caseStudies'

function CaseStudyPage() {
  const { slug } = useParams()
  const study = slug ? caseStudies[slug] : null

  if (!study) {
    return <Navigate to="/" replace />
  }

  return <CaseStudy study={study} />
}

export default CaseStudyPage

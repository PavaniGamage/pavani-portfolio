import { useEffect, useState } from 'react'
import { getProjectPreview } from '../utils/projectPreviews'

function ProjectPreviewFrame({ children, rounded = false, bordered = false }) {
  return (
    <div
      className={`project-preview-frame${
        rounded ? ' project-preview-frame--rounded' : ''
      }${bordered ? ' project-preview-frame--bordered' : ''}`}
    >
      {children}
    </div>
  )
}

function ProjectPreviewSwiper({ slides, alt, rounded = false, bordered = false }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <div className="project-preview-swiper">
      <ProjectPreviewFrame rounded={rounded} bordered={bordered}>
        <div className="project-preview-swiper-viewport">
          <div
            className="project-preview-swiper-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={slide}
                src={slide}
                alt={`${alt} preview ${index + 1}`}
                className="project-preview-swiper-image"
              />
            ))}
          </div>
        </div>
      </ProjectPreviewFrame>

      <div className="project-preview-dots" role="tablist" aria-label={`${alt} previews`}>
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            role="tab"
            className={`project-preview-dot${activeIndex === index ? ' project-preview-dot--active' : ''}`}
            aria-label={`Show preview ${index + 1}`}
            aria-selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectPreview({ slug, title }) {
  const preview = getProjectPreview(slug)

  if (preview.type === 'video') {
    return (
      <ProjectPreviewFrame rounded={preview.rounded}>
        <video
          key={slug}
          className="project-preview-video"
          src={preview.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={`${title} preview`}
        />
      </ProjectPreviewFrame>
    )
  }

  if (preview.type === 'swiper') {
    return (
      <ProjectPreviewSwiper
        slides={preview.slides}
        alt={title}
        rounded={preview.rounded}
        bordered={preview.bordered}
      />
    )
  }

  return (
    <ProjectPreviewFrame rounded={preview.rounded}>
      <img
        src={preview.src}
        alt={`${title} preview`}
        className="project-preview-image"
      />
    </ProjectPreviewFrame>
  )
}

export default ProjectPreview

import { useState } from 'react'
import { createPortal } from 'react-dom'
import ImageLightbox from './ImageLightbox'

function MaximizeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M9 3H5a2 2 0 00-2 2v4M15 3h4a2 2 0 012 2v4M9 21H5a2 2 0 01-2-2v-4M15 21h4a2 2 0 002-2v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ImageScrollFrame({
  src,
  alt,
  imageClassName = '',
  variant = 'default',
  showMaximize = false,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <div className={`image-scroll-frame image-scroll-frame--${variant}`}>
        {showMaximize && (
          <button
            type="button"
            className="image-maximize-btn"
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full size: ${alt}`}
          >
            <MaximizeIcon />
          </button>
        )}
        <img src={src} alt={alt} className={imageClassName} />
      </div>

      {lightboxOpen &&
        createPortal(
          <ImageLightbox src={src} alt={alt} onClose={() => setLightboxOpen(false)} />,
          document.body,
        )}
    </>
  )
}

export default ImageScrollFrame

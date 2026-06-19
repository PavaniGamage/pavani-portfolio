import ImageScrollFrame from './ImageScrollFrame'

function FeatureShowcaseSection({ section }) {
  return (
    <section
      id={section.id}
      className={`case-section case-section--key-features${
        section.mediaBorder ? ' case-section--key-features--bordered-media' : ''
      }${section.compactTop ? ' case-section--key-features--compact-top' : ''}`}
    >
      <div className="key-features-header">
        <h2>{section.title}</h2>
        <p className="key-features-intro">{section.intro}</p>
      </div>

      <div
        className={`feature-showcase-list${
          section.spaciousLayout === 'extra'
            ? ' feature-showcase-list--spacious-extra'
            : section.spaciousLayout
              ? ' feature-showcase-list--spacious'
              : ''
        }`}
      >
        {section.features.map((item, index) => (
          <article
            key={item.title}
            className={`feature-showcase-row${
              index % 2 === 1 ? ' feature-showcase-row--reverse' : ''
            }${item.fitFrame ? ' feature-showcase-row--fit-frame' : ''}${
              item.showcaseBg ? ' feature-showcase-row--showcase-bg' : ''
            }`}
          >
            <div className="feature-showcase-copy">
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="feature-showcase-media">
              {item.mediaType === 'video' ? (
                <div className="feature-showcase-video-frame">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label={item.imageAlt}
                  />
                </div>
              ) : (
                <ImageScrollFrame
                  src={item.image}
                  alt={item.imageAlt}
                  variant="showcase"
                  showMaximize
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureShowcaseSection

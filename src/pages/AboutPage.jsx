import AboutTopImage from '../assets/About_Top_image.png'
import AboutBottomImage from '../assets/About_Bottom_image.png'

function AboutPage() {
  return (
    <section id="about" className="about-section about-page">
      <h2>About me</h2>

      <div className="about-main-row">
        <div className="about-text">
          <p>
            I began my UI/UX design journey in 2022 through self-learning,
            driven by a passion for creating meaningful digital experiences. As
            my skills grew, my curiosity expanded into development and product
            thinking, leading me to pursue a Software Engineering degree and
            join a startup.
          </p>
          <p>
            During that time, I discovered my true alignment lay in design
            rather than code. I realized that exceptional design goes far beyond
            visuals - it is about solving real problems, researching market
            needs, and building emotional connections with users. This
            realization inspired me to pivot my academic focus toward
            Psychology, allowing me to deepen my understanding of human behavior
            and user experience.
          </p>
          <p className="about-highlight">Still learning, still evolving.</p>
        </div>
        <img
          src={AboutTopImage}
          alt="About illustration"
          className="about-image about-image--round"
        />
      </div>

      <div className="about-secondary-row">
        <img
          src={AboutBottomImage}
          alt="Outside of design visual"
          className="about-image about-image--round-secondary"
        />
        <div className="about-text">
          <h3>Outside of design...</h3>
          <p>
            I enjoy cooking,
            <br />
            listening to music,
            <br />
            and spending time in calm, green spaces or by the beach
            <br />
            - moments that help me reset, observe, and stay inspired.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

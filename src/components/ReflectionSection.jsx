function ReflectionSection({ section }) {
  return (
    <section id={section.id} className="case-section case-section--reflection">
      <h2 className="reflection-title">{section.title}</h2>

      <div className="reflection-list">
        {section.items.map((item) => (
          <article key={item.number} className="reflection-item">
            <h3>
              <span className="reflection-number">{item.number}.</span> {item.title}
            </h3>
            <ul>
              <li>{item.body}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ReflectionSection

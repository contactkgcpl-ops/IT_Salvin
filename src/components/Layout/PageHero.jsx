import Background from './Background.jsx'

const PageHero = ({ tag, title, copy }) => (
  <section className="page-hero">
    <Background />
    <div className="page-hero-inner">
      <div className="section-tag">{tag}</div>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  </section>
)

export default PageHero

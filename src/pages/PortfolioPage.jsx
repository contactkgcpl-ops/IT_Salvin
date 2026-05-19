import CTA from '../components/CTA/CTA.jsx'
import Card from '../components/Card/Card.jsx'
import PageHero from '../components/Layout/PageHero.jsx'

const filters = ['all', 'realestate', 'hospitality', 'engineering', 'pharma', 'events']

const PortfolioPage = ({ filter, setFilter, visibleProjects, navigate }) => (
  <>
    <PageHero
      tag="Portfolio"
      title="Work that speaks for itself"
      copy="Selected projects spanning industries, geographies, and scales."
    />
    <div className="filter-tabs">
      {filters.map((item) => (
        <button className={filter === item ? 'active' : ''} key={item} type="button" onClick={() => setFilter(item)}>
          {item === 'all' ? 'All Projects' : item}
        </button>
      ))}
    </div>
    <section className="section-pad">
      <div className="container portfolio-grid">
        {visibleProjects.map(([cat, title, copy]) => (
          <Card className="portfolio-card" key={title}>
            <div className="portfolio-img">{cat.slice(0, 3).toUpperCase()}</div>
            <div className="portfolio-info">
              <h4>{title}</h4>
              <p>{copy}</p>
              <span>{cat}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
    <CTA title="Your project could be next" navigate={navigate} />
  </>
)

export default PortfolioPage

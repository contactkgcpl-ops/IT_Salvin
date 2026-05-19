const SectionHeader = ({ tag, title, copy }) => (
  <div className="container section-header">
    <div className="section-tag">{tag}</div>
    <h2 className="section-title">{title}</h2>
    {copy && <p className="section-sub">{copy}</p>}
  </div>
)

export default SectionHeader

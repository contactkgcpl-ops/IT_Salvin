import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import MetricsStrip from './components/MetricsStrip/MetricsStrip.jsx'
import ModuleGrid from './components/ModuleGrid/ModuleGrid.jsx'
import PipelineBoard from './components/PipelineBoard/PipelineBoard.jsx'
import WorkflowPanel from './components/WorkflowPanel/WorkflowPanel.jsx'
import IndustrySuite from './components/IndustrySuite/IndustrySuite.jsx'
import InsightPanel from './components/InsightPanel/InsightPanel.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className="app-shell">
        <Header />
      <main>
        <Hero />
        <MetricsStrip />
        <ModuleGrid />
        <PipelineBoard />
        <WorkflowPanel />
        <IndustrySuite />
        <InsightPanel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

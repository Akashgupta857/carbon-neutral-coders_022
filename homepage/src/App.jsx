

import ELearningSection, { FeaturedLogos, SectionOne, ResumePreview, TrustpilotSection, ResumeTemplatesSection, BuildResumeSection, HeaderHome, WhyUseNovoresume, PremiumFeatures, TrustpilotReviews, FaqSection } from './components/HomePage'
import './assets/homepage.css';

function App() {
 

  return (
    <div className="App">
    <HeaderHome>
    <ResumePreview/>
    </HeaderHome>
    
    <FeaturedLogos/>
    <SectionOne/>
    <TrustpilotSection/>
    <ResumeTemplatesSection/>
    <BuildResumeSection/>
    <WhyUseNovoresume/>
    <ELearningSection/>
    <PremiumFeatures/>
    <TrustpilotReviews/>
    <FaqSection/>
 
    </div>

  )
}

export default App

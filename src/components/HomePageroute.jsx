import ELearningSection, { FeaturedLogos, SectionOne, ResumePreview, TrustpilotSection, ResumeTemplatesSection, BuildResumeSection, HeaderHome, WhyUseNovoresume, PremiumFeatures, TrustpilotReviews, FaqSection } from './HomePage'
import '../assets/HomePage.css';

function HomePageroute() {
 
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

export default HomePageroute

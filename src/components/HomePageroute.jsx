import ELearningSection, { FeaturedLogos, SectionOne, ResumePreview, TrustpilotSection, ResumeTemplatesSection, BuildResumeSection, HeaderHome, WhyUseNovoresume, PremiumFeatures, TrustpilotReviews, FaqSection } from './HomePage'
import '../assets/HomePage.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
function HomePageroute() {
 
  return (
    <div className="App">
    <Navbar/>
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
    <Footer/>
    </div>

  )
}

export default HomePageroute

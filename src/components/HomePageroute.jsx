import ELearningSection, { FeaturedLogos, SectionOne, ResumePreview, TrustpilotSection, ResumeTemplatesSection, BuildResumeSection, HeaderHome, WhyUseNovoresume, PremiumFeatures, TrustpilotReviews, FaqSection } from './HomePage'
import '../assets/HomePage.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';
function HomePageroute() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
    <Navbar user={user}/>
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

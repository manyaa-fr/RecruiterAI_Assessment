import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ImpactResults from '../components/ImpactResults';
import BenefitsSection from '../components/BenefitsSection';
import LogoSliderSection from '../components/LogoSliderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

function LandingPage() {
  return (
    <>
        <Helmet>
            <title>RecruiterAI - Every Hire, Faster and Better</title>
            <meta
                name="description"
                content="Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team."
            />
        </Helmet>
        <div className="min-h-screen bg-white overflow-x-hidden">
            <HeroSection />
            <HowItWorksSection />
            <ImpactResults />
            <BenefitsSection />
            <LogoSliderSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTA />
        </div>
    </>
  );
}

export default LandingPage;
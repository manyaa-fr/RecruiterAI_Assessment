import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';

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
        </div>
    </>
  );
}

export default LandingPage;
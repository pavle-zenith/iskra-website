import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Empathy from '@/components/sections/Empathy';
import Audience from '@/components/sections/Audience';
import FeatureGrid from '@/components/sections/FeatureGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import Toolkit from '@/components/sections/Toolkit';
import Savings from '@/components/sections/Savings';
import Knowledge from '@/components/sections/Knowledge';
import StatBand from '@/components/sections/StatBand';
import Joinflow from '@/components/sections/Joinflow';
import Reviews from '@/components/sections/Reviews';
import Mechanism from '@/components/sections/Mechanism';
import Comparison from '@/components/sections/Comparison';
import EarlyAccess from '@/components/sections/EarlyAccess';
import JourneyCta from '@/components/sections/JourneyCta';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Empathy />
        <Audience />
        <FeatureGrid />
        <HowItWorks />
        <Toolkit />
        <Savings />
        <Knowledge />
        <StatBand />
        <Joinflow />
        <Reviews />
        <Mechanism />
        <Comparison />
        <EarlyAccess />
        <JourneyCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ImpactSection from '@/components/sections/ImpactSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <ExpertiseSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}


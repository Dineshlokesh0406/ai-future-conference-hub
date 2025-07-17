import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CallForPapers from '@/components/CallForPapers';
import ConferenceTracks from '@/components/ConferenceTracks';
import Committee from '@/components/Committee';
import Registration from '@/components/Registration';
import Guidelines from '@/components/Guidelines';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Sections */}
        <AboutSection />
        
        {/* Call for Papers */}
        <CallForPapers />
        
        {/* Conference Tracks */}
        <ConferenceTracks />
        
        {/* Committee & Keynote Speakers */}
        <Committee />
        
        {/* Registration */}
        <Registration />
        
        {/* Guidelines & Ethics */}
        <Guidelines />
        
        {/* Contact & Venue */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;

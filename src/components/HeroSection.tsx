import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const conferenceDate = new Date('2025-09-26T09:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 60, 119, 0.8), rgba(14, 116, 144, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* AICTE Sponsored Badge - Positioned below navbar */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full shadow-lg">
          <span className="font-bold text-sm">AICTE SPONSORED</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10 pt-24">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
            Exploring AI and ML for 
            <span className="block text-accent mt-2">Better Tomorrow</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-blue-100 animate-slide-up">
            National Conference on Emerging Technologies
          </p>

          {/* Conference Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg animate-fade-in">
            <div className="flex items-center space-x-2">
              <Calendar className="text-accent" size={20} />
              <span>26th - 27th September 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-accent" size={20} />
              <span>Tumakuru, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-accent" size={20} />
              <span>NCEAMBT 2025</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <Card key={unit} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base text-blue-100 capitalize">
                      {unit}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="btn-conference-gold text-lg px-8 py-4">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Download Brochure
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
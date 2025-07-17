import { useState } from 'react';
import { Brain, Heart, Shield, TrendingUp, Gamepad2, Lightbulb, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ConferenceTracks = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const tracks = [
    {
      id: 1,
      title: "Emerging Trends in AI and ML",
      icon: Brain,
      color: "primary",
      description: "Explore the latest advancements and future directions in artificial intelligence and machine learning",
      subtasks: [
        "Explainable AI (XAI) and model interpretability",
        "Federated and decentralized machine learning",
        "TinyML and AI on edge devices",
        "Self-supervised and few-shot learning",
        "Transfer learning and domain adaptation",
        "AI for sustainable and green technologies",
        "Foundation Models and Multi-modal AI (e.g., GPT, DALL·E, Gemini)"
      ]
    },
    {
      id: 2,
      title: "AI Applications in Healthcare, Education, Agriculture, and Smart Cities",
      icon: Heart,
      color: "secondary",
      description: "Real-world applications transforming key sectors through intelligent systems",
      subtasks: [
        "Predictive analytics for patient care and diagnosis",
        "AI for personalized learning and adaptive assessments",
        "AI in precision farming and crop yield prediction",
        "Smart irrigation and weather-based decision systems",
        "AI for traffic control and urban planning",
        "AI-based environmental monitoring in smart cities",
        "NLP for local languages in education and administration"
      ]
    },
    {
      id: 3,
      title: "AI in Cyber Security and Data Privacy",
      icon: Shield,
      color: "accent",
      description: "Securing digital infrastructure with AI-powered defense mechanisms",
      subtasks: [
        "Anomaly detection using ML for intrusion prevention",
        "AI for phishing and malware detection",
        "Adversarial attacks and defenses in ML models",
        "AI-based identity verification and authentication",
        "Privacy-preserving machine learning (differential privacy, federated learning)",
        "AI in threat intelligence and real-time threat response",
        "Blockchain-AI hybrid models for data integrity"
      ]
    },
    {
      id: 4,
      title: "AI in Business, Finance, and Economics",
      icon: TrendingUp,
      color: "conference-teal",
      description: "Revolutionizing business operations and financial services through intelligent automation",
      subtasks: [
        "AI in fraud detection and risk analytics",
        "Algorithmic trading using ML models",
        "AI-powered customer service chatbots and personalization",
        "Demand forecasting and supply chain optimization",
        "Sentiment analysis for market trend prediction",
        "Credit scoring using explainable AI",
        "Ethics and bias mitigation in financial algorithms"
      ]
    },
    {
      id: 5,
      title: "Gaming, AR/VR, and Metaverse",
      icon: Gamepad2,
      color: "conference-gold",
      description: "Creating immersive digital experiences with AI-driven technologies",
      subtasks: [
        "AI-driven NPC behavior and procedural content generation",
        "Computer vision for gesture and movement recognition in VR",
        "Real-time rendering enhancements using AI",
        "Emotion-aware avatars and conversational AI in metaverse",
        "AI for gamification in learning and training",
        "Virtual economy analysis and simulation",
        "AI-based moderation and safety in virtual environments"
      ]
    },
    {
      id: 6,
      title: "Innovations in AI: Algorithms, Models and Applications",
      icon: Lightbulb,
      color: "primary",
      description: "Pushing the boundaries of AI research with novel algorithms and methodologies",
      subtasks: [
        "Design of efficient and scalable neural architectures",
        "Hybrid models combining symbolic AI and deep learning",
        "Novel optimization techniques for deep networks",
        "Quantum machine learning approaches",
        "Neuromorphic computing and brain-inspired AI",
        "Benchmarking AI models on real-world datasets",
        "Ethics and bias correction in AI algorithms"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40',
      'secondary': 'from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40',
      'accent': 'from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40',
      'conference-teal': 'from-conference-teal/10 to-conference-teal/5 border-conference-teal/20 hover:border-conference-teal/40',
      'conference-gold': 'from-conference-gold/10 to-conference-gold/5 border-conference-gold/20 hover:border-conference-gold/40'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const iconColorMap = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'accent': 'text-accent',
      'conference-teal': 'text-conference-teal',
      'conference-gold': 'text-conference-gold'
    };
    return iconColorMap[color as keyof typeof iconColorMap] || iconColorMap.primary;
  };

  return (
    <section id="tracks" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Conference Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore six comprehensive tracks covering the latest developments in AI and ML across diverse application domains
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <Card 
                key={track.id}
                className="card-track bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 cursor-pointer transform transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedTrack(track.id)}
              >
                <CardHeader className="pb-4">
                  <div className="p-3 rounded-full w-fit mx-auto mb-3 bg-background/50">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-center text-base leading-tight">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-xs leading-relaxed mb-3">
                    {track.description}
                  </p>
                  <div className="text-center">
                    <Button variant="outline" size="sm" className="text-xs px-4 py-2">
                      View Subtasks
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Track Details Modal */}
        <Dialog open={selectedTrack !== null} onOpenChange={() => setSelectedTrack(null)}>
          <DialogContent className="max-w-2xl max-h-[70vh] overflow-hidden">
            {selectedTrack && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl text-primary flex items-center gap-2">
                    {(() => {
                      const track = tracks.find(t => t.id === selectedTrack);
                      const IconComponent = track?.icon || Brain;
                      return (
                        <>
                          <div className="p-2 rounded-full bg-primary/10">
                            <IconComponent className="text-primary" size={20} />
                          </div>
                          {track?.title}
                        </>
                      );
                    })()}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4 overflow-y-auto max-h-[50vh]">
                  {(() => {
                    const track = tracks.find(t => t.id === selectedTrack);
                    return (
                      <>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {track?.description}
                        </p>
                        <h4 className="text-base font-semibold text-primary mb-3">Research Areas & Subtasks:</h4>
                        <div className="grid gap-2">
                          {track?.subtasks.map((subtask, index) => (
                            <div 
                              key={index}
                              className="flex items-start space-x-2 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-xs font-bold text-primary">{index + 1}</span>
                              </div>
                              <p className="text-xs text-foreground leading-relaxed">{subtask}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ConferenceTracks;
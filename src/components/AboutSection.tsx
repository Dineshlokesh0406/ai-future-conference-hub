import { GraduationCap, Award, Users, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import aiIllustration from '@/assets/ai-illustration.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About the Conference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing together researchers, academicians, and industry experts to explore the transformative potential of AI and ML
          </p>
        </div>

        {/* Conference Preamble */}
        <div className="mb-20">
          <Card className="card-conference">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Conference Preamble</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    NCEAMBT 2025 is organized on 26th and 27th of September 2025 at Sree Siddaganga College of Arts, Science and Commerce, Tumakuru, Karnataka. This conference provides an opportunity to bring together researchers, Academicians, industry experts, innovators and students to explore the transformative potential of Artificial Intelligence and Machine Learning across diverse domains.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This conference serves as a vibrant platform to exchange cutting edge ideas, present breakthrough research, showcase innovative applications, and discuss ethical, societal and policy implications of AI and ML in shaping a sustainable and intelligent future.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={aiIllustration} 
                    alt="AI and ML Illustration" 
                    className="rounded-xl shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Gurukula */}
          <Card className="card-conference animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Building className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl text-primary">Sree Siddaganga Gurukula</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                As an abode of charity, Sree Siddaganga Math has been serving the society for more than a century with free education, food, and shelter to thousands of underprivileged rural children. The Math provides education without any discrimination of caste and community, currently serving more than 10,000 children.
              </p>
            </CardContent>
          </Card>

          {/* About College */}
          <Card className="card-conference animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Award className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-xl text-secondary">About the College</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sree Siddaganga College of Arts, Science & Commerce (SSCASC), founded in 1966, is affiliated to Tumkur University and recognized by UGC. The college is NAAC Accredited with an 'A' grade (CGPA: 3.16) in its 4th cycle (2024).
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-accent" />
                  <span>1,400-1,600 students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap size={16} className="text-accent" />
                  <span>73 teaching faculty, 36 non-teaching staff</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Department */}
          <Card className="card-conference animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <CardTitle className="text-xl text-accent">BCA Department</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Department of Bachelor of Computer Application was established in 2009, affiliated to Tumkur University. The department consistently nurtures students with strong foundation in technical knowledge, professional competence, and ethical values.
              </p>
              <p className="text-sm text-muted-foreground">
                Focus areas include AI, ML, Cyber Security, and modern programming languages with highly qualified and experienced faculty.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
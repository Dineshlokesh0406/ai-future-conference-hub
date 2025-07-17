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
        <div className="mb-16">
          <Card className="card-conference">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">Conference Preamble</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                    NCEAMBT 2025 is organized on 26th and 27th of September 2025 at Sree Siddaganga College of Arts, Science and Commerce, Tumakuru, Karnataka. This conference provides an opportunity to bring together researchers, Academicians, industry experts, innovators and students to explore the transformative potential of Artificial Intelligence and Machine Learning across diverse domains.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                    This conference serves as a vibrant platform to exchange cutting edge ideas, present breakthrough research, showcase innovative applications, and discuss ethical, societal and policy implications of AI and ML in shaping a sustainable and intelligent future.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    We invite original research articles, case studies, and project-based submissions (up to 6 pages in length) from undergraduate/postgraduate students, research scholars, faculty members, and industry professionals. All accepted papers will be published in the conference proceedings with an ISBN. Selected papers may also be recommended for publication in peer-reviewed journals.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={aiIllustration} 
                    alt="AI and ML Illustration" 
                    className="rounded-xl shadow-lg max-w-full h-auto max-h-80"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* About Gurukula */}
          <Card className="card-conference animate-slide-up h-fit">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Building className="text-primary" size={20} />
                </div>
                <CardTitle className="text-lg text-primary">Sree Siddaganga Gurukula</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                As an abode of charity, Sree Siddaganga Math has been serving the society for more than a century with free education, food, and shelter to thousands of underprivileged rural children who have come from across the length and breadth of Karnataka and neighboring states, without any discrimination of caste and community. When His Holiness Sree Sree Sree Sivakumara Swamiji assumed the full responsibility of Sree Siddaganga Math in 1941, there were about 200 students. The ceaseless and untiring effort of Sree Sree Swamiji has resulted in the present magnitude of more than 10,000 children. Thousands of devotees are visiting Sree Math every day, who are provided free food. Sree Siddalinga Swamiji, the incumbent President of Sree Siddaganga Math has continued the services initiated and nurtured by his Guru.
              </p>
            </CardContent>
          </Card>

          {/* About College */}
          <Card className="card-conference animate-slide-up h-fit">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <Award className="text-secondary" size={20} />
                </div>
                <CardTitle className="text-lg text-secondary">About the College</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm text-justify">
                Sree Siddaganga College of Arts, Science & Commerce, (SSCASC), Tumkur was founded in 1966 by the renowned Sree Siddaganga Education Society, under the patronage of Dr. Sree Sree Sivakumara Mahaswamiji. The college is affiliated to Tumkur University and recognized by the University Grants Commission, New Delhi. SSCASC is a premier First Grade College in Tumkur District and it offers wide range of 5 undergraduate programs (B.A., B.Sc., B.Com., BBM and BCA), along with one postgraduate course (M.Com.) and research center in Commerce. The college enrols about 1,400–1,600 students, supported by 73 teaching faculty (08 Ph.D.) and 36 non-teaching staff, fostering a robust academic environment. The college is NAAC Accredited with an 'A' grade (CGPA:3.16) in its 4th cycle (2024).
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <Users size={14} className="text-accent" />
                  <span>1,400-1,600 students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap size={14} className="text-accent" />
                  <span>73 teaching faculty, 36 non-teaching staff</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Department */}
          <Card className="card-conference animate-slide-up h-fit">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-full">
                  <GraduationCap className="text-accent" size={20} />
                </div>
                <CardTitle className="text-lg text-accent">BCA Department</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm text-justify">
                The Department of Bachelor of Computer Application was established in the year 2009 affiliated to Tumkur University. The Department has consistently nurtured generations of students with a strong foundation in technical knowledge, professional competence, and ethical values. The BCA program is designed to impart a robust understanding of core computer science principles, modern programming languages, and emerging technologies like AI, ML and Cyber Security etc. A team of highly qualified, experienced, and dedicated faculty members drive the department in academic mission, ensuring quality education aligned with the latest industry standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
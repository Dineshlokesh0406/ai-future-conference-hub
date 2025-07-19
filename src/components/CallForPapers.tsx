import { FileText, Calendar, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Call for Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Submit your original research and contribute to the advancement of AI and ML technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Submission Guidelines */}
          <div className="space-y-8">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-primary">
                  <FileText className="text-primary" size={24} />
                  <span>Submission Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We invite original research articles, case studies, and project-based submissions (up to 6 pages in length) from undergraduate/postgraduate students, research scholars, faculty members, and industry professionals.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Maximum 6 pages in IEEE format with double column (A4 size)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Plagiarism should be less than 25%</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Submissions must be sent to: sscasc.cs.conference@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-secondary">
                  <Award className="text-secondary" size={24} />
                  <span>Publication Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All accepted papers will be published in the conference proceedings with an ISBN. Selected high-quality papers may also be recommended for publication in peer-reviewed journals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Dates & Eligibility */}
          <div className="space-y-8">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-accent">
                  <Calendar className="text-accent" size={24} />
                  <span>Important Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-accent/5 rounded-lg">
                    <span className="font-medium text-foreground">Paper Submission Deadline</span>
                    <span className="font-bold text-accent">25.08.2025</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg">
                    <span className="font-medium text-foreground">Acceptance Notification</span>
                    <span className="font-bold text-secondary">30.08.2025</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium text-foreground">Camera-ready Submission</span>
                    <span className="font-bold text-primary">10.09.2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-conference-teal">
                  <Users className="text-conference-teal" size={24} />
                  <span>Who Can Submit</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-conference-teal/5 rounded-lg hover:bg-conference-teal/10 transition-colors cursor-pointer">
                    <div className="font-semibold text-conference-teal mb-1 text-sm">Students</div>
                    <div className="text-xs text-muted-foreground">UG/PG Students</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="font-semibold text-primary mb-1 text-sm">Researchers</div>
                    <div className="text-xs text-muted-foreground">Research Scholars</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors cursor-pointer">
                    <div className="font-semibold text-secondary mb-1 text-sm">Faculty</div>
                    <div className="text-xs text-muted-foreground">Academic Staff</div>
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer">
                    <div className="font-semibold text-accent mb-1 text-sm">Industry</div>
                    <div className="text-xs text-muted-foreground">Professionals</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="btn-conference-primary text-lg px-8 py-4">
                Submit Your Paper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
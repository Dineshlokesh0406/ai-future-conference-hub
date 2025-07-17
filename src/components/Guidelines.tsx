import { FileText, Shield, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Guidelines = () => {
  const authorDuties = [
    "Ensure originality and novelty of research work",
    "No multiple submissions to different conferences/journals",
    "Proper disclosure of funding sources and conflicts of interest",
    "Accurate authorship representation and contribution acknowledgment",
    "Adherence to ethical standards in research methodology"
  ];

  const reviewerDuties = [
    "Maintain strict confidentiality of submitted manuscripts",
    "Provide objective and constructive feedback",
    "Declare conflicts of interest when applicable",
    "Ensure awareness of current literature and proper citation",
    "Complete reviews within stipulated timeframes"
  ];

  const editorDuties = [
    "Ensure fair and unbiased review process",
    "Maintain confidentiality of review process",
    "Make publication decisions based on merit and relevance",
    "Handle appeals and conflicts professionally",
    "Uphold publication ethics and standards"
  ];

  return (
    <section id="guidelines" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Guidelines & Ethics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guidelines for authors and publication ethics standards
          </p>
        </div>

        <Tabs defaultValue="author-guidelines" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="author-guidelines" className="flex items-center space-x-2 hover:bg-primary/10 transition-colors">
              <FileText size={16} />
              <span className="text-sm">Author Guidelines</span>
            </TabsTrigger>
            <TabsTrigger value="publication-ethics" className="flex items-center space-x-2 hover:bg-primary/10 transition-colors">
              <Shield size={16} />
              <span className="text-sm">Publication Ethics</span>
            </TabsTrigger>
            <TabsTrigger value="submission-process" className="flex items-center space-x-2 hover:bg-primary/10 transition-colors">
              <BookOpen size={16} />
              <span className="text-sm">Submission Process</span>
            </TabsTrigger>
          </TabsList>

          {/* Author Guidelines Tab */}
          <TabsContent value="author-guidelines">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-conference">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Manuscript Format</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">IEEE Format with double column layout</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Maximum 6 pages on A4 size paper</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Times New Roman font, 10pt for body text</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Include abstract (150-200 words) and keywords</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-conference">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Content Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Original research with clear contribution</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Plagiarism must be less than 25%</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Proper citations and reference formatting</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Clear methodology and results presentation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-conference md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Submission Details</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Email:</strong> sscasc.cs.conference@gmail.com</p>
                        <p><strong>Subject Line:</strong> [NCEAMBT 2025] Paper Submission</p>
                        <p><strong>File Format:</strong> PDF only</p>
                        <p><strong>File Size:</strong> Maximum 5MB</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Required Documents</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Full paper in IEEE format</p>
                        <p>• Copyright transfer form</p>
                        <p>• Plagiarism report (if requested)</p>
                        <p>• Author biography (50 words each)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Publication Ethics Tab */}
          <TabsContent value="publication-ethics">
            <div className="space-y-8">
              <Card className="card-conference">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">COPE Standards Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    This conference adheres to the Committee on Publication Ethics (COPE) standards to ensure the highest level of publication integrity and ethical conduct.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="card-conference">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center space-x-2">
                      <FileText className="text-primary" size={20} />
                      <span>Duties of Authors</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {authorDuties.map((duty, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{duty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-conference">
                  <CardHeader>
                    <CardTitle className="text-lg text-secondary flex items-center space-x-2">
                      <Shield className="text-secondary" size={20} />
                      <span>Duties of Reviewers</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reviewerDuties.map((duty, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{duty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-conference">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent flex items-center space-x-2">
                      <BookOpen className="text-accent" size={20} />
                      <span>Duties of Editors</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {editorDuties.map((duty, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{duty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Submission Process Tab */}
          <TabsContent value="submission-process">
            <div className="space-y-8">
              <Card className="card-conference">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Step-by-Step Submission Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Prepare Manuscript",
                        description: "Format your paper according to IEEE guidelines and ensure plagiarism is less than 25%"
                      },
                      {
                        step: 2,
                        title: "Submit via Email",
                        description: "Send your paper to sscasc.cs.conference@gmail.com before 25.08.2025"
                      },
                      {
                        step: 3,
                        title: "Review Process",
                        description: "Papers undergo peer review by domain experts"
                      },
                      {
                        step: 4,
                        title: "Acceptance Notification",
                        description: "Authors will be notified of acceptance/rejection by 30.08.2025"
                      },
                      {
                        step: 5,
                        title: "Camera-Ready Submission",
                        description: "Submit final version incorporating reviewer feedback by 10.09.2025"
                      },
                      {
                        step: 6,
                        title: "Registration & Payment",
                        description: "Complete registration and payment to confirm participation"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Guidelines;
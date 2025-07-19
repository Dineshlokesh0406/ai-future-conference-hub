import { Crown, Star, Users, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Committee = () => {
  const keynoteData = [
    {
      name: "Dr. Shreedhara K S",
      title: "Professor of CSE",
      institution: "University BDT College of Engineering, Davanagere, Karnataka"
    },
    {
      name: "Dr. Dilip Kumar S M",
      title: "Professor in Computer Science Engineering",
      institution: "University Visvesvaraya College of Engineering, Bangalore"
    },
    {
      name: "Dr. Mahesha BR Pandit",
      title: "Chief Technology Officer",
      institution: "Canarys Automations Limited, Bangalore"
    },
    {
      name: "Dr. M A Rajan",
      title: "Principal Scientist, Applied Cryptography Group",
      institution: "Tata Consultancy Services, Bangalore"
    }
  ];

  const advisoryCommittee = [
    {
      name: "Dr. Dileep A D",
      title: "Professor, Dept. of Computer Science and Engineering & Dean Administration",
      institution: "Indian Institute of Technology, Dharwad"
    },
    {
      name: "Dr. R Padmavathy",
      title: "Professor & Former HoD, Dept. of Computer Science and Engineering",
      institution: "National Institute of Technology, Warangal"
    },
    {
      name: "Dr. Deepak K T",
      title: "Associate Dean - Research and Development [R&D]",
      institution: "Indian Institute of Information Technology Dharwad"
    },
    {
      name: "Dr. Sunil Saumya",
      title: "Associate Dean, Academics",
      institution: "Indian Institute of Information Technology Dharwad"
    },
    {
      name: "Dr. Jaisankarn",
      title: "Professor Higher Academic Grade, School of Computer Science and Engineering",
      institution: "VIT, Vellore"
    },
    {
      name: "Dr B. Surendiran",
      title: "Associate professor, Dept of CSE",
      institution: "NIT Puducherry, Thiruvettakudy, Karaikal, Puducherry (U.T.)"
    },
    {
      name: "Prof. P. Paramashivaiah",
      title: "Professor, Dept. of Commerce and Management",
      institution: "Tumkur University"
    },
    {
      name: "Dr. H.M. Dakshina Murthy",
      title: "Principal",
      institution: "SSCASCW, Tumakuru"
    },
    {
      name: "Dr. Prema Sudha B G",
      title: "HOD, Dept. of MCA",
      institution: "SIT, Tumkuru"
    },
    {
      name: "Dr. Sunitha N.R",
      title: "HOD, Dept. of Computer Science and Engineering",
      institution: "SIT, Tumkuru"
    }
  ];

  return (
    <section id="committee" className="py-20 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Committee & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished leaders and experts guiding the conference towards excellence
          </p>
        </div>

        {/* Leadership Hierarchy */}
        <div className="mb-16 space-y-8">
          {/* Chief Patron */}
          <Card className="card-conference">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl text-primary">
                <Crown className="text-accent" size={28} />
                <span>Chief Patron</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Sree Sree Siddalinga Swamiji</h3>
              <p className="text-muted-foreground">President, Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</p>
            </CardContent>
          </Card>

          {/* Patrons */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Sri T K Nanjundappa</h4>
                <p className="text-sm text-muted-foreground">Hon. Secretary, Sree Siddaganga Education Society</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Prof. Shivakumaraiah</h4>
                <p className="text-sm text-muted-foreground">Joint Secretary, Sree Siddaganga Education Society</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Dr. D N Yogeeshwarappa</h4>
                <p className="text-sm text-muted-foreground">Coordinator for Degree Colleges, Sree Siddaganga Education Society</p>
              </CardContent>
            </Card>
          </div>

          {/* Chairman and General Chair */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-accent">
                  <Users className="text-accent" size={24} />
                  <span>Chairman</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Dr. T B Nijalingappa</h3>
                <p className="text-muted-foreground">Principal, Sree Siddaganga College of Arts Science and Commerce, Tumakuru</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-conference-teal">
                  <Users className="text-conference-teal" size={24} />
                  <span>General Chair</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Dr. S R Mahadev Prasanna</h3>
                <p className="text-muted-foreground">Director, IIIT, Dharwad</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center space-x-3">
              <Mic className="text-accent" size={32} />
              <span>Keynote Speakers</span>
            </h3>
            <p className="text-lg text-muted-foreground">Distinguished experts sharing insights on cutting-edge AI and ML technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keynoteData.map((speaker, index) => (
              <Card key={index} className="card-conference text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mic className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{speaker.name}</h4>
                  <p className="text-sm font-medium text-secondary mb-2">{speaker.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{speaker.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Advisory Committee</h3>
            <p className="text-lg text-muted-foreground">Esteemed academicians and researchers providing strategic guidance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((member, index) => (
              <Card key={index} className="card-conference">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-secondary mb-2">{member.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Support Team</h3>
            <p className="text-lg text-muted-foreground">Dedicated team members ensuring smooth conference operations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-conference">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">Sowmya L</h4>
                <p className="text-sm font-medium text-secondary mb-2">Registration Support</p>
                <p className="text-sm text-muted-foreground">9480112873</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-secondary" size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">Shruthi P</h4>
                <p className="text-sm font-medium text-secondary mb-2">Technical Support</p>
                <p className="text-sm text-muted-foreground">8970599606</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-accent" size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">Uday Kumar</h4>
                <p className="text-sm font-medium text-secondary mb-2">Accommodation Support</p>
                <p className="text-sm text-muted-foreground">9620455342</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
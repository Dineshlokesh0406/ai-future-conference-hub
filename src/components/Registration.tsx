import { CreditCard, Users, GraduationCap, Building, Award, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Registration = () => {
  const registrationCategories = [
    {
      category: "Academicians/Faculty",
      fee: "₹1,000",
      icon: GraduationCap,
      color: "primary",
      description: "Academic staff and faculty members"
    },
    {
      category: "Industry Professionals",
      fee: "₹2,000",
      icon: Building,
      color: "secondary",
      description: "Industry experts and professionals"
    },
    {
      category: "Research Scholars",
      fee: "₹500",
      icon: Award,
      color: "accent",
      description: "PhD and research scholars"
    },
    {
      category: "PG Students",
      fee: "₹300",
      icon: Users,
      color: "conference-teal",
      description: "Postgraduate students"
    },
    {
      category: "UG Students",
      fee: "₹200",
      icon: Users,
      color: "conference-gold",
      description: "Undergraduate students"
    }
  ];

  const paymentDetails = [
    { label: "Bank Name", value: "Bank of Baroda" },
    { label: "Branch Name", value: "Tumkur" },
    { label: "Account Number", value: "74000100003149" },
    { label: "Account Type", value: "Saving" },
    { label: "IFSC Code", value: "BARB0VJTUMK" },
    { label: "MICR Code", value: "572012011" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary/10 to-primary/5 border-primary/20',
      'secondary': 'from-secondary/10 to-secondary/5 border-secondary/20',
      'accent': 'from-accent/10 to-accent/5 border-accent/20',
      'conference-teal': 'from-conference-teal/10 to-conference-teal/5 border-conference-teal/20',
      'conference-gold': 'from-conference-gold/10 to-conference-gold/5 border-conference-gold/20'
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
    <section id="registration" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Registration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Register now to secure your participation in NCEAMBT 2025
          </p>
        </div>

        {/* Registration Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {registrationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`card-conference bg-gradient-to-br ${getColorClasses(category.color)} animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 bg-background/50`}>
                    <IconComponent className={`${getIconColor(category.color)}`} size={32} />
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <div className={`text-3xl font-bold ${getIconColor(category.color)}`}>
                    {category.fee}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="text-center mb-12">
          <Card className="card-conference bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Percent className="text-accent" size={32} />
                <h3 className="text-2xl font-bold text-accent">Special Discount</h3>
              </div>
              <p className="text-lg text-foreground mb-4">
                <strong>50% Fee Waiver</strong> for SC/ST candidates
              </p>
              <Badge variant="secondary" className="text-sm">
                Supporting Inclusive Education
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Registration Actions */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <Button size="lg" className="btn-conference-primary text-lg px-8 py-4 mr-4">
              Register Now
            </Button>
            <p className="text-sm text-muted-foreground">
              Registration Link: <a href="https://forms.gle/4qdeUiRbUCpaTs88A" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Form</a>
            </p>
          </div>
        </div>

        {/* Payment Details */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-conference">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-primary">
                <CreditCard className="text-primary" size={28} />
                <span>Payment Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Bank Account Information</h4>
                  {paymentDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">{detail.label}:</span>
                      <span className="font-bold text-primary">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Payment Instructions</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Payment details need to be filled in the registration form (Google Form)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Complete registration and submit camera ready paper on or before 10.09.2025</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Accommodation will be available at nominal charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
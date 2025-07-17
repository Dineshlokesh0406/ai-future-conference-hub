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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {registrationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="card-conference bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-slide-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="p-3 rounded-full w-fit mx-auto mb-2 bg-background/50">
                    <IconComponent className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-sm leading-tight">{category.category}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {category.fee}
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="text-center mb-8">
          <Card className="card-conference bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 max-w-lg mx-auto">
            <CardContent className="p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Percent className="text-accent" size={20} />
                <h3 className="text-lg font-bold text-accent">Special Discount</h3>
              </div>
              <p className="text-sm text-foreground mb-2">
                <strong>50% Fee Waiver</strong> for SC/ST candidates
              </p>
              <Badge variant="secondary" className="text-xs">
                Supporting Inclusive Education
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Registration Actions */}
        <div className="text-center mb-12">
          <div className="space-y-3">
            <Button size="lg" className="btn-conference-primary text-base px-6 py-3">
              Register Now
            </Button>
            <p className="text-xs text-muted-foreground">
              Registration Link: <a href="https://forms.gle/4qdeUiRbUCpaTs88A" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Form</a>
            </p>
          </div>
        </div>

        {/* Payment Details */}
        <div className="max-w-3xl mx-auto">
          <Card className="card-conference">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg text-primary">
                <CreditCard className="text-primary" size={20} />
                <span>Payment Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground mb-3">Bank Account Information</h4>
                  {paymentDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded-lg text-left">
                      <span className="font-medium text-foreground text-sm">{detail.label}:</span>
                      <span className="font-bold text-primary text-sm">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground mb-3">Payment Instructions</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p>Payment details need to be filled in the registration form (Google Form)</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p>Complete registration and submit camera ready paper on or before 10.09.2025</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  LogOut, 
  Home, 
  Calendar, 
  FileText, 
  Users, 
  Mail,
  MapPin,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';
import type { User } from '@supabase/supabase-js';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const userInitials = user?.user_metadata?.first_name && user?.user_metadata?.last_name
    ? `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`
    : user?.email?.[0]?.toUpperCase() || 'U';

  const userName = user?.user_metadata?.first_name && user?.user_metadata?.last_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
    : user?.email || 'User';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary/80"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <Card className="mb-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Welcome back, {userName}!</CardTitle>
                <CardDescription className="text-lg">
                  Welcome to NCEAMBT 2025 Dashboard
                </CardDescription>
                <Badge variant="secondary" className="mt-2">
                  <Mail className="w-3 h-3 mr-1" />
                  {user?.email}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Conference Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Event Details */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-primary">Conference Dates</p>
                <p className="text-sm text-muted-foreground">26th - 27th September 2025</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Location</p>
                <p className="text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  Sree Siddaganga College, Tumakuru
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-primary">Paper Submission</p>
                <p className="text-sm text-muted-foreground">25th August 2025</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Acceptance Notification</p>
                <p className="text-sm text-muted-foreground">30th August 2025</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Camera-Ready</p>
                <p className="text-sm text-muted-foreground">10th September 2025</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => window.open('https://forms.gle/4qdeUiRbUCpaTs88A', '_blank')}
              >
                <Users className="w-4 h-4 mr-2" />
                Register for Conference
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => navigate('/#call-for-papers')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Submit Paper
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => navigate('/#contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Organizers
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Conference Tracks Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary" />
              Conference Tracks
            </CardTitle>
            <CardDescription>
              Explore the different research tracks available for paper submission
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Emerging Trends in AI and ML",
                "AI in Healthcare, Education, Agriculture",
                "AI in Cyber Security and Data Privacy",
                "AI in Business, Finance and Economics",
                "Gaming, AR/VR, and Metaverse",
                "Innovations in AI: Algorithms and Applications"
              ].map((track, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-sm">Track {index + 1}</p>
                  <p className="text-sm text-muted-foreground">{track}</p>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => navigate('/#tracks')}
            >
              View Detailed Track Information
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
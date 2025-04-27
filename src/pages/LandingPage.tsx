
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Blocks, CircleDollarSign, LineChart, PieChart } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-br from-background via-background/90 to-muted">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-brand-purple/5 z-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/558d107c-e093-46e6-8779-b8feb0f0edbe.png" 
                alt="ANOWO Logo" 
                className="h-24 w-24"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-darkpurple mb-6">
              ANOWO <span className="text-brand-teal">Analytics</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
              Your digital marketing performance in one place. Track and analyze advertising campaigns across multiple platforms.
            </p>
            <Button 
              onClick={handleGetStarted} 
              size="lg" 
              className="bg-brand-purple hover:bg-brand-darkpurple text-white font-medium px-8"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-darkpurple mb-12">
            All Your Marketing Data In One Place
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-brand-purple/10 p-3 mb-4">
                    <BarChart3 className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Platform Analytics</h3>
                  <p className="text-muted-foreground">
                    Connect and analyze data from Google Ads, Meta Ads, LinkedIn, and more in a unified dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-teal/10 hover:border-brand-teal/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-brand-teal/10 p-3 mb-4">
                    <LineChart className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor KPIs like clicks, conversions, CTR, CPA, and ROAS with beautiful visualizations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-darkpurple/10 hover:border-brand-darkpurple/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-brand-darkpurple/10 p-3 mb-4">
                    <CircleDollarSign className="h-8 w-8 text-brand-darkpurple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Budget Optimization</h3>
                  <p className="text-muted-foreground">
                    Identify which campaigns deliver the best ROI and optimize your marketing budget.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-darkpurple mb-4">
            Supported Platforms
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            ANOWO connects with all your major advertising platforms, bringing your data together in one dashboard.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
                  <path d="M22.5 12c0-.5-.04-1.01-.13-1.5H12v3.01h5.92c-.26 1.36-1.04 2.51-2.21 3.28v2.73h3.57c2.09-1.92 3.29-4.75 3.29-8.02z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.55 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Google Ads</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Meta Ads</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium">LinkedIn Ads</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="50%" stopColor="#F56040" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Instagram Ads</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-purple/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-darkpurple mb-6">
            Ready to optimize your marketing campaigns?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join ANOWO today and get a clear view of your digital marketing performance across all platforms.
          </p>
          <Button 
            onClick={handleGetStarted} 
            size="lg" 
            className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium px-8"
          >
            Start Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <img 
                src="/lovable-uploads/558d107c-e093-46e6-8779-b8feb0f0edbe.png" 
                alt="ANOWO Logo" 
                className="h-10 w-10 mr-3" 
              />
              <div>
                <h2 className="text-2xl font-bold text-brand-darkpurple">ANOWO</h2>
                <p className="text-muted-foreground text-sm">Your digital marketing companion</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">Features</a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">Support</a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 ANOWO Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

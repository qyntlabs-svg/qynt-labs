import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTier from "@/components/PricingTier";
import WaitlistForm from "@/components/WaitlistForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, Mail, Star, Clock, ArrowRight } from "lucide-react";

const youtubeAnalyzerPricing = [
  {
    duration: "1 Month",
    price: 4099,
    features: ["Full analytics dashboard", "Unlimited video analysis", "Comment sentiment analysis", "Email support"],
  },
  {
    duration: "3 Months",
    price: 3499,
    originalPrice: 4099,
    discount: "Save 15%",
    features: ["Everything in 1 Month", "Priority support", "Weekly trend reports", "Custom alerts"],
  },
  {
    duration: "6 Months",
    price: 3099,
    originalPrice: 4099,
    discount: "Save 25%",
    isPopular: true,
    features: ["Everything in 3 Months", "API access", "Competitor analysis", "Dedicated account manager"],
  },
  {
    duration: "12 Months",
    price: 2699,
    originalPrice: 4099,
    discount: "Save 35%",
    features: ["Everything in 6 Months", "White-label reports", "Custom integrations", "Annual strategy review"],
  },
];

const comingSoonServices = [
  {
    title: "LinkedIn Job Profile Finder",
    icon: Linkedin,
    description: "Find ideal candidates automatically",
    href: "/services/linkedin-job-profile-finder",
  },
  {
    title: "LinkedIn Job Finder",
    icon: Linkedin,
    description: "Discover relevant job opportunities",
    href: "/services/linkedin-job-finder",
  },
  {
    title: "Gmail Automation",
    icon: Mail,
    description: "Automate your email workflows",
    href: "/services/gmail-automation",
  },
  {
    title: "Google Review Analyzer",
    icon: Star,
    description: "Extract insights from reviews",
    href: "/services/google-review-analyzer",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-down">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
              Choose the plan that works best for you. Commit longer, save more. All plans include full access to features.
            </p>
          </div>
        </section>

        {/* YouTube Analyzer Pricing */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Youtube className="h-8 w-8" />
              </div>
              <div className="text-left">
                <Badge className="mb-1">Available Now</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  YouTube Analyzer
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
              {youtubeAnalyzerPricing.map((tier, index) => (
                <div key={tier.duration} style={{animation: 'fade-in-up 0.8s ease-out', animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards'}}>
                  <PricingTier {...tier} serviceName="YouTube Analyzer" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Clock className="h-3 w-3 mr-1" />
                Coming Soon
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                More Services on the Way
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our waitlist to be notified when these services launch and get exclusive early-bird pricing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {comingSoonServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-border/50 bg-card/50">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-secondary/50 text-secondary-foreground w-fit mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="secondary" className="w-full">
                        <Link to={service.href} className="flex items-center justify-center gap-2">
                          Join Waitlist
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Not sure which plan is right for you? Get in touch and we'll help you find the perfect fit.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

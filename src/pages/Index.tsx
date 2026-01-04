import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ServiceCard";
import WaitlistForm from "@/components/WaitlistForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlitchText } from "@/components/GlitchText";
import { DataStream } from "@/components/DataStream";
import { ArrowRight, Youtube, Linkedin, Mail, Star, Sparkles, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    title: "YouTube Analyzer",
    description: "Extract insights from YouTube videos, comments, and engagement metrics to optimize your content strategy.",
    icon: Youtube,
    href: "/services/youtube-analyzer",
    isComingSoon: false,
  },
  {
    title: "LinkedIn Job Profile Finder",
    description: "Automatically find and analyze LinkedIn profiles matching your ideal candidate criteria.",
    icon: Linkedin,
    href: "/services/linkedin-job-profile-finder",
    isComingSoon: true,
  },
  {
    title: "LinkedIn Job Finder",
    description: "Discover relevant job opportunities on LinkedIn with intelligent filtering and alerts.",
    icon: Linkedin,
    href: "/services/linkedin-job-finder",
    isComingSoon: true,
  },
  {
    title: "Gmail Automation",
    description: "Automate email workflows, responses, and organization with AI-powered intelligence.",
    icon: Mail,
    href: "/services/gmail-automation",
    isComingSoon: true,
  },
  {
    title: "Google Review Analyzer",
    description: "Analyze customer reviews to extract sentiment, trends, and actionable business insights.",
    icon: Star,
    href: "/services/google-review-analyzer",
    isComingSoon: true,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "Our advanced services automatically process and analyze your data to deliver meaningful insights.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not hours. Our automation services work at scale to save you time.",
  },
  {
    icon: BarChart3,
    title: "Actionable Intelligence",
    description: "Receive quantified insights with clear recommendations that you can implement immediately.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedBackground />
          <DataStream />
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-down">
              <Sparkles className="h-4 w-4" />
              Automation Intelligence Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              <GlitchText text="QYNT" className="text-4xl md:text-6xl lg:text-7xl font-bold" />
              {" "}— Converting Data into Quantified Intelligence
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
              Leverage our suite of automation services to transform your data into actionable insights and drive informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/services/youtube-analyzer" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How QYNT Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our intelligent automation services analyze your data and deliver quantified insights that empower you to make data-driven decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 transition-all duration-300 hover:scale-105 hover:bg-card/50 rounded-2xl"
                  style={{
                    animation: 'fade-in-up 0.8s ease-out',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Automation Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our growing suite of automation tools designed to extract intelligence from your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Be the first to know when we launch new automation services. Join our newsletter for updates and early access.
            </p>
            <div className="flex justify-center">
              <WaitlistForm serviceName="new services" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

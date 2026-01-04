import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import ContactForm from "@/components/ContactForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Badge } from "@/components/ui/badge";
import { Clock, Linkedin, Mail, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
}

const servicesData: Record<string, ServiceInfo> = {
  "linkedin-job-profile-finder": {
    title: "LinkedIn Job Profile Finder",
    description: "Automatically find and analyze LinkedIn profiles matching your ideal candidate criteria.",
    longDescription: "Stop spending hours manually searching for candidates. Our LinkedIn Job Profile Finder uses advanced algorithms to identify profiles that match your exact requirements, from skills and experience to location and industry. Get a curated list of potential candidates delivered to you automatically.",
    icon: Linkedin,
    features: [
      "Advanced search filters for precise matching",
      "Automatic profile scoring and ranking",
      "Export results to CSV or integrate with ATS",
      "Daily automated searches",
      "Candidate comparison tools",
    ],
  },
  "linkedin-job-finder": {
    title: "LinkedIn Job Finder",
    description: "Discover relevant job opportunities on LinkedIn with intelligent filtering and alerts.",
    longDescription: "Never miss your dream job again. LinkedIn Job Finder monitors job postings 24/7 and alerts you to opportunities that match your criteria. Our AI understands context, so you get relevant matches - not just keyword hits.",
    icon: Linkedin,
    features: [
      "Real-time job monitoring",
      "AI-powered relevance scoring",
      "Instant email and push notifications",
      "Salary range estimation",
      "Company culture insights",
    ],
  },
  "gmail-automation": {
    title: "Gmail Automation",
    description: "Automate email workflows, responses, and organization with AI-powered intelligence.",
    longDescription: "Transform your inbox from a time sink into a productivity powerhouse. Gmail Automation handles routine emails, organizes your inbox intelligently, and even drafts responses for your approval. Spend less time on email and more time on what matters.",
    icon: Mail,
    features: [
      "Smart email categorization",
      "Auto-response drafting",
      "Follow-up reminders",
      "Meeting scheduling automation",
      "Email analytics and insights",
    ],
  },
  "google-review-analyzer": {
    title: "Google Review Analyzer",
    description: "Analyze customer reviews to extract sentiment, trends, and actionable business insights.",
    longDescription: "Turn customer feedback into actionable intelligence. Google Review Analyzer processes reviews at scale, identifying sentiment trends, common themes, and areas for improvement. Know exactly what your customers love and where you can do better.",
    icon: Star,
    features: [
      "Sentiment analysis at scale",
      "Trend identification over time",
      "Competitor review comparison",
      "Automated response suggestions",
      "Weekly insight reports",
    ],
  },
};

const ComingSoonService = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? servicesData[serviceSlug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 flex items-center gap-1 w-fit mx-auto">
                <Clock className="h-3 w-3" />
                Coming Soon
              </Badge>
              
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                <Icon className="h-12 w-12" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                What to Expect
              </h2>
              
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Be the First to Know
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join our waitlist to get early access and exclusive launch pricing when {service.title} goes live.
            </p>
            <div className="flex justify-center mb-16">
              <WaitlistForm serviceName={service.title} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-2xl">
            <ContactForm 
              title="Have Questions?" 
              description={`Want to learn more about ${service.title}? Get in touch with our team.`}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonService;

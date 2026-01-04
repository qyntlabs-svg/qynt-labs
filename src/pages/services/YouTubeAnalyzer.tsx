import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTier from "@/components/PricingTier";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Youtube, BarChart3, MessageSquare, TrendingUp, Users, Clock, Check, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track views, engagement rates, and growth trends across all your videos.",
  },
  {
    icon: MessageSquare,
    title: "Comment Analysis",
    description: "AI-powered sentiment analysis of comments to understand audience feedback.",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description: "Identify trending topics and optimal posting times for maximum reach.",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Deep dive into demographics, watch patterns, and subscriber behavior.",
  },
];

const pricingTiers = [
  {
    duration: "1 Month",
    price: 49,
    features: ["Full analytics dashboard", "Unlimited video analysis", "Comment sentiment analysis", "Email support"],
  },
  {
    duration: "3 Months",
    price: 42,
    originalPrice: 49,
    discount: "Save 15%",
    features: ["Everything in 1 Month", "Priority support", "Weekly trend reports", "Custom alerts"],
  },
  {
    duration: "6 Months",
    price: 37,
    originalPrice: 49,
    discount: "Save 25%",
    isPopular: true,
    features: ["Everything in 3 Months", "API access", "Competitor analysis", "Dedicated account manager"],
  },
  {
    duration: "12 Months",
    price: 32,
    originalPrice: 49,
    discount: "Save 35%",
    features: ["Everything in 6 Months", "White-label reports", "Custom integrations", "Annual strategy review"],
  },
];

const faqs = [
  {
    question: "How does YouTube Analyzer work?",
    answer: "YouTube Analyzer connects to your YouTube channel through the official API. Once connected, it automatically collects and analyzes data from your videos, comments, and audience metrics to provide actionable insights.",
  },
  {
    question: "Is my YouTube data secure?",
    answer: "Absolutely. We use industry-standard encryption and never share your data with third parties. You can revoke access at any time through your YouTube settings.",
  },
  {
    question: "Can I analyze competitor channels?",
    answer: "Yes! With the 6-month and 12-month plans, you can add competitor channels to track and compare their performance against yours.",
  },
  {
    question: "How often is data updated?",
    answer: "Data is refreshed every 6 hours for all accounts. Real-time updates are available for specific metrics on request.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel at any time. You'll continue to have access until the end of your billing period.",
  },
];

const YouTubeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6">Now Available</Badge>
              
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                <Youtube className="h-12 w-12" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                YouTube Analyzer
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Extract powerful insights from your YouTube channel. Understand your audience, optimize content, and grow faster with data-driven decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to understand and grow your YouTube presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes and start getting insights immediately.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Connect", description: "Link your YouTube channel with one click using secure OAuth." },
                { step: "2", title: "Analyze", description: "Our AI processes your data and identifies key patterns and insights." },
                { step: "3", title: "Optimize", description: "Get actionable recommendations to improve your content strategy." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for you. Longer commitments mean bigger savings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <PricingTier key={tier.duration} {...tier} serviceName="YouTube Analyzer" />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Channel?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Start analyzing your YouTube data today and unlock insights that drive growth.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started Now
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

export default YouTubeAnalyzer;

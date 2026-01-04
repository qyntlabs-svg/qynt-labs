import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import WaitlistForm from "@/components/WaitlistForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Sparkles, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-down">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
              Have questions about our automation services? We're here to help you transform your data into quantified intelligence.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
              {/* Contact Form */}
              <div style={{animation: 'fade-in-up 0.8s ease-out', animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards'}}>
                <ContactForm 
                  title="Send Us a Message" 
                  description="Fill out the form below and we'll get back to you within 24 hours."
                />
              </div>
              
              {/* Info Cards */}
              <div className="space-y-6" style={{animation: 'fade-in-up 0.8s ease-out', animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards'}}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">General Inquiries</h3>
                        <p className="text-muted-foreground">
                          Questions about our services, pricing, or how QYNT can help your business? We'd love to chat.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-2">
                          Have questions? Reach out to us directly:
                        </p>
                        <a href="mailto:qyntlabs@gmail.com" className="text-primary hover:underline">
                          qyntlabs@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-2">
                          Speak with our team directly:
                        </p>
                        <div className="space-y-1">
                          <a href="tel:+918072864180" className="text-primary hover:underline block">
                            +91 8072864180
                          </a>
                          <a href="tel:+918680030712" className="text-primary hover:underline block">
                            +91 8680030712
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Sparkles className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Partnerships</h3>
                        <p className="text-muted-foreground">
                          Interested in partnering with QyntLabs? Let's explore how we can work together.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* About Section */}
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">About QyntLabs</h3>
                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-primary">QYNT</span> — Converting data into quantified intelligence.
                  </p>
                  <p className="text-muted-foreground">
                    We provide automation services that help businesses and individuals extract meaningful insights from their data. Our mission is to make data-driven decision making accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for product updates, automation tips, and early access to new services.
            </p>
            <div className="flex justify-center">
              <WaitlistForm serviceName="newsletter" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

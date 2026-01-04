import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun, Youtube, Linkedin, Mail, Star } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { GlitchText } from "@/components/GlitchText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/services/youtube-analyzer", label: "YouTube Analyzer" },
    { href: "/services/linkedin-job-profile-finder", label: "LinkedIn Job Profile Finder" },
    { href: "/services/linkedin-job-finder", label: "LinkedIn Job Finder" },
    { href: "/services/gmail-automation", label: "Gmail Automation" },
    { href: "/services/google-review-analyzer", label: "Google Review Analyzer" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceIcons: Record<string, any> = {
    'YouTube Analyzer': Youtube,
    'LinkedIn Job Profile Finder': Linkedin,
    'LinkedIn Job Finder': Linkedin,
    'Gmail Automation': Mail,
    'Google Review Analyzer': Star,
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50" />
      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative z-10">
        <Link to="/" className="flex items-center gap-2 group">
          <GlitchText text="QYNT" className="text-2xl font-bold" />
          <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-foreground group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-foreground group-hover:w-full transition-all duration-300" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[380px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl shadow-primary/10 overflow-hidden animate-fade-in-down">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <ul className="relative z-10 p-2">
                  {services.map((service, index) => {
                    const Icon = serviceIcons[service.label];
                    return (
                      <li key={service.href}>
                        <Link
                          to={service.href}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-all duration-300 group/item hover:translate-x-1"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                            {service.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild className="bg-gradient-to-r from-primary to-accent-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-foreground">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="icon" className="flex-shrink-0" onClick={toggleTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

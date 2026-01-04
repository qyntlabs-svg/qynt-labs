import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: "/services/youtube-analyzer", label: "YouTube Analyzer" },
    { href: "/services/linkedin-job-profile-finder", label: "LinkedIn Job Profile Finder" },
    { href: "/services/linkedin-job-finder", label: "LinkedIn Job Finder" },
    { href: "/services/gmail-automation", label: "Gmail Automation" },
    { href: "/services/google-review-analyzer", label: "Google Review Analyzer" },
  ];

  const company = [
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                QYNT
              </span>
              <span className="text-lg font-medium text-foreground">Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Converting data into quantified intelligence. We build automation tools that transform your data into actionable insights.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:qyntlabs@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                  qyntlabs@gmail.com
                </a>
                <a href="tel:+918072864180" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                  +91 8072864180
                </a>
                <a href="tel:+918680030712" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                  +91 8680030712
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} QyntLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isComingSoon?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, href, isComingSoon = false }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-foreground to-primary animate-pulse" />
      </div>
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6" />
          </div>
          {isComingSoon && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Coming Soon
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <Button asChild variant={isComingSoon ? "secondary" : "default"} className="w-full group/btn">
          <Link to={href} className="flex items-center justify-center gap-2">
            {isComingSoon ? "Join Waitlist" : "Learn More"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

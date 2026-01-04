import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingTierProps {
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  features: string[];
  isPopular?: boolean;
  serviceName: string;
}

const PricingTier = ({
  duration,
  price,
  originalPrice,
  discount,
  features,
  isPopular = false,
  serviceName,
}: PricingTierProps) => {
  return (
    <Card className={`relative overflow-hidden ${isPopular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border/50'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-none rounded-bl-lg">Most Popular</Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-lg">{duration}</CardTitle>
        <CardDescription>{serviceName}</CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-foreground">₹{price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {originalPrice && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground line-through">₹{originalPrice}/mo</span>
              <Badge variant="secondary" className="text-xs">{discount}</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full" variant={isPopular ? "default" : "secondary"}>
          <Link to="/contact">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingTier;

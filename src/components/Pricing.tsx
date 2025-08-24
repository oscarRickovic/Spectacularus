import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Book Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Free Consultation
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Start with a free consultation. Pricing is tailored to your specific
        project needs and goals.
      </h3>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Free Consultation
              <Badge variant="secondary" className="text-sm text-primary">
                $0
              </Badge>
            </CardTitle>
            <CardDescription>
              A personalized session to analyze your project, understand your
              needs, and propose the best solutions. Final pricing will be
              determined based on your requirements.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button className="w-full">Book Now</Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                "Understand your business challenges",
                "Tailored technology solutions",
                "Optional financial advice",
                "Scalable and secure implementation",
              ].map((benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:grid grid-cols-2 gap-6 relative w-[800px]">
      {/* Testimonial */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage 
              alt="client avatar"
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80" 
            />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Maria Johnson</CardTitle>
            <CardDescription>COO @NextWave Tech</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          “Partnering with this team accelerated our digital transformation. We
          cut costs by 30% while improving customer engagement.”
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1755534520242-75aaf271b790?q=80&w=687&auto=format&fit=crop"
            alt="team member"
            className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">David Smith</CardTitle>
          <CardDescription className="font-normal text-primary">
            Senior Software Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I specialize in building scalable web platforms that help businesses
            grow faster and serve their clients better.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/"
              target="_blank"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Free Consultation */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary border">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Free Consultation
            <Badge variant="secondary" className="text-sm text-primary">
              Limited Offer
            </Badge>
          </CardTitle>
          <CardDescription className="mt-2">
            Let’s start with a conversation. We’ll analyze your project, 
            identify your challenges, and design a tailored roadmap for success.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Book Your Free Session</Button>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          {[
            "In-depth project analysis",
            "Secured and scalable solutions",
            "AI-driven strategy roadmap",
          ].map((benefit: string) => (
            <span key={benefit} className="flex items-center">
              <Check className="text-green-500" />{" "}
              <h3 className="ml-2">{benefit}</h3>
            </span>
          ))}
        </CardFooter>
      </Card>

      {/* Technology Solutions */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle>Our Technological Edge</CardTitle>
          <CardDescription className="text-md mt-2 space-y-2">
            <p>⚡ Cutting-edge AI integrations</p>
            <p>🔒 Secured & easy-to-use applications</p>
            <p>💾 Robust database solutions</p>
            <p>🌐 Scalable cloud infrastructure</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

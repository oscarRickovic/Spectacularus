import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=21",
    name: "Olivia Parker",
    position: "CEO & Founder",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/oliviaparker" },
      { name: "Instagram", url: "https://www.instagram.com/oliviaparker" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=32",
    name: "Liam Thompson",
    position: "Head of Technology",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/liamthompson" },
      { name: "Facebook", url: "https://www.facebook.com/liamthompson" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=43",
    name: "Sophia Martinez",
    position: "Lead Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/sophiamartinez" },
      { name: "Instagram", url: "https://www.instagram.com/sophiamartinez" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=54",
    name: "Ethan Williams",
    position: "Backend & AI Engineer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/ethanwilliams" },
      { name: "Facebook", url: "https://www.facebook.com/ethanwilliams" },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Expert{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet the professionals behind our innovative digital solutions. Each team member brings expertise and dedication to every project.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} - ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>Professional with expertise in delivering cutting-edge digital solutions tailored to client needs.</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
